import ProductSearch from '~/components/ChildrenLayout/ProductSearch/ProductSearch';
import NewSearch from '~/components/ChildrenLayout/NewSearch/NewSearch';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';



function Search() {
   const [searchParams, setSearchParams] = useSearchParams();

   const search = searchParams.get('search');

   const [data, setData] = useState([]);

   useEffect(() => {
      if (search.trim() === '') {
         setData([])
         return undefined;
      } else {
         const fetchData = async () => {
            const result = await axios(`https://630ed147379256341881df89.mockapi.io/products?search=${search.trim()}`);
            setData(result.data);
            console.log(result);
         };
         fetchData();
      }
   }, [search]);

   return (
      <>
         {/* Điều hướng */}
         <div className="w-full h-[140px] relative flex justify-center bg-[#f6f6f6] mt-[32px] selection-default">
            <div className="absolute flex top-[40%] left-[9%] store-menu-route">
               <Link className="" to="/">
                  <span className="">Home</span>
               </Link>
               <span className="mx-[10px]">/</span>
               <div className="" to="/store">
                  <span className="">Search result for {search}</span>
               </div>
            </div>
            <div className="absolute top-[48%] left-[9%] mt-[10px]">
               <span className="store-big-title">Search result for: {search}</span>
            </div>
         </div>

         {/* New Search */}
         <NewSearch />

         <div className="mx-[122px] mt-[8px] selection-default">
            <span className="text-[13px] font-normal text-black font-[Montserrat]">
               If you are not happy with the results below please do another search
            </span>
         </div>

         {data.length === 0 || data.length === undefined ? (
            <div className="mt-[48px] mx-[122px]">
               <span className="text-[15px] font-normal text-black ">No product were found</span>
            </div>
         ) : (
            <div className="">
               {data.map((product) => (
                  <ProductSearch key={product.id} product={product} />
               ))}
            </div>
         )}
      </>
   );
}

export default Search;
