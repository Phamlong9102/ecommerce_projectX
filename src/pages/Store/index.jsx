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
         {/* Shopping everyday products  */}
         <div className="mt-[60px] select-none flex justify-center selection-default">
            <div className="grid grid-cols-4 gap-4">
               <Link to="clutch-bag" className="relative cursor-pointer mx-[8px]">
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
               <Link to="orange-airsuit" className="relative cursor-pointer mx-[8px]">
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
               <Link to="orange-sandal" className="relative cursor-pointer mx-[8px]">
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
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div> 
               </Link>
               <Link to="blue-suit" className="relative cursor-pointer mx-[8px]">
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
               <Link to="orange-weil" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={SE05} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Orange Weil</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$60.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div> 
               </Link>
               <Link to="white-purse" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={SE06} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">White Purse</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$75.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
               </Link>
               <Link to="red-suit" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={SE07} alt="" />
                  <div className="absolute top-[calc(3%+3px)] left-[3%] w-[50px] h-[20px] bg-white text-black leading-[20px] text-center rotate-90">
                     <span className="head-tag-fashion-blog">New</span>
                  </div>
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Red Suit</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$456.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div> 
               </Link>
               <Link to="golden-sandals" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={SE08} alt="" />
                  <div className="flex justify-between mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Golden Sandals</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$115.00</span>
                     </div>
                  </div>
                  <div className=''>
                     <span className="name-of-job">Clothes</span>
                  </div>
                  
               </Link>
               <Link to="mission-bag" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={Bag01} alt="" />
                  <div className="flex flex-col text-center mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Mission Bag</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$110.00</span>
                     </div>
                  </div>
               </Link>
               <Link to="city-mini-bag" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={Bag02} alt="" />
                  <div className="flex flex-col text-center mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">City Mini Bag</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$85.00</span>
                     </div>
                  </div> 
               </Link>
               <Link to="shoulder-bag" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={Bag03} alt="" />           
                  <div className="flex flex-col text-center mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Shoudler Bag</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$90.00</span>
                     </div>
                  </div>
               </Link>
               <Link to="drawstring-bag" className="relative cursor-pointer mx-[8px] mt-[64px]">
                  <img className="w-full max-h-[342px]" src={Bag04} alt="" />
                  <div className="flex flex-col text-center mt-[22px]">
                     <div>
                        <span className="products-name-shopping-everyday">Drawstring Bag</span>
                     </div>
                     <div>
                        <span className="price-shopping-everyday-products">$45.00</span>
                     </div>
                  </div>
               </Link>
            </div>
         </div>
      </>
   );
}

export default Store;
