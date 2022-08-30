import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import HomeProduct from '~/components/ChildrenLayout/HomeProductChildren/HomeProduct';

function RelatedProduct() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios('http://localhost:3000/products');
         setData(result.data);
      };
      fetchData();
   }, []);

   return (
      <div className="grid grid-cols-4 gap-4">
         {data.slice(0, 4).map((product) => (
            <HomeProduct key={product.id} product={product} />
         ))}
      </div>
   );
}
export default RelatedProduct;
