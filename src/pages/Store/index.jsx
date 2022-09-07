import { Link } from 'react-router-dom';

import Sorting from '~/components/ChildrenLayout/ChildrenStore/Sorting';
import Categories from '~/components/ChildrenLayout/ChildrenStore/Categories'

import { useNavigate } from 'react-router-dom';

function Store() {

   const handleChange = (e) => {
      console.log(e.target.value)

   }

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

         <div className="">
            <input type="text"
               onChange={handleChange}
            
            />
         </div>

         <div className="flex">
            <div className="">
               <Sorting />
            </div>
            <div className="mt-[120px]">
               <Categories />
            </div>
         </div>
      </>
   );
}

export default Store;
