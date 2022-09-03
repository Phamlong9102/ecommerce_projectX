import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';

import HomeProduct from '~/components/ChildrenLayout/HomeProductChildren/HomeProduct';

function Clothes() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios('https://630ed147379256341881df89.mockapi.io/products?&filter=clothes');
         setData(result.data);
      };
      fetchData();
   }, []);

   return (
      <>
         {/* Điều hướng */}
         <div className="w-[1347px] h-[140px] relative bg-[#f6f6f6] mt-[32px] selection-default">
            <div className="absolute top-[40%] left-[4%] store-menu-route">
               <Link className="" to="/">
                  <span className="">Home</span>
               </Link>
               <span className="mx-[10px]">/</span>
               <Link className="" to="/store">
                  <span className="">Store</span>
               </Link>
               <span className="mx-[10px]">/</span>
               <Link className="" to="/store">
                  <span className="">Category</span>
               </Link>
               <span className="mx-[10px]">/</span>
               <Link className="" to="/store">
                  <span className="">Clothes</span>
               </Link>
            </div>
            <div className="absolute top-[48%] left-[4%] mt-[10px]">
               <span className="store-big-title">Category: clothes</span>
            </div>
         </div>

         <div className="mt-[60px] select-none flex justify-center selection-default mx-[120px]">
            <div>
               <div className="grid grid-cols-3 gap-3">
                  {data.slice(0, 8).map((product) => (
                     <HomeProduct key={product.id} product={product} />
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

export default Clothes;
