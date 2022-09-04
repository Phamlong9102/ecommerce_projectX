import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';

import HomeProduct from '~/components/ChildrenLayout/HomeProductChildren/HomeProduct';
import Categories from '~/components/ChildrenLayout/ChildrenStore/Categories'

function Clothes() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios('https://630ed147379256341881df89.mockapi.io/products?&filter=bags');
         setData(result.data);
      };
      fetchData();
   }, []);

   return (
      <>
         {/* Điều hướng */}
         <div className="w-full h-[140px] relative bg-[#f6f6f6] mt-[32px] selection-default">
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
                  <span className="">Bags</span>
               </Link>
            </div>
            <div className="absolute top-[48%] left-[4%] mt-[10px]">
               <span className="store-big-title">Category: bags</span>
            </div>
         </div>

         <div className="mt-[126px] select-none flex justify-between selection-default mx-[120px]">
            <div>
               <div className="grid grid-cols-3 gap-3">
                  {data.map((product) => (
                     <HomeProduct key={product.id} product={product} />
                  ))}
               </div>
            </div>
            <div>
               <Categories />
            </div>
         </div>
      </>
   );
}

export default Clothes;
