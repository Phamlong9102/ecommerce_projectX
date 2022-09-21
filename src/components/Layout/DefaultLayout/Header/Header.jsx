import { ClickGetDataContext } from '~/contexts/ClickGetDataContext';
import { AppContext } from '~/contexts/AppContext';

import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
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
      const pastProduct = JSON.parse(localStorage.getItem('dataUser'))[0]
      const currentUser = JSON.parse(localStorage.getItem('dataProduct'))
      console.log(currentUser)
      if (currentUser === null) {
         const getCartItem = pastProduct.cartItems;
         const userId = pastProduct.id;
         axios
            .put(`https://630ed147379256341881df89.mockapi.io/users/${userId}`, { ...pastProduct, cartItems: getCartItem })
            .then((res) => {
               console.log(res);
            })
            .catch((err) => {
               console.log('Error =', err);
            });
         localStorage.removeItem("dataUser");
         setCartItems([]);
         setDataContext([]);
         setIsLogin(false);
         return; 
      }

      const currentUser1 = JSON.parse(localStorage.getItem('dataProduct'))[0]
      if (currentUser1) {
         const getCartItem = currentUser1.cartItems;
         const userId = currentUser1.id;
         axios
            .put(`https://630ed147379256341881df89.mockapi.io/users/${userId}`, { ...currentUser1, cartItems: getCartItem })
            .then((res) => {
               console.log(res);
            })
            .catch((err) => {
               console.log('Error =', err);
            });
         localStorage.removeItem("dataProduct");
         localStorage.removeItem("dataUser");
         setCartItems([]);
         setDataContext([]);
         setIsLogin(false);
      }

   };

   return (
      <div className="flex text-color-header header-color header-height items-center select-none bg-black">
         <div className="basis-1/2 ml-12 hidden sm:block">
            <span className="text-xs">Free shipping on domestic orders over $150</span>
         </div>
         <div className="flex justify-around sm:justify-end basis-full sm:basis-1/2 ml-[28px] sm:ml-[0px] text-center uppercase text-[11px] mr-12 tracking-wide cursor-pointer">
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
      </div>
   );
}
export default Header;
