import Sorting from '~/components/ChildrenLayout/ChildrenStore/Sorting';
import Categories from '~/components/ChildrenLayout/ChildrenStore/Categories'

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Store() {
   const [data, setData] = useState([]);
   const [defaultData, setDefaultData] = useState([]);
   
   const fetchData = async () => {
      const result = await axios(`https://630ed147379256341881df89.mockapi.io/products`);
      setData(result.data);
      setDefaultData(result.data);
   };

   useEffect(() => {
      fetchData();
   }, [])

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
            </div>
            <div className="absolute top-[48%] left-[4%] mt-[10px]">
               <span className="store-big-title">Store</span>
            </div>
         </div>

         <div className="block md:flex">
            <div className="">
               <Sorting setData={setData} data={data} defaultData={defaultData} />
            </div>
            <div className="flex justify-center mt-[60px] md:mt-[120px]">
               <Categories setData={setData} defaultData={defaultData}/>
            </div>
         </div>
      </>
   );
}

export default Store;
