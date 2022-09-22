import TableProducts from '~/components/ChildrenLayout/AdminTable/TableProducts';

import { Link, useNavigate } from 'react-router-dom';

import { AdminContext } from '~/contexts/AdminContext';

import { useContext } from 'react';

function AdministratorProducts() {
   const { isAuthAdmin } = useContext(AdminContext)

   const navigate = useNavigate()

   const handleLogoutAdmin = (e) => {
      localStorage.removeItem("dataAdmin");
      navigate(`/admin-login`)
   }

   return (
      <>
         {isAuthAdmin ? (
            <div className="flex justify-between">
               <div className="flex flex-col w-[200px] h-[700px] bg-[#102d5c] select-none">
                  <div className="flex justify-center items-center w-[200px] h-[70px] bg-[#1f566e] ">
                     <span className="text-[20px] text-['Poppins'] text-white font-semibold">Administrator</span>
                  </div>
                  <Link to="/" className="flex justify-center items-center cursor-pointer  w-full h-[40px] hover:bg-[#216a8a]">
                     <span className="text-[16px] font-medium text-white ">
                        Home
                     </span>
                  </Link>
                  <Link to="/admin-products" className="flex justify-center items-center cursor-pointer  w-full h-[40px] hover:bg-[#216a8a]">
                     <span className="text-[16px] font-medium text-white ">Products</span>
                  </Link>
                  <Link to="/admin-users" className="flex justify-center cursor-pointer items-center w-full h-[40px] hover:bg-[#216a8a]">
                     <span className="text-[16px] font-medium text-white ">Users</span>
                  </Link>
                  <div to="/admin-users" className="flex justify-center cursor-pointer items-center w-full h-[40px] hover:bg-[#216a8a]">
                     <span onClick={handleLogoutAdmin} className="text-[16px] font-medium text-white ">Log out</span>
                  </div>
               </div>
               <div className="w-full h-full">
                  <TableProducts />
               </div>
            </div>
         )
            : <div className="text-[40px] text-[red] font-['Poppins'] grid place-items-center h-screen">Please return to Home page please</div>}
      </>
   );
}
export default AdministratorProducts;
