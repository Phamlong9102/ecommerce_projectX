import { Link } from 'react-router-dom';

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
         {/* Filter */}
         <div className="">
            <div className="flex justify-between mt-[86px]">
               <div className="ml-[120px]">
                  <span className="text-[10px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">Showing 1-12 of 12 results</span>
               </div> 
               <div className="mr-[8px]">
                  <select className="w-[250px] cursor-pointer text-[10px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase" size="autoSize">
                     <option className="selection-[#000] cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">Default Sorting</option>
                     <option className="cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">Sort By popularity</option>
                     <option className="cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">Sort By Price: Low To High</option>
                     <option className="cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">Sort By Price: High To Low</option>
                  </select>
               </div>
            </div>

            
         </div>
      </>
   );
}

export default Store;
