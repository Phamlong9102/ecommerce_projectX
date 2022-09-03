import { Link } from "react-router-dom";

function ProductSearch({ product }) {
   return (
      <div className="mx-[122px] mt-[66px] selection-default">
         <div className="flex pb-[30px] border-b-[1px] border-[#ccc]">
            <Link to={product.url} className="">
               <img className="w-[130px] h-[130px]" src={product.imageURLSearch} alt="" />
            </Link>
            <div className="ml-[22px] flex flex-col">
               <Link className="font-['Poppins'] font-semibold text-[15px] text-black" to={product.url}>
                  {product.name}
               </Link>
               <div className="mt-[7px] font-['Montserrat'] text-[15px] font-normal text-black">
                  <span>{product.description_product}</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductSearch;
