import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom';

import { useState, useContext } from 'react';

import { AppContext } from '~/contexts/AppContext';
import { ClickGetDataContext } from '~/contexts/ClickGetDataContext';

function ProductPageChildren({ product }) {
   const [count, setCount] = useState(1);
   const { cartItems, setCartItems } = useContext(AppContext);
   const { isAuth } = useContext(ClickGetDataContext);

   const handleAddToCart = (e) => {
      if (!isAuth) {
         alert('Please log in to add product in your cart');
         return;
      }
      let newListItem = [];
      for (let i = 1; i <= count; i++) {
         newListItem.push(product);
      }
      setCartItems((prevState) => {
         return [...prevState, ...newListItem];
      });
      let dataProductUserSelect = localStorage.getItem('dataUser')
      dataProductUserSelect = [{ ...JSON.parse(dataProductUserSelect)[0], cartItems: [...cartItems, ...newListItem] }]
      localStorage.setItem('dataProduct', JSON.stringify(dataProductUserSelect))
      setCount(1);
   };

   return (
      <div className="mt-[80px] block xl:flex justify-center selection-default">
         {/* 6 Image of product */}
         <div className="flex justify-center">
            <div className="hidden sm:flex flex-col ">
               <div className="">
                  <img className="w-[112px] h-[136px]" src={product.imageURL00} alt="" />
               </div>
               <div className="mt-[10px]">
                  <img className="w-[112px] h-[136px]" src={product.imageURL01} alt="" />
               </div>
               <div className="mt-[10px]">
                  <img className="w-[112px] h-[136px]" src={product.imageURL02} alt="" />
               </div>
               <div className="mt-[10px]">
                  <img className="w-[112px] h-[136px]" src={product.imageURL03} alt="" />
               </div>
               <div className="mt-[10px]">
                  <img className="w-[112px] h-[136px]" src={product.imageURL04} alt="" />
               </div>
            </div>
            <div className="relative ml-[10px]">
               {product.new && (
                  <div className="absolute w-[50px] h-[20px] top-[calc(2%+1px)] leading-[20px] left-[1px] z-[1] bg-white text-black text-center rotate-90">
                     <span className="uppercase text-[11px] tracking-[1px]">New</span>
                  </div>
               )}
               {product.sale && (
                  <div className="absolute w-[50px] h-[20px] top-[calc(2%+1px)] leading-[20px] left-[1px] z-[100] bg-black text-white text-center rotate-90">
                     <span className="uppercase text-[11px] tracking-[1px]">Sale</span>
                  </div>
               )}
               <img className="relative w-[420px] sm:w-[532px] h-[570px] sm:h-[721px] " src={product.imageURL05} alt="" />
            </div>
         </div>

         {/* Description product */}
         <div className="ml-0 xl:ml-[54px] mt-[30px] xl:mt-0 block text-center xl:text-left lg:flex lg:flex-col">
            <div className="mb-[4px]">
               <span className="font-['Poppins'] font-semibold	text-[36px] leading-[30px]">{product.name}</span>
            </div>
            <div className="flex justify-center xl:justify-start">
               {product.sale && (
                  <div className="mr-[12px]">
                     <span className="line-through	text-[15px] font-['Poppins'] text-black font-medium leading-[30px]">
                        ${product.sale_price}.00
                     </span>
                  </div>
               )}
               <div className="">
                  <span className="text-[18px] font-['Poppins'] font-semibold">${product.price}.00</span>
               </div>
            </div>
            {product.star && (
               <div className="flex justify-center xl:justify-start mt-[16px]">
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
            )}
            <div className="mt-[16px] xl:mt-[47px] flex flex-col text-[16px] text-[#2d2d2d] font-normal font-['Montserrat'] leading-[26px]">
               <span>Lorem proin gravida nibh enean sonauris hime</span>
               <span>sollicitudin enean, lom himenaeos lorem ean</span>
               <span>consertquat estruda cono pero.</span>
            </div>
            <div className="mt-[16px] xl:mt-[57px] flex justify-center xl:justify-start">
               <div className="relative w-[48px] h-[48px] border-[#d3d3d3] border outline-1">
                  <div className="absolute top-[27%] left-[42%]">
                     <span className="font-semibold text-[15px] leading-[26px] font-['Montserrat']">{count}</span>
                  </div>
                  <button
                     onClick={() => setCount(count + 1)}
                     className="absolute left-[101%] top-[-1px] w-[24px] h-[24px] text-center border-[#d3d3d3] border outline-1"
                  >
                     <FontAwesomeIcon className="text-[10px]" icon={faAngleUp} />
                  </button>
                  <button
                     onClick={() => setCount(Math.max(count - 1, 1))}
                     className="absolute top-[49%] left-[101%] w-[24px] h-[24px] text-center border-[#d3d3d3] border outline-1"
                  >
                     <FontAwesomeIcon className="text-[10px]" icon={faAngleDown} />
                  </button>
               </div>
               <button
                  onClick={handleAddToCart}
                  className="ml-[43px] w-[170px] h-[46px] bg-black  button:underline button:underline-offset-8"
               >
                  <span className="text-[13px] font-['Poppins'] font-semibold text-white">Add To Cart</span>
               </button>
            </div>
            <div className="flex justify-center xl:justify-start mt-[26px] text-center">
               <FontAwesomeIcon className="mt-[3px]" icon={faHeart} />
               <Link to="" className="ml-[4px] text-[14px] font-['Poppins'] font-medium">
                  add to whishlist
               </Link>
            </div>
            <div className="flex flex-col mt-[20px] xl:mt-[64px] text-[10px] uppercase font-medium tracking-[0.29em] text-[##3d3d3d] font-['Montserrat'] leading-[26px]">
               <div>
                  <span className="">Sku: {product.sku}</span>
               </div>
               <div className="">
                  <span className="">Category: {product.category}</span>
               </div>
               <div className="">
                  <span className="">Tags: {product.tag}</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductPageChildren;
