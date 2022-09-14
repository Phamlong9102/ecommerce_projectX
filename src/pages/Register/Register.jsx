import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const initialValues = { username: "", email: "", password: "", confirmPassword: "" }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const navigate = useNavigate();

    // Get values of 4 field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate(formValues)
        if(!isValid) return;
        const newFormValues = {
            username: formValues.username,
            email: formValues.email,
            password: formValues.password
        }
        setIsSubmit(true)
        axios
            .post('https://630ed147379256341881df89.mockapi.io/users', { ...newFormValues })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log('Error =', err);
            });
        navigate(`/login`)
    }

    const validate = (values) => {
        const errors = {}
        let isValid = true
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!values.username) {
            errors.username = "User name is required!";
            isValid = false
        } else if (values.username.length < 4) {
            errors.username = "User name must be more than 6 characters"
            isValid = false
        }
        if (!values.email) {
            errors.email = "Email is required!";
            isValid = false
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!"
            isValid = false
        }
        if (!values.password) {
            errors.password = "Password is required!";
            isValid = false
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm password is required!";
            isValid = false
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Password is not the same"
            isValid = false
        }
        setFormErrors(errors);  
        return isValid
    }

    return (
        <>
            <div className="flex justify-center selection-default">
                <div className="w-[448px] h-[690px] py-[10px] px-[48px] border-black border-[1px] border-solid">
                    <div className="">
                        {Object.keys(formErrors).length === 0 && isSubmit ?
                            (<div className="text-[16px] text-[green] font-['Poppins'] font-normal text-center">
                                Register Successful
                            </div>) : ''}

                        <form onSubmit={handleSubmit}>
                            <h3 className="mb-5 text-center text-[30px] font-normal text-[#111] font-['Monserrat'] ">Register</h3>
                            <div className="flex flex-col mb-[1.5rem]">
                                <label className="mb-[0.5rem] text-[16px] text-black font-['Poppins'] font-light">User name</label>
                                <input
                                    name="username"
                                    placeholder="User name"
                                    value={formValues.username}
                                    onChange={handleChange}
                                    className="border-solid border-[1px] border-[#ccc] outline-0 rounded-[0.5rem] text-[1.25rem] px-[1rem] py-[0.5rem] placeholder:text-[16px] placeholder:text-[#ccc] placeholder:font-['Poppins'] " type="text" />
                                <span className="text-[red] text-[12px] font-normal font-['Poppins']">{formErrors.username}</span>
                            </div>

                            <div className="flex flex-col mb-[1.5rem]">
                                <label className="mb-[0.5rem] text-[16px] text-black font-['Poppins'] font-light">Email</label>
                                <input
                                    name="email"
                                    placeholder="Email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    className="border-solid border-[1px] border-[#ccc] outline-0 rounded-[0.5rem] text-[1.25rem] px-[1rem] py-[0.5rem] placeholder:text-[16px] placeholder:text-[#ccc] placeholder:font-['Poppins']" type="text" />
                                <span className="text-[red] text-[12px] font-normal font-['Poppins']">{formErrors.email}</span>
                            </div>

                            <div className="flex flex-col mb-[1.5rem]">
                                <label className="mb-[0.5rem] text-[16px] text-black font-['Poppins'] font-light">Password</label>
                                <input
                                    name="password"
                                    placeholder="Password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    className="border-solid border-[1px] border-[#ccc] outline-0 rounded-[0.5rem] text-[1.25rem] px-[1rem] py-[0.5rem] placeholder:text-[16px] placeholder:text-[#ccc] placeholder:font-['Poppins']" type="password" />
                                <span className="text-[red] text-[12px] font-normal font-['Poppins']">{formErrors.password}</span>
                            </div>

                            <div className="flex flex-col mb-[1.5rem]">
                                <label className="mb-[0.5rem] text-[16px] text-black font-['Poppins'] font-light">Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    placeholder="Confirm password"
                                    value={formValues.confirmPassword}
                                    onChange={handleChange}
                                    className="border-solid border-[1px] border-[#ccc] outline-0 rounded-[0.5rem] text-[1.25rem] px-[1rem] py-[0.5rem] placeholder:text-[16px] placeholder:text-[#ccc] placeholder:font-['Poppins']" type="password" />
                                <span className="text-[red] text-[12px] font-normal font-['Poppins']">{formErrors.confirmPassword}</span>
                            </div>

                            <Link to="/login" className="">
                                <span className="text-[16px] text-black hover:text-red-600 font-normal font-['Poppins'] ">Have account yet?</span>
                            </Link>
                            <div className="text-center mt-[2.1rem]">
                                <button
                                    className="w-[132px] h-[48px] bg-[#000] text-white text-[16px] font-normal font-['Poppins']">
                                    Register
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

export default Register;