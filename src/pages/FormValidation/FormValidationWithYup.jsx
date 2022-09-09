import { UserValidate } from "~/validations/UserValidate";


function FormValidation() {

    const createUser = async (e) => {
        e.preventDefault()
        let formData = {
            username: e.target[0].value, 
            email: e.target[1].value, 
            password: e.target[2].value, 
        }
        const isValid = await UserValidate.isValid(formData)
        console.log(isValid)
    }

   return (
      <>
         <div className="mt-[100px] flex justify-center">
            <form onSubmit={createUser} action="">
               <div className="border-black border-[1px] border-solid">
                  <input placeholder="username" type="text" />
               </div>
               <div className="border-black border-[1px] border-solid mt-[20px]">
                  <input placeholder="Email" type="text" />
               </div>
               <div className="border-black border-[1px] border-solid mt-[20px]">
                  <input placeholder="Password" type="password" />
               </div>
               <div className="border-black border-[1px] border-solid mt-[20px]">
                  <input placeholder="Click me" type="submit" />
               </div>
            </form>
         </div>
      </>
   );
}

export default FormValidation;
