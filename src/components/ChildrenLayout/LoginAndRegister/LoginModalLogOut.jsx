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

  return (
    <div className="hover-header">
      <button className="" type="button">Log out</button>
      
    </div>
  );
}
