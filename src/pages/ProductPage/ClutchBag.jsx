import { Link } from 'react-router-dom';

import BasicTab from '~/ComponentChildOfProduct/TabPanel';

import ClutchBag01 from '~/images/Store/ClutchBag/ClutchBag01.jpg';
import ClutchBag02 from '~/images/Store/ClutchBag/ClutchBag02.jpg';
import ClutchBag03 from '~/images/Store/ClutchBag/ClutchBag03.jpg';
import ClutchBag04 from '~/images/Store/ClutchBag/ClutchBag04.jpg';
import ClutchBag05 from '~/images/Store/ClutchBag/ClutchBag05.jpg';
import ClutchBag06 from '~/images/Store/ClutchBag/ClutchBag06.jpg';

import SE02 from '~/images/ShoppingEveryDay/SE02.jpg';
import SE03 from '~/images/ShoppingEveryDay/SE03.jpg';
import SE04 from '~/images/ShoppingEveryDay/SE04.jpg';
import SE05 from '~/images/ShoppingEveryDay/SE05.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function ClutchBag() {
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

         <div className="mx-[128px] mt-[70px]">
            <BasicTab />
         </div>

         <div className="mx-[128px] mt-[76px] mb-[53px] selection-default">
            <span className="text-[25px] leading-[1.12em] text-black font-semibold font-['Poppins']">
               Related products
            </span>
         </div>

         <div className="mx-[128px] selection-default">
            <div className='grid grid-cols-4 gap-4'>
               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={SE02} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Orange Airsuit</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$175.00</span>
                     </div>
                  </div>
                  <div className="">
                     <span className="name-of-job">Clothes</span>
                  </div>
               </div>
               <div className="relative cursor-pointer mx-[8px]">
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
                        <span className="price-shopping-everyday-products">$175.00</span>
                     </div>
                  </div>
                  <div className="">
                     <span className="name-of-job">Clothes</span>
                  </div>
               </div>
               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={SE04} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Blue Suit</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$360.00</span>
                     </div>
                  </div>
                  <div className="">
                     <span className="name-of-job">Clothes</span>
                  </div>
               </div>
               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[342px]" src={SE05} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Orange Weil</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$60.00</span>
                     </div>
                  </div>
                  <div className="">
                     <span className="name-of-job">Clothes</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default ClutchBag;
