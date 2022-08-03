// File này dùng để import các thành phần dùng chung trong trang web
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import BackToTop from '../DefaultLayout2/BackToTop/ScrollButton';
import Directional from './Directional';

function DefaultLayout({ children }) {
   return (
      <div>
         <Header />

         <div className="container">
            <Menu />
            <Directional /> 
            <div className="content">{children}</div>
         </div>

         <Footer />
         <BackToTop />
      </div>
   );
}

export default DefaultLayout;
