import { useState, useEffect } from 'react';

import { dataBase } from '~/firebase/firebaseConfig';

import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function FirebaseExample() {
   const [users, setUsers] = useState([]);

   // Hàm collection của Firebase dùng để Get data từ Firebase và gán vào user
   const usersCollectionRef = collection(dataBase, 'users');

   // const [newID, setNewID] = useState(0);
   const [newUserName, setNewName] = useState('');
   const [newEmail, setNewEmail] = useState('');
   const [newPassWord, setNewPassWord] = useState('');

   const createUser = async () => {
      await addDoc(usersCollectionRef, { username: newUserName, email: newEmail, password: newPassWord });
   };

//    const updateUser = async (id, password) => {
//       const userDoc = doc(dataBase, 'users', id);
//       const newField = { password: password + '' };
//       await updateDoc(userDoc.newField);
//    };

   const deleteUser = async (id) => {
      const userDoc = doc(dataBase, 'users', id);
      await deleteDoc(userDoc);
   };

   useEffect(() => {
      const getUsers = async () => {
         // Hàm getDocs dùng để callApi lấy dữ liệu từ Firebase về
         const data = await getDocs(usersCollectionRef);
         console.log(data);

         setUsers(
            data.docs.map((doc) => ({
               ...doc.data(),
               id: doc.id,
            })),
         );
      };
      getUsers();
   }, []);

   return (
      <div className="ml-[300px] mt-[100px]">
         <input
            className="border-[1px] border-solid border-black"
            onChange={(e) => {
               setNewName(e.target.value);
            }}
            type="text"
            placeholder="username"
         />
         <input
            className="border-[1px] border-solid border-black"
            onChange={(e) => {
               setNewEmail(e.target.value);
            }}
            type="text"
            placeholder="email"
         />
         <input
            className="border-[1px] border-solid border-black"
            onChange={(e) => {
               setNewPassWord(e.target.value);
            }}
            type="password"
            placeholder="password"
         />

         <button className="bg-black text-white" onClick={createUser}>
            Create Users
         </button>

         {users.map((user) => {
            return (
               <>
                  <div className="mt-[100px] ml-[300px]">
                     <h1>Username: {user.username}</h1>
                     <h1>email: {user.email}</h1>
                     <h1>password: {user.password}</h1>
                  </div>

                  <button className="bg-black text-white"
                     onClick={() => {
                        deleteUser(user.id);
                     }}
                  >
                     Delete User
                  </button>
               </>
            );
         })}
      </div>
   );
}

export default FirebaseExample;
