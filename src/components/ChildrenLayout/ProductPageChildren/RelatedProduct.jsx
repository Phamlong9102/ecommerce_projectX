import { Link } from 'react-router-dom';

import SE01 from '~/images/ShoppingEveryDay/SE01.jpg';
import SE02 from '~/images/ShoppingEveryDay/SE02.jpg';
import SE03 from '~/images/ShoppingEveryDay/SE03.jpg';
import SE04 from '~/images/ShoppingEveryDay/SE04.jpg';


function RelatedProduct() {
   return (
      <div className="grid grid-cols-4 gap-4">
         <Link to="/store/clutch-bag/1" className="relative cursor-pointer mx-[8px]">
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
            <div className="">
               <span className="name-of-job">Clothes</span>
            </div>
         </Link>
         <Link to="/store/orange-airsuit/2" className="relative cursor-pointer mx-[8px]">
            <img className="w-full max-h-[342px]" src={SE02} alt="" />
            <div className="flex justify-between mt-[22px]">
               <div>
                  <span className="products-name-shopping-everyday">Orange Airsuit</span>
               </div>
               <div>
                  <span className="price-shopping-everyday-products">$225.00</span>
               </div>
            </div>
            <div className="">
               <span className="name-of-job">Clothes</span>
            </div>
         </Link>
         <Link to="/store/orange-sandal/3" className="relative cursor-pointer mx-[8px]">
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
                  <span className="price-shopping-everyday-products">$75.00</span>
               </div>
            </div>
            <div className="">
               <span className="name-of-job">Clothes</span>
            </div>
         </Link>
         <Link to="/store/blue-suit/4" className="relative cursor-pointer mx-[8px]">
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
         </Link>
      </div>
   );
}
export default RelatedProduct;
