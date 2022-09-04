import { Link } from 'react-router-dom';

import NewLook from '~/images/NewLook/NewLook.jpg';

import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Categories() {
   return (
      <>
         {/* Category */}
         <div className="ml-[30px] mb-[12px] selection-default">
            <div className="">
               <span className="text-[18px] font-semibold font-['Poppins'] text-black">Categories</span>
            </div>
            <div className="text-[13px] font-normal text-black mt-[16px]">
               <Link to="/store/category/clothes" className="mt-[18px] ">
                  <span>Clothes</span>
               </Link>
            </div>
            <div className="text-[13px] font-normal text-black mt-[16px]">
               <Link to="/store/category/bags" className="mt-[18px] ">
                  <span>Bags</span>
               </Link>
            </div>
            <div className="text-[13px] font-normal text-black mt-[16px]">
               <Link to="/store/category/highheels" className="mt-[18px] ">
                  <span>High Heels</span>
               </Link>
            </div>
            <div className="text-[13px] font-normal text-black mt-[16px]">
               <Link to="/store/category/wallet" className="mt-[18px] ">
                  <span>Wallet</span>
               </Link>
            </div>
            <div className="mt-[36px]">
               <img className="w-[252px] h-[182px]" src={NewLook} alt="" />
            </div>
            <div className="mt-[62px]">
               <span className="text-[18px] font-semibold font-['Poppins']">Newsletter</span>
            </div>
            <div className="mt-[32px] relative">
               <div>
                  <input
                     className="min-w-[252px] outline-0 border-t-0 border-l-0 border-r-0 border-b-[1px] focus:border-b-black border-b-[#ccc] placeholder:text-[10px] placeholder:tracking-[0.16em] placeholder:font-normal placeholder-font-['Poppins'] placeholder:uppercase placeholder:text-black"
                     type="text"
                     placeholder="Your Email"
                  />
               </div>
               <div className="absolute top-0 right-0 cursor-pointer">
                  <MailOutlineIcon />
               </div>
            </div>
         </div>
      </>
   );
}

export default Categories;
