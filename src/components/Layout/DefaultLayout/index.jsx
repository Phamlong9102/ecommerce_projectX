import HeaderLogIn from './Header/Header';
import Menu from './Menu';
import Footer from './Footer';
import BackToTop from './BackToTop/ScrollButton'

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
