import { Link } from 'react-router-dom';

function SearchResult({ product }) {
   return (
      <div className="flex pb-[30px] border-b-[1px] border-[#ccc]">
         <Link to={product.url} className="">
            <img className="w-[130px] h-[130px]" src={product.imageURL} alt="" />
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
   );
}

export default SearchResult;
