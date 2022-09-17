import ProductDemo from '~/components/ChildrenLayout/HomeProductChildren/HomeProduct';

import { useState } from 'react';

function Sorting({ data, setData, defaultData }) {
   const [sortValue, setSortValue] = useState("Default Sorting")

   const handleChange = (e) => {
      setSortValue(e.target.value)
      switch (e.target.value) {
         case 'Default Sorting':
            setData(() => [...defaultData])
            break
         case 'Sort By Popularity':
            const newArr = [...data]
            newArr.sort((a, b) => a.popularity - b.popularity)
            setData(() => [...newArr])
            break;
         case 'Sort By Price: Low To High':
            const LowToHigh = [...data]
            LowToHigh.sort((a, b) => a.price - b.price)
            setData(() => [...LowToHigh])
            break;
         case 'Sort By Price: High To Low':
            const HighToLow = [...data]
            HighToLow.sort((a, b) => b.price - a.price)
            setData(() => [...HighToLow])
            break;
         default:
            break;
      }
   }

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
                     <option value="Default Sorting" className="selection-[#000] cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">
                        Default Sorting
                     </option>
                     <option value="Sort By Popularity" className="cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">
                        Sort By popularity
                     </option>
                     <option value="Sort By Price: Low To High" className="cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">
                        Sort By Price: Low To High
                     </option>
                     <option value="Sort By Price: High To Low" className="cursor-pointer bg-[#f6f6f6] text-[13px] font-['Montserrat'] selection-default tracking-[0.16em] font-normal uppercase">
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
