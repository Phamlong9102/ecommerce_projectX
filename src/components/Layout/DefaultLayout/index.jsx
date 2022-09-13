import HeaderLogIn from './Header/Header';
import Menu from './Menu';
import Footer from './Footer';
<<<<<<< HEAD
import BackToTop from './BackToTop/ScrollButton'
=======
import BackToTop from './BackToTop/ScrollButton';
>>>>>>> 4db43eab3b11eb4833eeccbb86ea80827d93ca8c

function DefaultLayout({ children }) { 
   return (
      <div className="">
         <HeaderLogIn />
         <div className="body">
            <Menu />
            <div className="content">
               {children}
            </div>
            <BackToTop />
         </div>
         <Footer />
      </div>
      
   );
}

export default DefaultLayout;
