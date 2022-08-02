import logoWeb from '~/images/logoWeb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Menu() {
   return (
      <div className="w-full flex justify-between mx-12 ">
         <div className="flex mt-9 cursor-pointer">
            <div>
               <a href="/">
                  <img className="h-[23px]" src={logoWeb} alt="Logo Web" />
               </a>
            </div>
            <div className="flex font text-sm text-center ml-5	font-semibold	font-['Poppins']">
               <ul className="list-none mx-5">Home</ul>
               <ul className="list-none mx-5">Pages</ul>
               <ul className="list-none mx-5">Store</ul>
               <ul className="list-none mx-5">Shop</ul>
               <ul className="list-none mx-5">Blog</ul>
               <ul className="list-none mx-5">Porfolio</ul>
               <ul className="list-none mx-5">Elements</ul>
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
               <span className="">Search</span>
            </div>
            <div className="mr-5">
               <FontAwesomeIcon icon={faBars} />
            </div>
         </div>
      </div>
   );
}
export default Menu;
