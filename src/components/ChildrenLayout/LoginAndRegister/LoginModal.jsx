import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import BasicTab from './BasicTab';
import { ClickGetDataContext } from '~/contexts/ClickGetDataContext';

import { useState , useEffect, useContext } from 'react';

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

   const handleLogin = () => setOpen(true);

   const handleClose = () => {
      setOpen(false);
   };

   const handleLogout = () => {
      setDataContext([]);
      setIsLogin(false);
   };

   const { dataContext, setDataContext } = useContext(ClickGetDataContext);

   useEffect(() => {
      if (dataContext.length > 0) {
         setIsLogin(true);
         console.log(dataContext)
        const account = localStorage.setItem('dataContext', JSON.stringify(dataContext));
        
      }
   });

   return (
      <div className="hover-header">
         {isLogin ? (
            <Button className="css-1e6y48t-MuiButtonBase-root-MuiButton-root" onClick={handleLogout}>
               Log out
            </Button>
         ) : (
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
