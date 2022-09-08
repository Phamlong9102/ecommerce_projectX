import { useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'; 

import { auth } from '~/firebase/firebaseConfig'
 
function FireBaseAuthentication() {
   const [registerEmail, setRegisterEmail] = useState("");

   const [registerPassword, setRegiterPassword] = useState("");

   const [loginEmail, setLoginEmail] = useState("");

   const [loginPassword, setLoginPassword] = useState("");

   const register = async () => {
      try {
         const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword) 
         console.log(user)
      } catch (error) {
         console.log(error.message)
      } 
   };

   const login = async () => {
      try {
         const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword) 
         console.log(user)
      } catch (error) {
         console.log(error.message)
      } 
   };

   const logout = async () => {
      await signOut(auth) 
   };

   const [user, setUser] = useState("")

   onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser) 
   })

   return (
      <>
         <div className="ml-[300px] mt-[100px]">
            <div className="">
               <h3> Register user </h3>
               <input
                  onChange={(e) => {
                     setRegisterEmail(e.target.value);
                  }}
                  className="border-black border-[1px] border-solid"
                  placeholder="email"
                  type="text"
               />
               <input
                  onChange={(e) => {
                     setRegiterPassword(e.target.value);
                  }}
                  className="border-black border-[1px] border-solid"
                  placeholder="password"
                  type="text"
               />
               <button onClick={register} className="bg-black text-white"> Create user </button>
            </div>
         </div>

         <div className="ml-[300px] mt-[100px]">
            <h3> Login </h3>
            <input
               onChange={(e) => {
                  setLoginEmail(e.target.value);
               }}
               className="border-black border-[1px] border-solid"
               placeholder="Email..."
               type="text"
            />
            <input
               onChange={(e) => {
                  setLoginPassword(e.target.value);
               }}
               className="border-black border-[1px] border-solid"
               placeholder="Password..."
               type="text"
            />
            <button onClick={login} className="bg-black text-white"> Login </button>
         </div>

         
         <h4 className="ml-[300px]">User Logged in is:</h4>

         {/* Nếu mà thằng user có thằng email.property thì sẽ hiển thị dữ liệu, còn không thì 
         không làm gì*/}
         <div className="ml-[300px]">{user?.email}</div>




         <button onClick={logout} className="ml-[300px] mt-[50px] bg-black text-white"> Sign out </button>
      </>
   );
}

export default FireBaseAuthentication;
