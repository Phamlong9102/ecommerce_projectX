// File này dùng để import các thành phần dùng chung trong trang web
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
// eslint-disable-next-line no-unused-vars
import BackToTop from '../DefaultLayout2/BackToTop/ScrollButton';

function DefaultLayout({ children }) {
   return (
      <div className="">
         <Header />

         <div className="z-[999] body">
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