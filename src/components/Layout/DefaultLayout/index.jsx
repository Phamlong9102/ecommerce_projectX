// File này dùng để import các thành phần dùng chung trong trang web
import HeaderLogIn from './Header/Header';
import Menu from './Menu';
import Footer from './Footer';
import BackToTop from '../DefaultLayout2/BackToTop/ScrollButton';

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
