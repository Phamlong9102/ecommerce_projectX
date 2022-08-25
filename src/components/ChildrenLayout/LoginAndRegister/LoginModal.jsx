import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import LoginTab from './LoginTab'; 

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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="hover-header">
      <Button className="css-1e6y48t-MuiButtonBase-root-MuiButton-root" onClick={handleOpen}>Sign in</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop css-qyhys8 css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop">
          <LoginTab />
        </Box>
      </Modal>
    </div>
  );
}
