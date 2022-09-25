// Tải cơ định tuyến (Router) cho trang web
import '~/index.css';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { AppContextProvider } from './contexts/AppContext';
import { ClickGetDataContextProvider } from './contexts/ClickGetDataContext';
import { AdminContextProvider } from './contexts/AdminContext';

import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
   return (
      <AdminContextProvider>
         <ClickGetDataContextProvider>
            <AppContextProvider>
               <Router>
                  <div className="App">
                     <Routes>
                        {publicRoutes.map((route, index) => {
                           const Page = route.component;
                           let Layout = DefaultLayout;

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
               </Router>
            </AppContextProvider>
         </ClickGetDataContextProvider>
      </AdminContextProvider>
   );
}

export default App;
