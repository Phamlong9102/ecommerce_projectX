import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import BasicTab from './BasicTab';
import { ClickGetDataContext } from '~/contexts/ClickGetDataContext';

import { useState, useEffect, useContext } from 'react';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 300,
   height: 340,
   boxShadow: 24,
};

export default function LoginModal() {
   const [open, setOpen] = React.useState(false);

   const [isLogin, setIsLogin] = useState(false);
   
   const handleClose = () => {
      setOpen(false);
   };
   
   // Context
   const { dataContext, setDataContext, isAuth } = useContext(ClickGetDataContext);
   
   const handleLogin = () => setOpen(true);
   
   // Login
   useEffect(() => {
      console.log("isAuth = " , isAuth)
      // Nếu isAuth = true thì
      if (isAuth) {
         // Đăng nhập thành công
         setIsLogin(true);
      }
   },[isAuth]);
   
   // Hàm đăng xuất
   const handleLogout = () => {
      // Xóa data trong localStorage
      localStorage.removeItem("dataContext");
      // setDataContext= []
      setDataContext([]);
      // setIsLogin = false
      setIsLogin(false);
   };

   return (
      <div className="hover-header">
         {/* Nếu mà Login = true */}
         {isLogin ? (
            // thì hiện Log out
            <Button className="css-1e6y48t-MuiButtonBase-root-MuiButton-root" onClick={handleLogout}>
               Log out
            </Button>
         ) : (
            // Còn không thì hiện Log in
            <Button className="css-1e6y48t-MuiButtonBase-root-MuiButton-root" onClick={handleLogin}>
               Log in
            </Button>
         )}

         <Modal
            // setOpen={setOpen}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box
               sx={style}
               className="css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop css-qyhys8 css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop"
            >
               <BasicTab handleClose={handleClose} setOpen={setOpen} />
            </Box>
         </Modal>
      </div>
   );
}
