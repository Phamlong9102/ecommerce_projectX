import logoWeb from '~/images/HeaderImages/logoWeb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Menu() {
   return (
      <div className="flex justify-between mx-12 text-menu-color select-none">
         <div className="flex mt-9 cursor-pointer">
            <div>
               <Link to="/">
                  <img className="h-[23px]" src={logoWeb} alt="Logo Web" />
               </Link>
            </div>
            <div className="flex font text-sm text-center ml-5	font-semibold font-['Poppins']">
               <Link to="/" className="list-none mx-5">Home</Link>
               <Link to="" className="list-none mx-5">Pages</Link>
               <Link to="/store" className="list-none mx-5">Store</Link>
               <Link to="" className="list-none mx-5">Shop</Link>
               <Link to="" className="list-none mx-5">Blog</Link>
               <Link to="" className="list-none mx-5">Porfolio</Link>
               <Link to="" className="list-none mx-5">Elements</Link>
            </div>
         </div>
         <div className="flex mt-9 text-sm font-[Poppins] font-semibold	cursor-pointer	">
            <div className="flex mr-9">
               <div className="mr-2.5">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </div>
               <span className="">Search</span>
            </div>
            <div className="flex mr-9">
               <div className="mr-2.5">
                  <FontAwesomeIcon icon={faHeart} />
               </div>
               <span className="">Whislist</span>
            </div>
            <div className="flex mr-9">
               <div className="mr-2.5">
                  <FontAwesomeIcon icon={faBagShopping} />
               </div>
               <Link to="/cart" className="">0 / $0.00</Link>
            </div>
            <div className="">
               <FontAwesomeIcon icon={faBars} />
            </div>
         </div>
      </div>
   );
}
export default Menu;
