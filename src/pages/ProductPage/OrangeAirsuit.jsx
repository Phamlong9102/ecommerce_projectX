import TabPanel from '~/components/ChildrenLayout/ChildOfProduct/TabPanel'; 
import RelatedProduct from '~/components/ChildrenLayout/ProductPageChildren/RelatedProduct';
import ProductPageChildren from '~/components/ChildrenLayout/ProductPageChildren/ProductPageChildren';

import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import axios from 'axios';

function OrangeAirsuit() {

   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios('https://630ed147379256341881df89.mockapi.io/products');

         setData(result.data);
      };

      fetchData();
   }, []);

   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, []);

   return (
      <>
         {/* Điều hướng */}
         <div className="w-full h-[140px] relative flex justify-center bg-[#f6f6f6] mt-[32px] selection-default">
            <div className="absolute top-[40%] left-[4%] store-menu-route">
               <Link className="" to="/">
                  <span className="">Home</span>
               </Link>
               <span className="mx-[10px]">/</span>
               <Link className="" to="/store">
                  <span className="">Store</span>
               </Link>
               <span className="mx-[10px]">/</span>
               <Link className="" to="">
                  <span className="">Orange Airsuit</span>
               </Link>
            </div>
            <div className="absolute top-[48%] left-[4%] mt-[10px]">
               <span className="store-big-title">Orange Airsuit</span>
            </div>
         </div>

         {/* Render UI */}
         {data.slice(1, 2).map((product) => (
            <ProductPageChildren key={product.id} product={product}/>
         ))}

         <div className="mx-[128px] mt-[70px]">
            <TabPanel />
         </div>

         <div className="mx-[128px] mt-[76px] mb-[53px] selection-default">
            <span className="text-[25px] leading-[1.12em] text-black font-semibold font-['Poppins']">
               Related products
            </span>
         </div>

         <div className="mx-[128px] selection-default">
            <RelatedProduct /> 
         </div>
      </>
   );
}

export default OrangeAirsuit;
