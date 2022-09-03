import { Link } from 'react-router-dom';

import Sorting from './Sorting';
import PriceFilterAndCategory from './PriceFilterAndCategory';

import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductDemo from '../../components/ChildrenLayout/HomeProductChildren/HomeProduct';

function Store() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios('https://630ed147379256341881df89.mockapi.io/products');
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
            </div>
            <div className="absolute top-[48%] left-[4%] mt-[10px]">
               <span className="store-big-title">Store</span>
            </div>
         </div>

         <div className="flex">
            <div className="">
               <Sorting />

               {/* Shopping everyday products  */}
               <div className="mt-[18px] select-none flex justify-center selection-default ml-[80px]">
                  <div>
                     <div className="grid grid-cols-3 gap-3">
                        {data.slice(0, 12).map((product) => (
                           <ProductDemo key={product.id} product={product} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-[120px]">
               <PriceFilterAndCategory />
            </div>
         </div>
      </>
   );
}

export default Store;
