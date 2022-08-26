import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';

function LoginTab(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

LoginTab.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

export default function BasicTabs() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: '100%', height: '100%' }}>
         <Box sx={{}}>
            <Tabs
               sx={{}}
               className="css-heg063-MuiTabs-flexContainer "
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <Tab
                  sx={{
                     width: 150,
                     height: 57,
                     fontWeight: '600 !important',
                     color: '#000',
                     fontFamily: 'Poppins',
                     fontSize: 18,
                  }}
                  className="basis-1/2 css-qygaxq-MuiButtonBase-root-MuiTab-root.Mui-selected "
                  label="Login"
                  {...a11yProps(0)}
               />
               <Tab
                  sx={{ width: 150, height: 57, fontWeight: 600, color: '#000', fontFamily: 'Poppins', fontSize: 18 }}
                  className="basis-1/2 css-1fhfb89-MuiButtonBase-root-MuiTab-root.Mui-selected css-1fhfb89-MuiButtonBase-root-MuiTab-root "
                  label="Register"
                  {...a11yProps(1)}
               />
            </Tabs>
         </Box>
         <LoginTab value={value} index={0}>
            <div className="mx-[35px] ">
               <div className="">
                  <input
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase placeholder:mt-[8px]"
                     placeholder="User Name"
                     type="text"
                  />
               </div>
               <div className="mt-[16px]">
                  <input
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase"
                     placeholder="PassWord"
                     type="text"
                  />
               </div>
               <div className="mt-[18px] flex items-center">
                  <div className="">
                     <input type="checkbox" />
                  </div>
                  <div className="ml-[4px]">
                     <span className="text-[13px] font-light">Remember me</span>
                  </div>
               </div>
               <div to="" className="mt-[12px]">
                  <span className="text-[13px] font-light font-['Poppins']">Lost your password?</span>
               </div>
               <div className="mt-[20px]">
                  <Link to="/admin-products" className="">
                     <div className="under-00"></div>
                     <button className="w-full h-[40px]  bg-black text-white text-['Poppins'] text-[13px] font-semibold">
                        Login
                     </button>
                  </Link>
               </div>
            </div>
         </LoginTab>
         <LoginTab value={value} index={1}>
            <div className="mx-[35px] ">
               <div className="">
                  <input
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase placeholder:mt-[8px]"
                     placeholder="User Name"
                     type="text"
                  />
               </div>
               <div className="mt-[18px] ">
                  <input
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase"
                     placeholder="Email"
                     type="text"
                  />
               </div>
               <div className="mt-[18px] ">
                  <input
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase"
                     placeholder="PassWord"
                     type="text"
                  />
               </div>
               <div className="mt-[18px] ">
                  <input
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase"
                     placeholder="Repeat PassWord"
                     type="text"
                  />
               </div>
               <div className="relative mt-[18px] underline underline-offset-8	">
                  <div className="under-00"></div>
                  <button className="w-full h-[40px]  bg-black text-white text-['Poppins'] text-[13px] font-semibold">
                     Register
                  </button>
               </div>
            </div>
         </LoginTab>
      </Box>
   );
}
