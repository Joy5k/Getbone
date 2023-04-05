import React, {useState } from 'react';
import { AuthContext } from '../../context/Authprovider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';
const auth = getAuth(app)

type NewUserProps = {
  name: string;
  email: string;
  password: any;
  role: string;
};
const SignUp = () => {
  const [user, setUser] = useState<NewUserProps>({ name: "", email: "",password:"",role: "Buyer"});
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [isChecked, setIsChecked] = useState<boolean>(false);

  //get values from input fields
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    setUser({ ...user, [fieldName]: event.target.value });
    console.log(user);
  };
  // get selected value
  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const fieldName = event.target.name;
    setUser({...user,[fieldName]: event.target.value });
}
//signUp function
    const handleSignUp = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
      const users = {
        email: user.email,
        password: user.password,
        name: user.name,
        role:user.role

      }
      setError('')
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((result) => {
          // Signed in 
          const user = result.user;
          fetch('https://getbone-server-joy5k.vercel.app/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(users)
            
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
            })
          .catch(err =>console.log(err))
          navigate('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setError(errorMessage)
        });
   
      
      
  }
  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setIsChecked(event.target.checked);

  }
    return (
        <div>
         <form onSubmit={handleSignUp} className='lg:w-4/12 md:w-6/12 sm:w-11/12 mx-auto border-1 bg-slate-200 rounded-lg py-12 px-5 mt-4 mb-40 flex flex-col
           '>
          <h3 className='text-3xl font-bold text-center '>Sign Up</h3>
  <div className="mb-6 ">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input  onChange={handleChange} type="text"  name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required/>
  </div>
  <div className="mb-6 ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input  onChange={handleChange} type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input  onChange={handleChange} type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='****' required/>
      </div>
          <p className='text-red-500'>{error }</p>  
<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select  onChange={handleOption} name='role' id="countries" className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option  selected value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
         
  
</select>

  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input type="checkbox" id="myCheckbox" onChange={handleCheckboxChange}  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
    </div>
    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline ">terms and conditions</a></label>
  </div>
  <button type="submit"  id="myButton"  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isChecked ? "" : "opacity-50 cursor-not-allowed"}`}
 disabled={!isChecked} >Sign Up</button>
    <p>already have an account? <Link className='text-blue-500 underline' to="/signin">sign in</Link></p>
         
</form>
        </div>
    );
};

export default SignUp;