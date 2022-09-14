import { AppContext } from '~/contexts/AppContext';

import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

function Cart() {
   const { cartItems, setCartItems } = useContext(AppContext);
   const [groupedItems, setGroupedItem] = useState();
   const [demoPrice, setDemoPrice] = useState(0);
   const [totalPrice, setTotalPrice] = useState(0);

   const navigate = useNavigate();

   // Hàm useEffect
   useEffect(() => {
      const groupById = _.groupBy(cartItems, 'id');
      let newCartItems = [];
      for (const key in groupById) {
         newCartItems.push(groupById[key]);
      }
      setGroupedItem(() => newCartItems);
   }, [cartItems]);

   useEffect(() => {
      let total = 0;
      if (groupedItems?.length > 0) {
         groupedItems.forEach((item) => {
            total += item.length * item[0].price;
         });
         setDemoPrice(total);
         setTotalPrice(total + 120)
      }
   }, [groupedItems]);

   const handleCheckout = (e) => {
      if (groupedItems.length > 0) {
         const currentUser = JSON.parse(localStorage.getItem('dataContext'))[0]
         const getCartItem = currentUser.cartItems;
         const userId = currentUser.id;

         if (getCartItem.length > 0) {
            axios
               .delete(`https://630ed147379256341881df89.mockapi.io/users/${userId}`, { ...currentUser, cartItems: getCartItem })
               .then((res) => {
                  console.log(res);
               })
               .catch((err) => {
                  console.log('Error =', err);
               });
         }
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
               <div className="flex">
                  <span className="text-[25px] font-semibold font-['Poppins']">Cart Total</span>
               </div>

               <div className="bg-[#f4f4f4] w-[432px] h-[500px] mt-[36px] ">
                  <div className="pt-[24px] px-[28px] pb-[20px]">
                     <div className="flex justify-between">
                        <span className=" text-black text-[18px] font-['Poppins'] font-semibold">Subtotal</span>
                        <span className="leading-[29px] text-[15px] font-['Montserrat'] font-normal text-black  ">
                           ${demoPrice}.00
                        </span>
                     </div>
                  </div>

                  <div className="px-[28px]">
                     <div className="flex justify-between">
                        <div className="">
                           <span className=" text-black text-[18px] font-['Poppins'] font-semibold">Shipping</span>
                        </div>
                        <div className="flex ">
                           <div>
                              <span className="text-[14px] font-normal text-black leading-[30px]">
                                 Free
                              </span>
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

                  <form className="px-[28px]">
                     <div>
                        <label className="text-black text-[18px] font-['Poppins'] font-semibold">Name</label>
                        <input className="w-full border-0 outline-0 bg-[#f4f4f4]" type="text" placeholder="Name" />
                     </div>
                     <div className="mt-[24px]">
                        <label className="text-black text-[18px] font-['Poppins'] font-semibold">Address</label>
                        <input className="w-full border-0 outline-0 bg-[#f4f4f4]" type="text" placeholder="Address" />
                     </div>
                     <div className="mt-[24px]">
                        <label className="text-black text-[18px] font-['Poppins'] font-semibold">Phone Number</label>
                        <input className="w-full border-0 outline-0 bg-[#f4f4f4]" type="text" placeholder="Phone Number" />
                     </div>
                     <div className="mt-[24px]">
                        <button onClick={handleCheckout} className="w-[374px] h-[50px] bg-black text-white font-['Montserrat'] font-bold text-[14px] text-center">
                           Checkout
                        </button>
                     </div>
                  </form>


               </div>
            </div>
         </div>
      </>
   )
}
export default Cart;
