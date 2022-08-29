import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomeProduct({ product }) {
   return (
      <Link to={product.url} className="relative cursor-pointer mx-[8px]">
         <img className="w-full max-h-[342px]" src={product.imageURL} alt="" />
         {product.new && (
            <div className="absolute top-[calc(3%+3px)] left-0 w-[50px] h-[20px] bg-white text-black leading-[20px] text-center rotate-90">
               <span className="head-tag-fashion-blog">New</span>
            </div>
         )}
         {product.sale && (
            <div className="absolute top-[calc(3%+3px)] left-0 w-[50px] h-[20px] bg-black text-white leading-[20px] text-center rotate-90">
               <span className="head-tag-fashion-blog">Sale</span>
            </div>
         )}
         <div className="flex justify-between mt-[22px]">
            <div>
               <span className="products-name-shopping-everyday">{product.name}</span>
            </div>
            <div>
               <span className="price-shopping-everyday-products">${product.price}.00</span>
            </div>
         </div>
         <div className="">
            <span className="name-of-job">{product.category}</span>
         </div>
      </Link>
   );
}

HomeProduct.propTypes = {
   product: PropTypes.object.isRequired,
};

export default HomeProduct;
