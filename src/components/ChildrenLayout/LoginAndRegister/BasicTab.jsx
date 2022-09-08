import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { ClickGetDataContext } from '~/contexts/ClickGetDataContext';

function LoginTab(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

LoginTab.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

export default function BasicTabs({ handleClose, setOpen }) {
   const [value, setValue] = useState(0);

   // Giá trị mặc định của 3 thằng username, email, password
   const [registerForm, setRegisterForm] = useState({ username: '', email: '', password: '' });

   const [username, setUserName] = useState();

   const [password, setPassWord] = useState('');

   // Thằng này để gọi API
   const [data, setData] = useState([]);

   // Lấy DOM của thằng username
   const inputRefUserName = useRef(null);

   // Lấy DOM của thằng password
   const inputRefPassWord = useRef(null);

   // Check Login state
   const [isLogin, setIsLogin] = useState(false);

   // data được lấy từ useContext
   const { dataContext, setDataContext } = useContext(ClickGetDataContext);

   const navigate = useNavigate();

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   // Lấy giá trị username người dùng nhập vào
   const getUserName = (e) => {
      setUserName(e.target.value);
   };

   // Lấy giá trị password người dùng nhập vào
   const getPassWord = (e) => {
      setPassWord(e.target.value);
   };

   // Chặn người dùng nhấn enter khi nhập các field
   const handleKeyDown = (e) => {
      if (e.key === ' ') {
         e.preventDefault();
      }
   };

   // Hàm Click lấy thông tin người dùng
   const handleClickGetInfoSignIn = async (e) => {
      // Call api check username and account
      const result = await axios(
         // Call lên API bằng cách gán current.value với DOM đã được lấy
         `https://630ed147379256341881df89.mockapi.io/users?filter&username=${inputRefUserName.current.value}&password=${inputRefPassWord.current.value}`,
      );
      // setData = result.data trả về
      setData(result.data);
      console.log(result.data);

      // Check data trả về từ API
      // Nếu data.length === 1 thì
      if (result.data.length === 1) {
         // Đăng nhập thành công
         setIsLogin(true);
         // setDataContext trong useContext = data user được API trả về
         setDataContext(result.data);
         // Và add dữ liệu user trả về lên localStorage
         localStorage.setItem('dataContext', JSON.stringify(result.data));
         // Và đóng thằng Login modal lại
         setOpen(false);
      } else if (result.data.length === 0) {
         setIsLogin(false);
         alert('Username or password wrong. Please enter username or password');
      } else if (result.data.length === 12) {
         setIsLogin(false);
         alert('Please enter your username and password ');
      }
   };

   // Hàm bắt dữ liệu người dùng truyền vào
   const registerChangeForm = (value, state) => {
      console.log(value);
      setRegisterForm((oldValue) => {
         return { ...oldValue, [state]: value };
      });
   };

   // Hàm Click vào Register và add dữ liệu user vào database
   const handleClickRegister = (e) => {
      if (registerForm.username === '' || registerForm.email === '' || registerForm.password === '') {
         console.log('missing');
         return;
      } else
         axios
            .post('https://630ed147379256341881df89.mockapi.io/users', { ...registerForm })
            .then((res) => {
               console.log(res);
            })
            .catch((err) => {
               console.log('Error =', err);
            });
   };

   return (
      <Box sx={{ width: '100%', height: '100%' }}>
         <Box sx={{}}>
            <Tabs
               sx={{}}
               className="css-heg063-MuiTabs-flexContainer "
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <Tab
                  sx={{
                     width: 150,
                     height: 57,
                     fontWeight: '600 !important',
                     color: '#000',
                     fontFamily: 'Poppins',
                     fontSize: 18,
                  }}
                  className="basis-1/2 css-qygaxq-MuiButtonBase-root-MuiTab-root.Mui-selected "
                  label="Login"
                  {...a11yProps(0)}
               />
               <Tab
                  sx={{ width: 150, height: 57, fontWeight: 600, color: '#000', fontFamily: 'Poppins', fontSize: 18 }}
                  className="basis-1/2 css-1fhfb89-MuiButtonBase-root-MuiTab-root.Mui-selected css-1fhfb89-MuiButtonBase-root-MuiTab-root "
                  label="Register"
                  {...a11yProps(1)}
               />
            </Tabs>
         </Box>

         {/* Sign in */}
         <LoginTab value={value} index={0}>
            <div className="mx-[35px] ">
               {/* User name */}
               <div className="">
                  <input
                     ref={inputRefUserName}
                     value={username}
                     onKeyDown={handleKeyDown}
                     onChange={getUserName}
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase placeholder:mt-[8px]"
                     placeholder="User Name"
                     type="text"
                  />
               </div>

               {/* Password */}
               <div className="mt-[16px]">
                  <input
                     ref={inputRefPassWord}
                     value={password}
                     onChange={getPassWord}
                     onKeyDown={handleKeyDown}
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase"
                     placeholder="PassWord"
                     type="password"
                  />
               </div>
               <div className="mt-[18px] flex items-center">
                  <div className="">
                     <input type="checkbox" />
                  </div>
                  <div className="ml-[4px]">
                     <span className="text-[13px] font-light">Remember me</span>
                  </div>
               </div>
               <div to="" className="mt-[12px]">
                  <span className="text-[13px] font-light font-['Poppins']">Lost your password?</span>
               </div>
               <div className="mt-[20px]">
                  <div to="" className="">
                     <div className="under-00"></div>
                     {!isLogin ? (
                        <button
                           onClick={handleClickGetInfoSignIn}
                           className="w-full h-[40px]  bg-black text-white text-['Poppins'] text-[13px] font-semibold"
                        >
                           Login
                        </button>
                     ) : (
                        navigate(`/loged_in`)
                     )}
                  </div>
               </div>
            </div>
         </LoginTab>

         {/* Register */}
         <LoginTab value={value} index={1}>
            <div className="mx-[35px] ">
               <div className="">
                  <input
                     onKeyDown={handleKeyDown}
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase placeholder:mt-[8px]"
                     placeholder="User Name"
                     type="text"
                     onChange={(e) => {
                        registerChangeForm(e.target.value, 'username');
                     }}
                  />
               </div>
               <div className="mt-[18px] ">
                  <input
                     onKeyDown={handleKeyDown}
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase"
                     placeholder="Email"
                     type="text"
                     onChange={(e) => {
                        registerChangeForm(e.target.value, 'email');
                     }}
                  />
               </div>
               <div className="mt-[18px] ">
                  <input
                     onKeyDown={handleKeyDown}
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase"
                     placeholder="PassWord"
                     type="password"
                     s
                     onChange={(e) => {
                        registerChangeForm(e.target.value, 'password');
                     }}
                  />
               </div>
               <div className="mt-[18px] ">
                  <input
                     onKeyDown={handleKeyDown}
                     className="w-[230px] h-[22px] bg-white cursor-pointer border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#ccc] focus:border-b-black outline-0 placeholder:text-[10px] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:tracking-[0.16em] placeholder:text-black placeholder:uppercase"
                     placeholder="Repeat PassWord"
                     type="password"
                  />
               </div>
               <div className="relative mt-[18px] underline underline-offset-8	">
                  <div className="under-00"></div>
                  <button
                     type="button"
                     className="w-full h-[40px]  bg-black text-white text-['Poppins'] text-[13px] font-semibold"
                     onClick={() => {
                        handleClickRegister();
                     }}
                  >
                     Register
                  </button>
               </div>
            </div>
         </LoginTab>
      </Box>
   );
}
