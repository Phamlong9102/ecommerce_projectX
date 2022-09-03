import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useState } from 'react';

export default function RangeSlider() {
   const [value, setValue] = useState(460);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   
   return (
      <>
         {/* Filter */}
         <div className="ml-[30px]">
            <div className="text-[18px] font-[Poppins] font-semibold text-black selection-default">
               <div>
                  <span>Price Filter</span>
               </div>
            </div>
            <div className="">
               <Box sx={{ width: 250 }}>
                  <Slider
                     sx={{ color: 'black' }}
                     size="small"
                     value={value}
                     onChange={handleChange}
                     valueLabelDisplay="auto"
                     defaultValue={460}
                     min={0}
                     max={460}
                     step={10}
                  />
               </Box>
            </div>
            <div className="flex justify-between">
               <div className="">
                  <span className="font-['Poppins'] font-medium text-[15px] text-black">Price: $0 - ${value}</span>
               </div>
               <div className="underline underline-offset-4">
                  <button className="text-[15px] font-['Poppins'] font-semibold outline-0 underline underline-offset-4">
                     Filter
                  </button>
               </div>
            </div>
         </div>

         {/* Category */}
         <div className="ml-[30px] mt-[60px]">
            <div className="">
               <span className="text-[18px] font-semibold font-['Poppins'] text-black">Categories</span>
            </div>
            <div className="text-[13px] font-normal text-black ">
               <div className="mt-[18px] ">
                  <span>Clothes {}</span>
               </div>
               <div className="mt-[18px] ">
                  <span>Bags {}</span>
               </div>
               <div className="mt-[18px] ">
                  <span>High Heels {}</span>
               </div>
               <div className="mt-[18px] ">
                  <span>Wallet {}</span>
               </div>
            </div>
         </div>
      </>
   );
}
