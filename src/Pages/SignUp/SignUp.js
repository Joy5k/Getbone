import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const navigate=useNavigate()
    const handleSignUp = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
      const password = from.password.value;
      const userType = from.userType.value;
      console.log(userType,'check userType');
      const name = from.name.value;
      const users = {
        email: email,
        password: password,
        name: name,
        role:userType

      }
        createUser(email, password)
        .then((result) => {
          // Signed in 
          const user = result.user;
          navigate('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      fetch('http://localhost:5000/user', {
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
      
      
    }
    return (
        <div>
         <form onSubmit={handleSignUp} className='lg:w-4/12 md:w-6/12 sm:w-11/12 mx-auto border-1 bg-slate-200 rounded-lg py-12 px-5 mt-4 mb-40 flex flex-col
           '>
          <h3 className='text-3xl font-bold text-center '>Sign Up</h3>
  <div className="mb-6 ">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="text"  name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required/>
  </div>
  <div className="mb-6 ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='****' required/>
                </div>
                
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select name='userType' id="countries" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected value="Buyer">Buyer</option>
  <option value="Seller">Seller</option>
  
</select>

  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
    </div>
    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline ">terms and conditions</a></label>
  </div>
              <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">Sign Up</button>
    <p>already have an account? <Link className='text-blue-500 underline' to="/signin">sign in</Link></p>
         
</form>
        </div>
    );
};

export default SignUp;