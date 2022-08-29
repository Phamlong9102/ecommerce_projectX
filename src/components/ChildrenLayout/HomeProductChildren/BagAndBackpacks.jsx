import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BagAndBackpacks({ product }) {
   return (
      <Link to={product.url} className="relative cursor-pointer mx-[8px]">
         <img className="w-full max-h-[295px]" src={product.imageURL} alt="" />
         <div className="flex flex-col text-center mt-[22px]">
            <div>
               <span className="products-name-shopping-everyday">{product.name}</span>
            </div>
            <div>
               <span className="price-shopping-everyday-products">${product.price}.00</span>
            </div>
         </div>
      </Link>
   );
}

BagAndBackpacks.protoTypes = {
    product: PropTypes.object.isRequired,
}

export default BagAndBackpacks;
