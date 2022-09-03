import { Link } from "react-router-dom";

function Categories() {
   return (
      <>
         {/* Category */}
         <div className="ml-[30px]">
            <div className="">
               <span className="text-[18px] font-semibold font-['Poppins'] text-black">Categories</span>
            </div>
            <div className="text-[13px] font-normal text-black ">
               <div>
                  <Link to="/store/category/clothes" className="mt-[18px] ">
                     <span>Clothes</span>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
}

export default Categories;
