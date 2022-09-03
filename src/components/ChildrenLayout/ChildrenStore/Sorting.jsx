import ProductDemo from '~/components/ChildrenLayout/HomeProductChildren/HomeProduct';

import axios from 'axios';
import { useState, useEffect } from 'react';

function Sorting() {
   const [data, setData] = useState([]);

   const [sortValue,  SetSortValue] = useState("0")

   const handleChange = (e) => {
      SetSortValue(e.target.value)
   } 

   useEffect(() => {
      if (sortValue === "0") {
         const fetchData = async () => {
            const result = await axios(`https://630ed147379256341881df89.mockapi.io/products`);
            setData(result.data);
            console.log(result);
         };
         fetchData();
      } if (sortValue === "1") {
         const fetchData = async () => {
            const result = await axios(`https://630ed147379256341881df89.mockapi.io/products?sortBy=popularity`);
            setData(result.data);
            console.log(result);
         };
         fetchData(); 
      } if (sortValue === "2") {
         const fetchData = async () => {
            const result = await axios(`https://630ed147379256341881df89.mockapi.io/products?sortBy=price`);
            setData(result.data);
            console.log(result);
         };
         fetchData(); 
      } if (sortValue === "3") {
         const fetchData = async () => {
            const result = await axios(`https://630ed147379256341881df89.mockapi.io/products?sortBy=price&order=desc`);
            setData(result.data);
            console.log(result);
         };
         fetchData(); 
      } 
   }, [sortValue]) 
      
   return (
      <>
         {/* Sorting */}
         <div className="">
            <div className="flex justify-between mt-[86px]">
               <div className="ml-[88px]">
                  <span className="text-[10px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">
                     Showing 1-12 of 12 results
                  </span>
               </div>
               <div className="mr-[8px]">
                  <select
                     value={sortValue}
                     onChange={handleChange}
                     className="w-[250px] cursor-pointer text-[10px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase"
                     size="autoSize"
                  >
                     <option value={0} className="selection-[#000] cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">
                        Default Sorting
                     </option>
                     <option value={1} className="cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">
                        Sort By popularity
                     </option>
                     <option value={2} className="cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">
                        Sort By Price: Low To High
                     </option>
                     <option value={3} className="cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">
                        Sort By Price: High To Low
                     </option>
                  </select>
               </div>
            </div>

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
      </>
   );
}

export default Sorting;
