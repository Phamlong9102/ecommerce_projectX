import Cart03 from '~/images/Cart/Cart03.jpg';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';

import ChangeAdress from '~/components/ChildrenLayout/ChangeAdress/ChangeAdress';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState, useEffect, useContext } from 'react';

import { AppContext } from '~/contexts/AppContext';

import _ from 'lodash';

import { useNavigate } from 'react-router-dom';

function Cart() {

   // useContext get data from user click add to cart
   const { cartItems, setCartItems } = useContext(AppContext);

   const [groupedItems, setGroupedItem] = useState();

   const [demoPrice, setDemoPrice] = useState(0);

   const [totalPrice, setTotalPrice] = useState(0); 

   const navigate = useNavigate();

   // Hàm useEffect
   useEffect(() => {
      // Dùng để nhóm những thằng có id chung được lấy từ thằng cartItems useContext
      const groupById = _.groupBy(cartItems, 'id');

      console.log(groupById)

      let newCartItems = [];

      // Lặp qua key của sản phẩm
      for (const key in groupById) {
         // push những thằng mới đã được map qua vào thằng newCartItems
         newCartItems.push(groupById[key]);
      }
      console.log(newCartItems);

      // setGroupItem() trả ra thằng newCartItems
      setGroupedItem(() => newCartItems);
   }, [cartItems]);

   // Hàm useEffect dùng để tính tổng các items trong giỏ hàng
   useEffect(() => {
      let total = 0;
      // Nếu groupedItems.length > 0 
      if (groupedItems?.length > 0) {
         // thì lặp qua từng thằng item trong giỏ hàng
         groupedItems.forEach((item) => {
            // và tính tổng số tiền phải trả
            total += item.length * item[0].price;
         });
         setDemoPrice(total);
         setTotalPrice(total + 120)
      }
      // Dùng để so sánh xem thằng groupedItems có thay đổi hay không
   }, [groupedItems]);

   const handleCheckout = (e) => {
      if (groupedItems.length > 0) {
         navigate(`/checkout`)
         setCartItems([])
      }
   }




   return (
      <>
         <div className="mt-[40px]">
            <div className="background-cart" alt="Cart" />
            <div className="absolute selection-default top-[50%] left-[42%]">
               <span className="text-[48px] font-semibold font-['Poppins'] leading-[1.3em] text-white">Check out</span>
            </div>
         </div>
         <div className="mt-[80px] mx-[126px] flex justify-between selection-default">
            <div className="basis-1/2">
               <div className="">
                  <span className="text-[25px] font-semibold font-['Poppins']">Shopping Cart</span>
               </div>

               {groupedItems?.map((groupItem, i) => {
                  return (
                     <div className="flex border-b-[1px] border-[#ccc] pb-[24px]">
                        <div className="flex mt-[44px]">
                           <Link to="/store/clutch-bag/1">
                              <img className="w-[116px] h-[155px]" src={groupItem[0].imageURL} alt="" />
                           </Link>
                           <div className="flex flex-col">
                              <div className="flex ml-[22px] justify-center">
                                 <div>
                                    <Link
                                       to="/store/clutch-bag/1"
                                       className="text-black text-[15px] font-medium font-['Poppins']"
                                    >
                                       {groupItem[0].name} &nbsp;
                                    </Link>
                                 </div>
                                 <div>
                                    <span>x</span>
                                 </div>
                                 <div className='ml-[8px]'>
                                    <span>{groupItem.length}</span>
                                 </div>
                              </div>
                              <div className="ml-[22px]">
                                 <span className="text-[14px] font-normal text-[#2d2d2d] font-['Poppins']">${groupItem[0].price}.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  )
               })}


               <div className="mt-[30px]">
                  <Link
                     to="/store"
                     className="text-black font-['Poppins'] text-[13px] underline underline-offset-[5px] font-semibold"
                  >
                     Go Back To Store
                  </Link>
               </div>
            </div>

            <div className="ml-[72px] basis-1/2">
               <div className="flex flex-col">
                  <span className="text-[25px] font-semibold font-['Poppins']">Cart Total</span>
               </div>
               <div className="bg-[#f4f4f4] w-[432px] h-[600px] mt-[36px] ">
                  <div className="pt-[24px] px-[28px] pb-[20px]">
                     <div className="flex">
                        <span className=" text-black text-[18px] font-['Poppins'] font-semibold">Subtotal</span>
                        <span className="ml-[34px] leading-[29px] text-[15px] font-['Montserrat'] font-normal text-black  ">
                           ${demoPrice}.00
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
                                 Free
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
                              ${totalPrice}.00
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="relative mt-[6px] ml-[26px]">
                     <button onClick={handleCheckout} className="w-[374px] h-[50px] bg-black text-white font-['Montserrat'] font-bold text-[14px] text-center">
                        Checkout
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default Cart;
