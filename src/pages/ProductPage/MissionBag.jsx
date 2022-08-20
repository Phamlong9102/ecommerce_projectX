import { Link } from 'react-router-dom';
import TabPanel from '~/ComponentChildOfProduct/TabPanel';

import MB01 from '~/images/Store/MissionBag/MB01.jpg';
import MB02 from '~/images/Store/MissionBag/MB02.jpg';
import MB03 from '~/images/Store/MissionBag/MB03.jpg';
import MB04 from '~/images/Store/MissionBag/MB04.jpg';
import MB05 from '~/images/Store/MissionBag/MB05.jpg';
import MB06 from '~/images/Store/MissionBag/MB06.jpg';

import SE01 from '~/images/ShoppingEveryDay/SE05.jpg';
import SE02 from '~/images/ShoppingEveryDay/SE02.jpg';
import SE03 from '~/images/ShoppingEveryDay/SE03.jpg';
import SE04 from '~/images/ShoppingEveryDay/SE04.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function MissionBag() {
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
                  <span className="">MissionBag</span>
               </Link>
            </div>
            <div className="absolute top-[48%] left-[4%] mt-[10px]">
               <span className="store-big-title">MissionBag</span>
            </div>
         </div>

         <div className="mt-[80px] flex justify-center selection-default">
            <div className="flex justify-center">
               <div className="flex flex-col ">
                  <div className="">
                     <img className="w-[112px] h-[136px]" src={MB01} alt="" />
                  </div>
                  <div className="mt-[10px]">
                     <img className="w-[112px] h-[136px]" src={MB02} alt="" />
                  </div>
                  <div className="mt-[10px]">
                     <img className="w-[112px] h-[136px]" src={MB03} alt="" />
                  </div>
                  <div className="mt-[10px]">
                     <img className="w-[112px] h-[136px]" src={MB04} alt="" />
                  </div>
                  <div className="mt-[10px]">
                     <img className="w-[112px] h-[136px]" src={MB05} alt="" />
                  </div>
               </div>
               <div className=" ml-[10px]">
                  <img className="relative w-532px h-[721px] " src={MB06} alt="" />
               </div>
            </div>
            <div className="ml-[54px] flex flex-col">
               <div className="mb-[4px]">
                  <span className="font-['Poppins'] font-semibold	text-[36px]">Mission Bag</span>
               </div>
               <div className="">
                  <span className="text-[18px] font-['Poppins'] font-semibold">$110.00</span>
               </div>
               <div className="mt-[47px] flex flex-col text-[16px] text-[#2d2d2d] font-normal font-['Montserrat'] leading-[26px]">
                  <span>Lorem proin gravida nibh enean sonauris hime</span>
                  <span>sollicitudin enean, lom himenaeos lorem ean</span>
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
                  <div>
                     <span className="">Sku: 038</span>
                  </div>
                  <div className="">
                     <span className="">Category: Bags</span>
                  </div>
                  <div className="">
                     <span className="">Tags: modern, stylish</span>
                  </div>
               </div>
            </div>
         </div>

         <div className="mx-[128px] mt-[70px]">
            <TabPanel />
         </div>

         <div className="mx-[128px] mt-[76px] mb-[53px] selection-default">
            <span className="text-[25px] leading-[1.12em] text-black font-semibold font-['Poppins']">
               Related products
            </span>
         </div>

         <div className="mx-[128px] selection-default">
            <div className="grid grid-cols-4 gap-4">
               <Link to="/store/clutch-bag/1" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={SE01} alt="" />
                  <div className="absolute top-[calc(3%+3px)] left-[3%] w-[50px] h-[20px] bg-white text-black leading-[20px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">New</span>
                  </div>
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Clutch Bag</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$175.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
               </Link>
               <Link to="/store/orange-airsuit/2" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={SE02} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Orange Airsuit</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$225.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
               </Link>
               <Link to="/store/orange-sandal/3" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={SE03} alt="" />
                  <div className="absolute top-[calc(3%+3px)] left-[3%] w-[50px] h-[20px] bg-black text-white leading-[20px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">Sale</span>
                  </div>
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Orange Sandal</span>
                     </div>
                     <div>
                        <span className="price-line-through-shopping-everyday-products">$125.00</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$75.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
               </Link>
               <Link to="/store/blue-suit/4" className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={SE04} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Blue Suit</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$360.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
               </Link>
            </div>
         </div>
      </>
   );
}

export default MissionBag;
