import Cart02 from '~/images/Cart/Cart02.jpg';
import Cart03 from '~/images/Cart/Cart03.jpg';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';

import ChangeAdress from '~/components/ChildrenLayout/ChangeAdress/ChangeAdress'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cart() {
   return (
      <>
         <div className="mt-[40px]">
            <div className="background-cart " alt="Cart" />
            <div className="absolute selection-default top-[50%] left-[42%]">
               <span className="text-[48px] font-semibold font-['Poppins'] leading-[1.3em] text-white">Cart</span>
            </div>
         </div>

         <div className="mt-[80px] mx-[126px] flex selection-default">
            <div className="flex flex-col justify-between">
               <div className="flex flex-col border-b-[1px] border-[#ccc] pb-[24px]">
                  <div className="">
                     <span className="text-[25px] font-semibold font-['Poppins']">Shopping Cart</span>
                  </div>
                  <div className="flex mt-[25px]">
                     <Link to="/store/golden-sandals">
                        <img className="w-[116px] h-[155px]" src={Cart02} alt="" />
                     </Link>
                     <div className="flex flex-col ml-[22px] justify-center	">
                        <div>
                           <Link
                              to="/store/golden-sandals"
                              className="text-black text-[15px] font-medium font-['Poppins']"
                           >
                              Golden Sandals
                           </Link>
                        </div>
                        <div>
                           <span className="text-[14px] font-normal text-[#2d2d2d] font-['Poppins']">$115.00</span>
                        </div>
                     </div>
                     <div className="relative flex flex-col justify-center">
                        <input
                           type="text"
                           readOnly
                           className="w-[195px] h-[50px] cursor-pointer border-[#d3d3d3] focus:border-black border-[1px] border-solid  ml-[86px]"
                        ></input>
                        <div className="absolute top-[43%] left-[38%] before:content-['Quantity'] before:text-[14px] before:text-[#464646] before:font-['Montserrat'] "></div>
                        <button className="absolute top-[43%] left-[80%]">
                           <KeyboardArrowLeftIcon sx={{ fontSize: '18px' }} />
                        </button>
                        <div className="absolute top-[43%] left-[calc(85%+4px)]">
                           <span className=" text-[12px] font-light">0</span>
                        </div>
                        <button className="absolute top-[43%] left-[90%]">
                           <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
                        </button>
                     </div>
                     <button className="flex flex-col justify-center ml-[50px]">
                        <CloseIcon sx={{ fontSize: '20px', fontWeight: 'normal' }} />
                     </button>
                  </div>
               </div>
               <div className="flex flex-col border-b-[1px] border-[#ccc] pb-[24px]">
                  <div className="flex mt-[25px]">
                     <Link to="/store/golden-sandals">
                        <img className="w-[116px] h-[155px]" src={Cart03} alt="" />
                     </Link>
                     <div className="flex flex-col ml-[22px] justify-center	">
                        <div>
                           <Link
                              to="/store/golden-sandals"
                              className="text-black text-[15px] font-medium font-['Poppins']"
                           >
                              Clutch Bag
                           </Link>
                        </div>
                        <div>
                           <span className="text-[14px] font-normal text-[#2d2d2d] font-['Poppins']">$175.00</span>
                        </div>
                     </div>
                     <div className="relative flex flex-col justify-center">
                        <input
                           type="text"
                           readOnly
                           className="w-[195px] h-[50px] cursor-pointer border-[#d3d3d3] focus:border-black border-[1px] border-solid  ml-[86px]"
                        ></input>
                        <div className="absolute top-[43%] left-[38%] before:content-['Quantity'] before:text-[14px] before:text-[#464646] before:font-['Montserrat'] "></div>
                        <button className="absolute top-[43%] left-[80%]">
                           <KeyboardArrowLeftIcon sx={{ fontSize: '18px' }} />
                        </button>
                        <div className="absolute top-[43%] left-[calc(85%+4px)]">
                           <span className=" text-[12px] font-light">0</span>
                        </div>
                        <button className="absolute top-[43%] left-[90%]">
                           <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
                        </button>
                     </div>
                     <button className="flex flex-col justify-center ml-[50px]">
                        <CloseIcon sx={{ fontSize: '20px', fontWeight: 'normal' }} />
                     </button>
                  </div>
               </div>
               <div className="relative flex mt-[56px] cursor-pointer">
                  <div className="absolute top-0 left-0 z-10">
                     <FontAwesomeIcon icon={faGift} />
                  </div>
                  <div className="absolute top-0 left-0 cursor-pointer">
                     <input
                        className="w-[380px] cursor-pointer pb-[8px] border-t-0 border-l-0 border-r-0 border-b-[1px] border-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:text-black placeholder:font-normal placeholder:uppercase placeholder:tracking-[0.16em] placeholder:font-['Montserrat'] placeholder:pl-[26px]   "
                        placeholder="Enter Coupon Code"
                        type="text"
                     />
                     <div className="absolute top-0 left-[calc(96%-1px)]">
                        <button className="">
                           <FontAwesomeIcon icon={faRightLong} className="" />
                        </button>
                     </div>
                     <div className="absolute w-[81px] left-[140%] top-[-8%]">
                        <button className="text-black font-['Poppins'] text-[13px] underline underline-offset-[5px] font-semibold outline-0">
                           Update Cart
                        </button>
                     </div>
                  </div>
               </div>
               <div className="mt-[60px]">
                  <Link
                     to="/store"
                     className="text-black font-['Poppins'] text-[13px] underline underline-offset-[5px] font-semibold"
                  >
                     Go Back To Store
                  </Link>
               </div>
            </div>

            <div className="ml-[72px]">
               <div className="flex flex-col">
                  <span className="text-[25px] font-semibold font-['Poppins']">Cart Total</span>
               </div>
               <div className="bg-[#f4f4f4] w-[432px] h-[600px] mt-[36px] ">
                  <div className="pt-[24px] px-[28px] pb-[20px]">
                     <div className="flex">
                        <span className=" text-black text-[18px] font-['Poppins'] font-semibold">Subtotal</span>
                        <span className="ml-[34px] leading-[29px] text-[15px] font-['Montserrat'] font-normal text-black  ">
                           $290.00
                        </span>
                     </div>
                  </div>
                  <div className="px-[28px]">
                     <div className="flex">
                        <div className="">
                           <span className=" text-black text-[18px] font-['Poppins'] font-semibold">Shipping</span>
                        </div>
                        <div className="ml-[34px] flex flex-col ">
                           <div>
                              <span className="text-[14px] font-normal text-black leading-[30px]">
                                 Flat rate: $120.00
                              </span>
                           </div>
                           <div className="mt-[12px]">
                              <span className="text-[14px] font-normal text-black">
                                 Shipping to <strong>Vietnam</strong>
                              </span>
                           </div>
                           <div>
                              <ChangeAdress />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className="pt-[24px] px-[28px] pb-[20px]">
                        <div className="flex justify-between">
                           <span className=" text-black text-[18px] font-['Poppins'] font-semibold">Total</span>
                           <span className="leading-[29px] text-[18px] font-['Poppins'] font-semibold text-black">
                              $410.00
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="relative mt-[6px] underline underline-offset-8	ml-[26px] before:absolute before:top-[110%] before:left-0 before:right-0 before:w-[92%] before:bg-black before:h-[1px]">
                     <button className="w-[374px] h-[50px] bg-black text-white font-['Montserrat'] font-bold text-[14px] text-center">
                        Proceed To Checkout
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
export default Cart;
