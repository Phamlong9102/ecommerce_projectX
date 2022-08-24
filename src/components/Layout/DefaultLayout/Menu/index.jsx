import logoWeb from '~/images/HeaderImages/logoWeb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import SE08 from '~/images/ShoppingEveryDay/SE08.jpg';
import SE01 from '~/images/ShoppingEveryDay/SE01.jpg';

import CloseIcon from '@mui/icons-material/Close';

function Menu() {
   return (
      <div className="flex justify-between mx-12 text-menu-color select-none">
         <div className="flex mt-9 cursor-pointer">
            <div>
               <Link to="/">
                  <img className="h-[23px]" src={logoWeb} alt="Logo Web" />
               </Link>
            </div>
            <div className="flex font text-sm text-center ml-5	font-semibold font-['Poppins']">
               <Link to="/" className="list-none mx-5">
                  Home
               </Link>
               <Link to="" className="list-none mx-5">
                  Pages
               </Link>
               <Link to="/store" className="list-none mx-5">
                  Store
               </Link>
               <Link to="" className="list-none mx-5">
                  Shop
               </Link>
               <Link to="" className="list-none mx-5">
                  Blog
               </Link>
               <Link to="" className="list-none mx-5">
                  Porfolio
               </Link>
               <Link to="" className="list-none mx-5">
                  Elements
               </Link>
            </div>
         </div>
         <div className="flex mt-9 text-sm font-[Poppins] font-semibold	cursor-pointer	">
            <div className="flex mr-9">
               <div className="mr-2.5">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </div>
               <span className="">Search</span>
            </div>
            <div className="flex mr-9">
               <div className="mr-2.5">
                  <FontAwesomeIcon icon={faHeart} />
               </div>
               <span className="">Whislist</span>
            </div>
            <div className="relative cart-00 flex mr-9">
               <div className="mr-2.5">
                  <FontAwesomeIcon icon={faBagShopping} />
               </div>
               <div className="">
                  <span>2 / $290.00</span>
               </div>
               <div className="cursor-default children-cart-00 absolute flex flex-col w-[297px] h-fit bg-white top-[calc(241%+4px)] right-0 z-[1000] shadow-2xl]">
                  <div className="flex mx-[30px] mt-[30px]">
                     <div className="absolute w-[100px] cursor-pointer h-[40px] bg-transparent top-[-10%] left-[66%]"></div>
                     <Link to="/store/golden-sandals/8" className="">
                        <img className="w-[78px] h-[102px]" src={SE08} alt="" />
                     </Link>
                     <div className="flex justify-center w-[144px]">
                        <div className="flex flex-col justify-center">
                           <Link to="/store/golden-sandals/8" className="font-['Poppins'] font-semibold text-[15px] text-black">Golden Sandals</Link>
                           <div className="flex">
                              <span className="font-['Montserrat'] text-[12px] uppercase tracking-[0.16em] font-normal">
                                 1x
                              </span>
                              <div className="relative top-[-5px]">
                                 <span className="font-['Montserrat'] text-[7px] uppercase tracking-[0.16em] font-normal ml-[4px] ">
                                    $
                                 </span>
                              </div>
                              <span className="font-['Montserrat'] text-[12px] uppercase tracking-[0.16em] font-normal">
                                 115.00
                              </span>
                           </div>
                        </div>
                     </div>
                     <div className="">
                        <button className="">
                           <CloseIcon className="" />
                        </button>
                     </div>
                  </div>
                  <div className="flex mx-[30px] mt-[30px]">
                     <Link to="/store/clutch-bag/1" className="">
                        <img className="w-[78px] h-[102px]" src={SE01} alt="" />
                     </Link>
                     <div className="flex justify-center w-[144px]">
                        <div className="flex flex-col justify-center">
                           <Link to="/store/clutch-bag/1" className="font-['Poppins'] font-semibold text-[15px] text-black">Clutch Bag</Link>
                           <div className="flex">
                              <span className="font-['Montserrat'] text-[12px] uppercase tracking-[0.16em] font-normal">
                                 1x
                              </span>
                              <div className="relative top-[-5px]">
                                 <span className="font-['Montserrat'] text-[7px] uppercase tracking-[0.16em] font-normal ml-[4px] ">
                                    $
                                 </span>
                              </div>
                              <span className="font-['Montserrat'] text-[12px] uppercase tracking-[0.16em] font-normal">
                                 175.00
                              </span>
                           </div>
                        </div>
                     </div>
                     <div className="">
                        <button className="">
                           <CloseIcon className="" />
                        </button>
                     </div>
                  </div>
                  <div className="flex justify-between pt-[20px] mt-[20px] mx-[30px] border-t-[1px] border-t-[#e5e5e5]">
                     <div>
                        <span className="text-[18px] font-semibold font-['Poppins'] text-black ">Total bag:</span>
                     </div>
                     <div className="flex">
                        <div className="relative top-[-6px]">
                           <span className="text-[10px] font-semibold">$</span>
                        </div>
                        <div>
                           <span className="text-[16px] text-black font-semibold">290.00</span>
                        </div>
                     </div>
                  </div>
                  <div className="mt-[30px] mx-[30px] flex justify-between pb-[30px]">
                     <Link to="/cart" className="underline underline-offset-8">
                        <span className="text-['Poppins'] text-[13px] font-semibold text-black tracking-[0.01em] ">Checkout</span>
                     </Link>
                     <Link to="/cart" className="underline underline-offset-8">
                        <span className="text-['Poppins'] text-[13px] font-semibold text-black tracking-[0.01em]">View Cart</span>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="">
               <FontAwesomeIcon icon={faBars} />
            </div>
         </div>
      </div>
   );
}
export default Menu;
