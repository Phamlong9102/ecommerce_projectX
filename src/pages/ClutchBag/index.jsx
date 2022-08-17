import { Link } from 'react-router-dom';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ClutchBag01 from '~/images/Store/ClutchBag/ClutchBag01.jpg';
import ClutchBag02 from '~/images/Store/ClutchBag/ClutchBag02.jpg';
import ClutchBag03 from '~/images/Store/ClutchBag/ClutchBag03.jpg';
import ClutchBag04 from '~/images/Store/ClutchBag/ClutchBag04.jpg';
import ClutchBag05 from '~/images/Store/ClutchBag/ClutchBag05.jpg';
import ClutchBag06 from '~/images/Store/ClutchBag/ClutchBag06.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function ClutchBag() {
   interface TabPanelProps {
      children?: React.ReactNode;
      index: number;
      value: number;
    }
    
    function TabPanel(props: TabPanelProps) {
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
    
    function a11yProps(index: number) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
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
                  <span className="">Clutch Bag</span>
               </Link>
            </div>
            <div className="absolute top-[48%] left-[4%] mt-[10px]">
               <span className="store-big-title">Clutch Bag</span>
            </div>
         </div>

         <div className="mt-[80px] flex justify-center selection-default">
            <div className="flex justify-center">
               <div className="flex flex-col ">
                  <div className="">
                     <img className="w-[112px] h-[136px]" src={ClutchBag01} alt="" />
                  </div>
                  <div className="mt-[10px]">
                     <img className="w-[112px] h-[136px]" src={ClutchBag02} alt="" />
                  </div>
                  <div className="mt-[10px]">
                     <img className="w-[112px] h-[136px]" src={ClutchBag03} alt="" />
                  </div>
                  <div className="mt-[10px]">
                     <img className="w-[112px] h-[136px]" src={ClutchBag04} alt="" />
                  </div>
                  <div className="mt-[10px]">
                     <img className="w-[112px] h-[136px]" src={ClutchBag05} alt="" />
                  </div>
               </div>
               <div className=" ml-[10px]">
                  <img className="w-532px h-[721px]" src={ClutchBag06} alt="" />
               </div>
            </div>
            <div className="ml-[54px] flex flex-col">
               <div className="mb-[4px]">
                  <span className="font-['Poppins'] font-semibold	text-[36px]">Clutch Bag</span>
               </div>
               <div className="">
                  <span className="text-[18px] font-['Poppins'] font-semibold ">$175.00</span>
               </div>
               <div className="flex mt-[16px]">
                  <div>
                     <FontAwesomeIcon icon={faStar} />
                     <FontAwesomeIcon icon={faStar} />
                     <FontAwesomeIcon icon={faStar} />
                     <FontAwesomeIcon icon={faStar} />
                     <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="ml-[10px]">
                     <Link to="" className="text-[16px] font-['Montserrat'] font-normal">
                        (1 customer review)
                     </Link>
                  </div>
               </div>
               <div className="mt-[47px] flex flex-col text-[16px] text-[#2d2d2d] font-normal font-['Montserrat'] leading-[26px]">
                  <span>Lorem proin gravida nibh enean sonauris hime</span>
                  <span>sollicitudin enean , lom himenaeos lorem ean</span>
                  <span>consertquat estruda cono pero.</span>
               </div>
               <div className="mt-[57px] flex">
                  <div className="relative w-[48px] h-[48px] border-[#d3d3d3] border outline-1">
                     <div className="absolute top-[27%] left-[42%]">
                        <span className="font-semibold text-[15px] leading-[26px] font-['Montserrat']">0</span>
                     </div>
                     <div className="absolute left-[101%] top-[-1px] w-[24px] h-[24px] text-center border-[#d3d3d3] border outline-1">
                        <FontAwesomeIcon className="text-[10px]" icon={faAngleUp} />
                     </div>
                     <div className="absolute top-[49%] left-[101%] w-[24px] h-[24px] text-center border-[#d3d3d3] border outline-1">
                        <FontAwesomeIcon className="text-[10px]" icon={faAngleDown} />
                     </div>
                  </div>
                  <button className="ml-[43px] w-[170px] h-[46px] bg-black  button:underline button:underline-offset-8">
                     <span className="text-[13px] font-['Poppins'] font-semibold text-white">Add To Cart</span>
                  </button>
               </div>
               <div className="flex mt-[26px] text-center">
                  <FontAwesomeIcon className="mt-[3px]" icon={faHeart} />
                  <Link to="" className="ml-[4px] text-[14px] font-['Poppins'] font-medium">
                     add to whishlist
                  </Link>
               </div>
               <div className="flex flex-col mt-[64px] text-[10px] uppercase font-medium tracking-[0.29em] text-[##3d3d3d] font-['Montserrat'] leading-[26px]">
                  <div className="">
                     <span className="">Sku: 034</span>
                  </div>
                  <div className="">
                     <span className="">Category: Clothes</span>
                  </div>
                  <div className="">
                     <span className="">Tags: clothes, lifestyle</span>
                  </div>
               </div>
            </div>
         </div>

         <div className="">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
                  <Tab label="Item Three" {...a11yProps(2)} />
               </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
               Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
               Item Three
            </TabPanel>
         </div>
      </>
   );
}

export default ClutchBag;
