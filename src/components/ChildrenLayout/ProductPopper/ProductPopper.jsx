import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '~/contexts/AppContext';
import { useContext, useEffect, useState } from 'react';
import _ from 'lodash';

function ProductPopper() {
   // Dùng để lấy dữ liệu khi add to cart vào State
   const { cartItems, setCartItems } = useContext(AppContext);
   // Thằng này dùng để nhóm những thằng có id chung vào 1 nhóm
   const [groupedItems, setGroupedItem] = useState();
   // Hàm tính giá sản phẩm
   const [totalPrice, setTotalPrice] = useState(0);

   // Hàm xóa sản phẩm 
   const deleteButton = (e) => {
      setCartItems([]);
   };

   // Hàm useEffect
   useEffect(() => {
      // Dùng để nhóm những thằng có id chung được lấy từ thằng cartItems useContext
      const groupById = _.groupBy(cartItems, 'id');
      // newCartItems = [] dùng để gán lại data đã được sắp xếp
      let newCartItems = [];
      // Lặp qua key của sản phẩm
      for (const key in groupById) {
         // push những thằng mới đã được map qua vào thằng newCartItems
         newCartItems.push(groupById[key]);
      }
      console.log(newCartItems, 'newCartItems');
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
         console.log(total, 'total');
         setTotalPrice(total);
      }
      // Dùng để so sánh xem thằng groupedItems có thay đổi hay không
   }, [groupedItems]);

   return (
      <>
         <div to="/cart" className="relative cart-00 flex mr-9">
            <div className="mr-2.5">
               <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <div className="absolute top-[71%] bg-[transparent] right-0 w-[86px] h-[56px]"></div>
            <div className="">
               <span>
                  {cartItems.length} / ${groupedItems?.length > 0 ? totalPrice : 0}.00
               </span>
            </div>

            <div className="cursor-default children-cart-00 absolute flex flex-col w-[297px] h-fit bg-white top-[calc(222%+4px)] right-0 z-[1000] shadow-2xl]">
               {/* Map qua từng thằng trong groupItem nó đã được nhóm lại theo id sản phẩm*/}
               {groupedItems?.map((groupItem, i) => {
                  return (
                     <div className="flex mx-[30px] mt-[30px]">
                        <div className="absolute w-[100px] cursor-pointer h-[40px] bg-transparent top-[-10%] left-[66%]"></div>

                        <Link to="/store/golden-sandals/8" className="">
                           <img className="w-[78px] h-[102px]" src={groupItem[0].imageURL} alt="" />
                        </Link>
                        <div className="flex justify-center w-[144px]">
                           <div className="flex flex-col justify-center">
                              <Link
                                 to="/store/golden-sandals/8"
                                 className="font-['Poppins'] font-semibold text-[15px] text-black"
                              >
                                 {groupItem[0].name}
                              </Link>
                              <div className="flex">
                                 <span className="font-['Montserrat'] text-[12px] uppercase tracking-[0.16em] font-normal">
                                    {groupItem.length}x
                                 </span>
                                 <div className="relative top-[-5px]">
                                    <span className="font-['Montserrat'] text-[7px] uppercase tracking-[0.16em] font-normal ml-[4px] ">
                                       $
                                    </span>
                                 </div>
                                 <span className="font-['Montserrat'] text-[12px] uppercase tracking-[0.16em] font-normal">
                                    {groupItem[0].price}.00
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div className="ml-[12px]">
                           <button onClick={deleteButton} className="">
                              <CloseIcon className="" />
                           </button>
                        </div>
                     </div>
                  );
               })}
               {groupedItems?.length > 0 ? (
                  <div></div>
               ) : (
                  <div className="">
                     <span className=" text-[14px] font-semibold tracking-[0.01em] font-['Poppins']">
                        No products in the cart
                     </span>
                  </div>
               )}

               {/* Checkout */}
               {groupedItems?.length > 0 ? (
                  <div className="">
                     <div className="flex justify-between pt-[20px] mt-[20px] mx-[30px] border-t-[1px] border-t-[#e5e5e5]">
                        <div>
                           <span className="text-[18px] font-semibold font-['Poppins'] text-black ">Total bag:</span>
                        </div>
                        <div className="flex">
                           <div className="">
                              <span className="text-[16px] font-semibold">${totalPrice}.00</span>
                           </div>
                           <div>
                              <span className="text-[16px] text-black font-semibold">{}</span>
                           </div>
                        </div>
                     </div>
                     <div className="mt-[30px] mx-[30px] pb-[30px] float-right">
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
