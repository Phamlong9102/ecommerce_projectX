// File này dùng để import các thành phần dùng chung trong trang web
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import BackToTop from './BackToTop';

function DefaultLayout({ children }) {
   return (
      <div>
         <Header />

         <div className="container-1">
            <Menu />
            <div className="content">{children}</div>
         </div>

         <Footer />
         {/* <BackToTop /> */}
      </div>
   );
}

export default DefaultLayout;
