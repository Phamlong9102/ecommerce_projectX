import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '~/contexts/AppContext';
import { useContext } from 'react';

function ProductPopper() {
   const { cartItems } = useContext(AppContext);

   const handleDelete = (cartItems) => {
      console.log('Delete');
   };
   return (
      <>
         <div to="/cart" className="relative cart-00 flex mr-9">
            <div className="mr-2.5">
               <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <div className="absolute top-[71%] bg-[transparent] right-0 w-[86px] h-[56px]"></div>
            <div className="">
               <span>
                  {cartItems.length} / ${cartItems.length > 0 ? cartItems[0].price : 0}.00
               </span>
            </div>

            <div className="cursor-default children-cart-00 absolute flex flex-col w-[297px] h-fit bg-white top-[calc(222%+4px)] right-0 z-[1000] shadow-2xl]">
               {cartItems.length > 0 ? (
                  <div className="flex mx-[30px] mt-[30px]">
                     <div className="absolute w-[100px] cursor-pointer h-[40px] bg-transparent top-[-10%] left-[66%]"></div>
                     <Link to="/store/golden-sandals/8" className="">
                        <img
                           className="w-[78px] h-[102px]"
                           src={cartItems.length > 0 ? cartItems[0].imageURL : ''}
                           alt=""
                        />
                     </Link>
                     <div className="flex justify-center w-[144px]">
                        <div className="flex flex-col justify-center">
                           <Link
                              to="/store/golden-sandals/8"
                              className="font-['Poppins'] font-semibold text-[15px] text-black"
                           >
                              {cartItems.length > 0 ? cartItems[0].name : ''}
                           </Link>
                           <div className="flex">
                              <span className="font-['Montserrat'] text-[12px] uppercase tracking-[0.16em] font-normal">
                                 {cartItems.length}x
                              </span>
                              <div className="relative top-[-5px]">
                                 <span className="font-['Montserrat'] text-[7px] uppercase tracking-[0.16em] font-normal ml-[4px] ">
                                    $
                                 </span>
                              </div>
                              <span className="font-['Montserrat'] text-[12px] uppercase tracking-[0.16em] font-normal">
                                 ${cartItems.length > 0 ? cartItems[0].price : 0}.00
                              </span>
                           </div>
                        </div>
                     </div>
                     <div className="ml-[12px]">
                        <button onClick={handleDelete} className="">
                           <CloseIcon className="" />
                        </button>
                     </div>
                  </div>
               ) : (
                  <div className="">
                     <span className=" text-[14px] font-semibold tracking-[0.01em] font-['Poppins']">
                        No products in the cart
                     </span>
                  </div>
               )}

               {/* Checkout */}
               {cartItems.length > 0 ? (
                  <div className="">
                     <div className="flex justify-between pt-[20px] mt-[20px] mx-[30px] border-t-[1px] border-t-[#e5e5e5]">
                        <div>
                           <span className="text-[18px] font-semibold font-['Poppins'] text-black ">Total bag:</span>
                        </div>
                        <div className="flex">
                           <div className="relative top-[-6px]">
                              <span className="text-[10px] font-semibold">
                                 ${cartItems.length > 0 ? cartItems[0].price : ''}.00
                              </span>
                           </div>
                           <div>
                              <span className="text-[16px] text-black font-semibold">{}</span>
                           </div>
                        </div>
                     </div>
                     <div className="mt-[30px] mx-[30px] flex justify-between pb-[30px]">
                        <Link to="/cart" className="underline underline-offset-8">
                           <span className="text-['Poppins'] text-[13px] font-semibold text-black tracking-[0.01em] ">
                              Checkout
                           </span>
                        </Link>
                        <Link to="/cart" className="underline underline-offset-8">
                           <span className="text-['Poppins'] text-[13px] font-semibold text-black tracking-[0.01em]">
                              View Cart
                           </span>
                        </Link>
                     </div>
                  </div>
               ) : (
                  ''
               )}
            </div>
         </div>
      </>
   );
}

export default ProductPopper;
