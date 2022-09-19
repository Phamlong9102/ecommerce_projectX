import logoWeb from '~/images/HeaderImages/logoWeb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import SearchForm from '~/components/ChildrenLayout/SearchForm/SearchForm';
import ProductPopper from '~/components/ChildrenLayout/ProductPopper/ProductPopper';

function Menu() {
   return (
      <div className="flex justify-between mx-12 text-menu-color select-none">
         <div className="flex mt-9 cursor-pointer">
            <div className="hidden xs:block">
               <Link to="/">
                  <img className="h-[23px]" src={logoWeb} alt="Logo Web" />
               </Link>
            </div>
            <div className="flex font text-sm text-center ml-0 lg:ml-5	font-semibold font-['Poppins']">
               <div className="list-none mx-0 lg:mx-5 hidden lg:block">
                  <Link to="/" className="">
                     Home
                  </Link>
               </div>
               <div className="list-none mx-5 hidden lg:block">
                  <Link to="" className="">
                     Pages
                  </Link>
               </div>
               <div className="list-none mx-5 hidden xs:block ">
                  <Link to="/store" className="">
                     Store
                  </Link>
               </div>
               <div className="list-none mx-5 hidden lg:block">
                  <Link to="" className="">
                     Shop
                  </Link>
               </div>
               <div className="list-none mx-5 hidden lg:block">
                  <Link to="" className="">
                     Blog
                  </Link>
               </div>
               <div className="list-none mx-5 hidden lg:block">
                  <Link to="" className="">
                     Porfolio
                  </Link>
               </div>
               <div className="list-none mx-5 hidden lg:block">
                  <Link to="" className="">
                     Elements
                  </Link>
               </div>
            </div>
         </div>

         <div className="flex mt-9 text-sm font-[Poppins] font-semibold	cursor-pointer	">
            <div className="flex mr-9">
               <SearchForm />
            </div>

            {/* Whislist */}
            <div className="hidden lg:flex mr-9">
               <div className="mr-2.5">
                  <FontAwesomeIcon icon={faHeart} />
               </div>
               <span className="">Whislist</span>
            </div>

            <div className="">
               <ProductPopper />
            </div>

            <div className="hidden lg:block">
               <FontAwesomeIcon icon={faBars} />
            </div>
         </div>
      </div>
   );
}
export default Menu;
