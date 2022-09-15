import { Link } from 'react-router-dom';

import { useState, useEffect, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { ClickGetDataContext } from '~/contexts/ClickGetDataContext';
import { AppContext } from '~/contexts/AppContext';

function Login() {
   const initialValues = { username: "", password: "" }
   const [formValues, setFormValues] = useState(initialValues)
   const [formErrors, setFormErrors] = useState({})
   const [isLogin, setIsLogin] = useState(false)
   const [data, setData] = useState([])
   const { setDataContext } = useContext(ClickGetDataContext);
   const { setCartItems } = useContext(AppContext);

   const navigate = useNavigate();

   // Get values of 2 field
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value })
   }

   // Validate Login
   const validate = (values) => {
      const errors = {}
      if (!values.username) {
         errors.username = "User name is required!";
      } else if (values.username.length < 4) {
         errors.username = "User name must be more than 4 characters"
      }
      if (!values.password) {
         errors.password = "Password is required!";
      }
      return errors;
   }

   const handleLogin = async (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      const result = await axios(
         `https://630ed147379256341881df89.mockapi.io/users?filter&username=${formValues.username}&password=${formValues.password}`,
      )
      setData(result.data)

      if (result.data.length === 1) {
         setIsLogin(true);
         setDataContext(result.data);
         setCartItems(result.data[0].cartItems)
         localStorage.setItem('dataUser', JSON.stringify(result.data));
         navigate(`/`)
      } else if (result.data.length === 0) {
         setIsLogin(false);
         alert('Username or password wrong. Please check your username or password');
      } else {
         setIsLogin(false);
         alert('Please enter your username and password ');
      }
   }

   return (
      <>
         <div className="flex justify-center selection-default">
            <div className="w-[448px] h-[532px] p-[48px] mt-[48px] border-black border-[1px] border-solid">
               <div className="">
                  <form onSubmit={handleLogin}>
                     <h3 className="mb-5 text-center text-[30px] font-normal text-[#111] font-['Monserrat'] ">Sign in</h3>
                     <div className="flex flex-col mb-[1.5rem]">
                        <label className="mb-[0.5rem] text-[16px] text-black font-['Poppins'] font-light">User name</label>
                        <input
                           name="username"
                           value={formValues.username}
                           onChange={handleChange}
                           placeholder="User name"
                           className="border-solid border-[1px] border-[#ccc] outline-0 rounded-[0.5rem] text-[1.25rem] px-[1rem] py-[0.5rem] placeholder:text-[16px] placeholder:text-[#ccc] placeholder:font-['Poppins' ]" type="text" />
                        <span className="text-[red] text-[12px] font-normal font-['Poppins']">{formErrors.username}</span>
                     </div>
                     <div className="flex flex-col mb-[rem]">
                        <label className="mb-[0.5rem] text-[16px] text-black font-['Poppins'] font-light">Password</label>
                        <input
                           name="password"
                           value={formValues.password}
                           onChange={handleChange}
                           placeholder="Password"
                           className="border-solid border-[1px] border-[#ccc] outline-0 rounded-[0.5rem] text-[1.25rem] px-[1rem] py-[0.5rem] placeholder:text-[16px] placeholder:text-[#ccc] placeholder:font-['Poppins' ]" type="password" />
                        <span className="text-[red] text-[12px] font-normal font-['Poppins']">{formErrors.password}</span>
                     </div>
                     <div className="mt-[1.5rem]">
                        <Link to="/register">
                           <span className="text-[16px] text-black hover:text-red-600 font-normal font-['Poppins'] ">You haven't account?</span>
                        </Link>
                     </div>
                     <div className="text-center mt-[3.5rem]">
                        <button className="w-[132px] h-[48px] bg-[#000] text-white text-[16px] font-normal font-['Poppins']">
                           Log in
                        </button>
                     </div>
                  </form>
               </div>
               <div className="text-center mt-[26px]">
                  <Link className="text-[16px] font-semibold font-['Poppins']"  to="/">
                     Home
                  </Link>
               </div>

            </div>

         </div>

      </>

   )
}

export default Login;