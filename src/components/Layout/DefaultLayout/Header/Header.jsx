import { Link } from 'react-router-dom';

import { useState, useEffect, useContext } from 'react';

import { ClickGetDataContext } from '~/contexts/ClickGetDataContext';
import { AppContext } from '~/contexts/AppContext';

import axios from 'axios';


function Header() {
   const { dataContext, setDataContext, isAuth } = useContext(ClickGetDataContext);
   const { setCartItems } = useContext(AppContext);
   const [isLogin, setIsLogin] = useState(false)

   // Check Login
   useEffect(() => {
      if (isAuth) {
         setIsLogin(true);
      }
   }, [isAuth]);


   // Log out function
   const handleLogout = () => {
      const currentUser = JSON.parse(localStorage.getItem('dataContext'))[0]
      const getCartItem = currentUser.cartItems; 
      const userId = currentUser.id;
      
      if (getCartItem.length > 0) {
         axios
            .put(`https://630ed147379256341881df89.mockapi.io/users/${userId}`, { ...currentUser, cartItems: getCartItem})
            .then((res) => {
               console.log(res);
            })
            .catch((err) => {
               console.log('Error =', err);
            });
      }
      localStorage.removeItem("dataContext");
      setCartItems([])
      setDataContext([]);

      setIsLogin(false);
   };


   return (
      <header className="hidden lg:flex xl:flex 2xl:flex text-color-header header-color header-height items-center justify-between select-none">
         <div className="ml-12">
            <span className="text-xs">Free shipping on domestic orders over $150</span>
         </div>
         <div className="flex uppercase text-[11px] mr-12 tracking-wide cursor-pointer">
            {!isAuth ?
               (<div className="mr-6">
                  <Link to="/login" className=" tracking-[0.2em] hover:text-zinc-400 ease-in duration-200">Sign in</Link>
               </div>) :
               (<div className="mr-6">
                  <button onClick={handleLogout} className=" ">
                     <span className="tracking-[0.2em] hover:text-zinc-400 ease-in duration-200 uppercase">Log out</span>
                  </button>
               </div>)}


            <div className="mr-6 tracking-[0.2em] hover:text-zinc-400 ease-in duration-200">Contact us</div>
            <div className="tracking-[0.2em] hover:text-zinc-400 ease-in duration-200">Faq</div>
         </div>
      </header>
   );
}
export default Header;
