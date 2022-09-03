// Tải cơ định tuyến (Router) cho trang web
import '~/index.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

import { AppContextProvider } from './contexts/AppContext';

function App() {
   return (
      <AppContextProvider>
         <Router>
            <div className="App">
               <Routes>
                  {/* Lặp để điều hướng các page con */}
                  {publicRoutes.map((route, index) => {
                     // Nếu mà layout là null thì dùng Fragment ngược lại thì lấy
                     // Default layout
                     const Page = route.component;

                     // Mặc định Layout = DefaultLayout
                     let Layout = DefaultLayout;

                     // Nếu Layout = null
                     if (route.layout) {
                        Layout = route.layout;
                     } else if (route.layout === null) {
                        Layout = Fragment;
                     }

                     return (
                        <Route
                           key={index}
                           path={route.path}
                           element={
                              // Layout ôm Page lại thì Page trở thành children của
                              // Layout. Vì nó trở thành children nên nó sẽ được đưa vào
                              // {children} của DefaultLayout và được đưa vào phần content
                              <Layout>
                                 <Page />
                              </Layout>
                           }
                        />
                     );
                  })}
               </Routes>
            </div>
            {/* <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script> */}
         </Router>
      </AppContextProvider>
   );
}

export default App;
