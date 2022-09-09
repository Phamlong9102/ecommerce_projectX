import { useState, useEffect } from 'react';

function ValidateNoLibrary() {
   const initialValues = { username: '', email: '', password: '', confirmPassword: '' };

   const [formValues, setFormValues] = useState(initialValues);

   const [formErrors, setFormErrors] = useState({});

   const [isSubmit, setIsSubmit] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
   };

   useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
         console.log(formValues);
      }
   }, [formErrors]);

   const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   const validate = (values) => {
      const errors = {};
      if (!values.username) {
         errors.username = 'User name is required!';
      }

      if (!values.email) {
         errors.email = 'Email is required!';
      } else if (!regex.test(values.email)) {
         errors.email = 'This is not a valid email format!';
      } 

      if (!values.password) {
         errors.password = 'Password is required!';
      } else if (values.password.length < 6) {
         errors.password = 'Password must more than 6 characters';
      } 

      if (!values.confirmPassword) {
         errors.confirmPassword = "Please confirm your password";
      } 

      return errors;
   };

   return (
      <>
         <div className="mt-[50px]">
            <div className="flex justify-center">
               {Object.keys(formErrors).length === 0 && isSubmit ? (
                  <div className="">
                     <span className="text-[green] text-[12px]">Log in successfully</span>
                  </div>
               ) : (
                  <div className="">
                     <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                  </div>
               )}
            </div>

            <form onSubmit={handleSubmit}>
               <div className="flex justify-center">
                  <div className="">
                     <span className="text-[30px]">Register</span>
                  </div>
               </div>

               <div className="flex justify-center">
                  <div className="">
                     <label>Username</label>
                  </div>
               </div>
               <div className="flex justify-center">
                  <input
                     value={formValues.username}
                     onChange={handleChange}
                     className="border-black border-[1px] border-solid"
                     type="text"
                     name="username"
                     placeholder="User name"
                  />
               </div>
               <div className="flex justify-center">
                  <div className="">
                     <span className="text-[red] text-10px">{formErrors.username}</span>
                  </div>
               </div>

               <div className="flex justify-center mt-[20px]">
                  <div className="">
                     <label>Email</label>
                  </div>
               </div>
               <div className="flex justify-center">
                  <input
                     value={formValues.email}
                     onChange={handleChange}
                     className="border-black border-[1px] border-solid"
                     type="text"
                     name="email"
                     placeholder="Email"
                  />
               </div>
               <div className="flex justify-center">
                  <div className="">
                     <span className="text-[red] text-10px">{formErrors.email}</span>
                  </div>
               </div>

               <div className="flex justify-center mt-[20px]">
                  <div className="">
                     <label>Password</label>
                  </div>
               </div>
               <div className="flex justify-center">
                  <input
                     value={formValues.password}
                     onChange={handleChange}
                     className="border-black border-[1px] border-solid"
                     type="text"
                     name="password"
                     placeholder="Password"
                  />
               </div>
               <div className="flex justify-center">
                  <div className="">
                     <span className="text-[red] text-10px">{formErrors.password}</span>
                  </div>
               </div>

               <div className="flex justify-center mt-[20px]">
                  <div className="">
                     <label>Confirm password</label>
                  </div>
               </div>
               <div className="flex justify-center">
                  <input
                     value={formValues.confirmPassword}
                     onChange={handleChange}
                     className="border-black border-[1px] border-solid"
                     type="text"
                     name="confirmPassword"
                     placeholder="Confirm Password"
                  />
               </div>
               <div className="flex justify-center">
                  <div className="">
                     <span className="text-[red] text-10px">{formErrors.confirmPassword}</span>
                  </div>
               </div>

               <div className="flex justify-center mt-[30px]">
                  <button className="bg-black w-[100px] h-[40px] text-white">Register</button>
               </div>
            </form>
         </div>
      </>
   );
}

export default ValidateNoLibrary;
