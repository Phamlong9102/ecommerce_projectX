import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { useState } from 'react';

const currencies = [
   {
      value: 'VNI',
      label: 'Vietnam',
   },
   {
      value: 'CNY',
      label: 'China',
   },
   {
      value: 'JPN',
      label: 'Japan',
   },
   {
      value: 'USD',
      label: 'USA',
   },
];

export default function SelectTextFields() {
   const [country, setCountry] = useState('Vietnam');

   const handleChange = (event) => {
      setCountry(event.target.value);
   };

   return (
      <>
         <Box
            className="css-15v22id-MuiAccordionDetails-root css-ay87if .MuiTextField-root css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover"
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '24ch' } }}
            noValidate
            autoComplete="on"
         >
            <div>
               <TextField className="outline-0 border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc]" id="outlined-select-currency" select value={country} onChange={handleChange}>
                  {currencies.map((option) => (
                     <MenuItem key={option.value} value={option.value}>
                        {option.label}
                     </MenuItem>
                  ))}
               </TextField>
            </div>
         </Box>
         <div className="mt-[12px] cursor-pointer">
            <input className="placeholder:text-[10px] bg-[#f4f4f4] placeholder:font-normal placeholder:uppercase placeholder:tracking-[0.16em] outline-0 border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black cursor:pointer" placeholder="Town / City" type="text" />
         </div>
         <div className="mt-[22px] cursor-pointer">
            <input className="placeholder:text-[10px] bg-[#f4f4f4] placeholder:font-normal placeholder:uppercase placeholder:tracking-[0.16em] outline-0 border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black cursor:pointer" placeholder="Postcost / Zip" type="text" />
         </div>
      
      
      </>
   );
}
