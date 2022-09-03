import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewSearch() {
   const [searchInput, setSearchInput] = useState('');

   const navigate = useNavigate();

   const navigateToSearch = (e) => {
      if (e.key === 'Enter') {
         navigate(`/search?search=${searchInput}`);
      }
   };

   const handleClick = (e) => {
      navigate(`/search?search=${searchInput}`);
   };

   return (
      <div>
         <div className="mt-[78px] mx-[122px] selection-default">
            <div className="mb-[20px]">
               <span className="font-semibold font-['Poppins'] text-[38px] leading-[1.1em] text-black">
                  New search:
               </span>
            </div>
         </div>
         <div className="mx-[122px] selection-default">
            <input
               onChange={(e) => setSearchInput(e.target.value)}
               onKeyPress={navigateToSearch}
               className="relative w-full h-[40px] cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-black outline-0 placeholder:text-[15px] placeholder:font-['Montserrat'] font-normal placeholder:text-black uppercase placeholder:tracking-[0.16em]"
               placeholder="Type here"
               type="text"
            />
            <button onClick={handleClick} onKeyPress={navigateToSearch} className="absolute right-[9%]">
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
      </div>
   );
}

export default NewSearch;
