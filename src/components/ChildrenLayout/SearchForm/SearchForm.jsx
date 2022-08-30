import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


function SearchForm() {
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   function handleChange(event) {
      console.log(event.target.value);
   }

   const navigate = useNavigate();

   const navigateToSearch = (e) => {
      if(e.key === 'Enter') {
         navigate('/search') 
      }
   }

   const handleEnterClose = (e) => {
      if(e.key === 'Enter') {
         setOpen(false)
      }
   }

   return (
      <div className="css-1lnhmug-MuiButtonBase-root-MuiButton-root:hover">
         <Button
            className="css-1lnhmug-MuiButtonBase-root-MuiButton-root:hover"
            sx={{
               color: '#000',
               padding: 0,
               border: 0,
               minWidth: 0,
               letterSpacing: 0,
               fontSize: 14,
               fontFamily: 'Poppins',
               fontWeight: 600,
               textTransform: 'none',
               borderRadius: 0,
               lineHeight: 1,
            }}
            onClick={() => {
               handleClickOpen()
            }}
         >
            <FontAwesomeIcon className="mr-2.5" icon={faMagnifyingGlass} />
            Search
         </Button>

         <Dialog className="css-zw3mfo-MuiModal-root-MuiDialog-root" open={open} onClose={handleClose}>
            <div className="css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop z-[1000000]">
               <input
                  autoFocus
                  className="z-[10000] w-[540px] h-[38px] bg-[#f9efec] placeholder:text-[25px] placeholder:text-black placeholder:font-['Poppins'] placeholder:font-semibold cursor-pointer outline-0 border-t-0 border-l-0 border-r-0 border-b-black border-b-[1px]"
                  type="text"
                  placeholder="Search..."
                  onChange={handleChange}   
                  onKeyPress={navigateToSearch}
                  onKeyUp={handleEnterClose}
               />
            </div>
         </Dialog>
      </div>
   );
}

export default SearchForm;
