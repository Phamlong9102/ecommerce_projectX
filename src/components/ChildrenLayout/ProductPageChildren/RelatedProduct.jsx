import { useState, useEffect } from 'react';
import axios from 'axios';

import HomeProduct from '~/components/ChildrenLayout/HomeProductChildren/HomeProduct';

function RelatedProduct() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios('https://630ed147379256341881df89.mockapi.io/products');
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
