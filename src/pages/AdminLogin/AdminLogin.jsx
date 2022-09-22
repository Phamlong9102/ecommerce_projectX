import { Link } from 'react-router-dom';

import { useState, useEffect, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { ClickGetDataContext } from '~/contexts/ClickGetDataContext';
import { AppContext } from '~/contexts/AppContext';
import { AdminContext } from '~/contexts/AdminContext';
import { faListNumeric } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const initialValues = { adminName: "", password: "" }
    const [adminValues, setAdminValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isLogin, setIsLogin] = useState(false)
    const [data, setData] = useState([])
    const { adminData, isAuthAdmin, setAdminData } = useContext(AdminContext)
    const navigate = useNavigate();

    // Get values of 2 field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminValues({ ...adminValues, [name]: value })
    }

    // Validate Admin Login
    const validate = (values) => {
        const errors = {}
        let isValid = true
        if (!values.adminName) {
            errors.adminName = "Admin name is required!";
            isValid = false
        } 
        if (values.adminName.length < 4) {
            errors.adminName = "Admin name must be more than 4 characters"
            isValid = false
        }
        if (!values.password) {
            errors.password = "Password is required!";
            isValid = false
        }
        setFormErrors(errors);
        return isValid;
    }

    // Handle Login Function
    const handleLogin = async (e) => {
        e.preventDefault();
        let isValid = validate(adminValues)
        if (!isValid) return; 
        
        const result = await axios(
            `https://630ed147379256341881df89.mockapi.io/admin?filter&adminName=${adminValues.adminName}&password=${adminValues.password}`,
        )
        setData(result.data)
        if (isValid && result.data.length === 1) {
            setIsLogin(true)
            localStorage.setItem('dataAdmin', JSON.stringify(result.data));
            setAdminData(result.data)
            navigate(`/admin-products`)
        } else {
            console.log('No Valid')
            alert('Please check your Admin name and password')
            setIsLogin(false)
        }
    }

    return (
        <>
            <div className="flex justify-center selection-default">
                <div className="w-[448px] h-fit p-[48px] mt-[48px] border-black border-[1px] border-solid">
                    <div className="">
                        <form onSubmit={handleLogin}>
                            <h3 className="mb-5 text-center text-[30px] font-normal text-[#111] font-['Monserrat'] ">Administrator Login</h3>
                            <div className="flex flex-col mb-[1.5rem]">
                                <label className="mb-[0.5rem] text-[16px] text-black font-['Poppins'] font-light">Admin name</label>
                                <input
                                    name="adminName"
                                    value={adminValues.adminName}
                                    onChange={handleChange}
                                    placeholder="Admin name"
                                    className="border-solid border-[1px] border-[#ccc] outline-0 rounded-[0.5rem] text-[1.25rem] px-[1rem] py-[0.5rem] placeholder:text-[16px] placeholder:text-[#ccc] placeholder:font-['Poppins' ]" type="text" />
                                <span className="text-[red] text-[12px] font-normal font-['Poppins']">{formErrors.adminName}</span>
                            </div>
                            <div className="flex flex-col mb-[rem]">
                                <label className="mb-[0.5rem] text-[16px] text-black font-['Poppins'] font-light">Password</label>
                                <input
                                    name="password"
                                    value={adminValues.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="border-solid border-[1px] border-[#ccc] outline-0 rounded-[0.5rem] text-[1.25rem] px-[1rem] py-[0.5rem] placeholder:text-[16px] placeholder:text-[#ccc] placeholder:font-['Poppins' ]" type="password" />
                                <span className="text-[red] text-[12px] font-normal font-['Poppins']">{formErrors.password}</span>
                            </div>
                            <div className="text-center mt-[3.5rem]">
                                <button className="w-[132px] h-[48px] bg-[#000] text-white text-[16px] font-normal font-['Poppins']">
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center mt-[26px]">
                        <Link className="text-[16px] font-semibold font-['Poppins']" to="/">
                            Home
                        </Link>
                    </div>

                </div>

            </div>

        </>

    )
}

export default Login;