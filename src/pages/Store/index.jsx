// Trang cửa hàng
import { Link } from 'react-router-dom';

// import images
import SE01 from '~/images/ShoppingEveryDay/SE01.jpg';
import SE02 from '~/images/ShoppingEveryDay/SE02.jpg';
import SE03 from '~/images/ShoppingEveryDay/SE03.jpg';
import SE04 from '~/images/ShoppingEveryDay/SE04.jpg';
import SE05 from '~/images/ShoppingEveryDay/SE05.jpg';
import SE06 from '~/images/ShoppingEveryDay/SE06.jpg';
import SE07 from '~/images/ShoppingEveryDay/SE07.jpg';
import SE08 from '~/images/ShoppingEveryDay/SE08.jpg';

// import images
import Bag01 from '~/images/BagAndBackpacks/Bag01.jpg';
import Bag02 from '~/images/BagAndBackpacks/Bag02.jpg';
import Bag03 from '~/images/BagAndBackpacks/Bag03.jpg';
import Bag04 from '~/images/BagAndBackpacks/Bag04.jpg';

function Store() {
   return (
      <>
         {/* Điều hướng */}
         <div className="w-[1347px] h-[140px] relative bg-[#f6f6f6] mt-[32px] selection-default">
            <div className="absolute top-[40%] left-[4%] store-menu-route">
               <Link className="" to="/">
                  <span className="">Home</span>
               </Link>
               <span className="mx-[10px]">/</span>
               <Link className="" to="/store">
                  <span className="">Store</span>
               </Link>
            </div>
            <div className="absolute top-[48%] left-[4%] mt-[10px]">
               <span className="store-big-title">Store</span>
            </div>
         </div>

         {/*Danh sách sản phẩm  */}
         <div className="mt-[32px] mx-[20px]">
            <div className="grid grid-cols-4 gap-4">
               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[326px]" src={SE01} alt="" />
                  <div className="absolute top-[calc(5%-1px)] left-[3%] w-[50px] h-[20px] bg-white text-black leading-[20px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">Sale</span>
                  </div> 
               </div>

               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[326px]" src={SE02} alt="" />
               </div>

               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[326px]" src={SE03} alt="" />
                  <div className="absolute top-[calc(5%-1px)] left-[3%] w-[50px] h-[20px] bg-black text-white leading-[20px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">Sale</span>
                  </div>
               </div>

               <div className="relative cursor-pointer mx-[8px]">
                  <img className="w-full max-h-[326px]" src={SE04} alt="" />
               </div>

               <div className="relative cursor-pointer mx-[8px] mt-[20px]">
                  <img className="w-full max-h-[326px]" src={SE05} alt="" />
               </div>

               <div className="relative cursor-pointer mx-[8px] mt-[20px]">
                  <img className="w-full max-h-[326px]" src={SE06} alt="" />
               </div>

               <div className="relative cursor-pointer mx-[8px] mt-[20px]">
                  <img className="w-full max-h-[326px]" src={SE07} alt="" />
                  <div className="absolute top-[calc(5%-1px)] left-[3%] w-[50px] h-[20px] bg-white text-black leading-[20px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">New</span>
                  </div>
               </div>

               <div className="relative cursor-pointer mx-[8px] mt-[20px] ">
                  <img className="w-full max-h-[326px]" src={SE08} alt="" />
               </div>

               <div className="relative cursor-pointer mx-[8px] mt-[50px]">
                  <img className="w-full max-h-[326px]" src={Bag01} alt="" />
               </div>

               <div className="relative cursor-pointer mx-[8px] mt-[50px]">
                  <img className="w-full max-h-[326px]" src={Bag02} alt="" />
               </div>

               <div className="relative cursor-pointer mx-[8px] mt-[50px]">
                  <img className="w-full max-h-[326px]" src={Bag03} alt="" />
               </div>
               
               <div className="relative cursor-pointer mx-[8px] mt-[50px]">
                  <img className="w-full max-h-[326px]" src={Bag04} alt="" />
               </div>
            </div>
         </div>
      </>
   );
}

export default Store;
