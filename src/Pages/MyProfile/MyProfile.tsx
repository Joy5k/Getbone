import React, {useState,useContext,useEffect }  from 'react'
import {  FaMapMarkerAlt, FaRegGem } from 'react-icons/fa'
import {  MdOutlineFileUpload } from 'react-icons/md'
import { AuthContext } from '../../context/Authprovider';
import swal from 'sweetalert';
import axios from 'axios';
import { CgProfile } from 'react-icons/cg';



type NewUserProps = {
  imageUrl: string | null;
  // ...
};

type userInfoType = {
  city:string;
country:string;
 email:string;
firstName:string;
  lastName: string;
imageUrl:string;
name: any;
password: string;
phoneNumber: string;
role: string;
state: string;
street: string;
  _id: string;

}
// img hosting key = 9f37c59aee0d043b16ae697f3841385d
const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState<NewUserProps>({
    imageUrl: '',
    // ...
  });
  const [loader,SetLoader]=useState<boolean>(false)
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [upload, setUpload] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const imageLink=userData?.imageUrl
  const [userInfo, setUserInfo] = useState<userInfoType | null>(null);
  
  useEffect(() => {
    fetch(`https://getbone-server-joy5k.vercel.app/user?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setEmail(data.email);
        setRole(data.role);
        setId(data._id);
        setUserInfo(data);
        setUserData({ ...data });
      });
  }, [user?.email]);
  
  async function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.name;
    setUserData({ ...userData, [fieldName]: event.target.value });
  };
  
  
  async function handleUpdatedProfile  (event: React.MouseEvent<HTMLFormElement>){
    SetLoader(true)
    event.preventDefault();
  
    fetch(`https://getbone-server-joy5k.vercel.app/user/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...userData }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          swal('Successful', 'Updated Your Profile', 'success');
          SetLoader(false)
        }
      });
  };
  
  async function handleUpload() {
    SetLoader(true)
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      const response = await axios.post(
        'https://api.imgbb.com/1/upload?key=71901a2f0c4b89a9fd3ecca12b72d964',
        formData
      );
      setImageUrl(response.data.data.url);
      setUpload(true);
      setUserData({ ...userData, imageUrl: imageUrl });
      setUserData({ ...userData, imageUrl: response.data.data.url });
      if (response.data.data.url !==null) {
        fetch(`https://getbone-server-joy5k.vercel.app/user/${id}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ ...userData, imageUrl }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged === true) {
              SetLoader(false)
            }
          });
      }
    }
  }
  
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
    // handleUpload(); // call handleUpload after setting the file state
  }
  return (
    <div className='sm:flex-col  md:flex-row lg:flex user profile  lg:w-10/12 md:w-10/12 sm:w-full mx-auto'>  
      <div className='w-full lg:w-4/12 border h-full p-4 overflow-hidden  border-gray-200 shadow-gray-300 shadow-2xl rounded-md lg:mr-5'>
        {
          !userData?.imageUrl && !user.photoURL ? <CgProfile className='w-20 h-20 rounded-full' size={24} /> :
            <>
              {userData?.imageUrl ? <img className='w-40 h-40 rounded-full' src={userData?.imageUrl} alt="Uploaded Image" />: <img className='w-40 h-40 rounded-full' src={user.photoURL} alt="Uploaded Image" /> 
        }
            </>
        }
    

        <p className=' text-lg font-bold mt-5 mb-3 '>{
          userInfo?.firstName||lastName ? <p>{userInfo?.firstName}</p> :
            <p>
             { userInfo?.name}</p>}
           </p>
    <span className='flex justify-items-start  align-middle items-center '><FaRegGem className='mt-1 text-blue-500 mr-2'></FaRegGem>Premium user</span>
        <span className='flex  justify-items-start align-middle items-center '><FaMapMarkerAlt className='mt-1 text-gray-700 mr-2'></FaMapMarkerAlt>
        {userInfo?.street},{userInfo?.city}
         
        </span>
        
        <p className='text-gray-500 font-bold mt-6'>Email address</p>
        <p className='text-gray-900 font-bold'>{user.email}</p>
        <div className='my-2'>
          <address className='my-6 mt-6'>
            <span className='font-bold text-gray-500 '>Home address</span>
            <p><span className='font-bold'>Street:</span> {userInfo?.street},</p>
          <p><span className='font-bold'>City:</span>  {userInfo?.city},</p>
          <p><span className='font-bold'>Division:</span> {userInfo?.state}, </p>
          <p><span className='font-bold'>Country:</span>{userInfo?.country}</p>
          </address>
          <p><span className='text-gray-500 font-bold mt-6'>Phone Number</span>
            <p className='text-md text-gray-900 font-bold'>{userInfo?.phoneNumber }</p>
        </p>
        </div>
      
      </div>

{/* // User input Field */}
      <div className='w-full border  border-gray-200 shadow-gray-300 shadow-2xl p-4 mb-10'>
        <form onSubmit={handleUpdatedProfile}>
          <div className="my-4">
            <label htmlFor='file-upload' className='text-md font-semibold'>
              Upload Image
              <MdOutlineFileUpload className='bg-blue-600 text-white  w-24 h-10 rounded-md cursor-pointer mt-2'>
              </MdOutlineFileUpload>
            </label>
            <input id='file-upload'  type="file" onChange={handleFileChange}  className='hidden'/>
          </div>
          {loader ? <button  className='border border-gray-300 my-4 bg-gray-200 w-20 rounded-lg'>Uploading...</button> :   <button onClick={handleUpload} className='border border-gray-300 my-4 bg-gray-200 w-20 rounded-lg'>Upload</button>}
       
          
       <div className="grid md:grid-cols-2 md:gap-6">
       <div className="relative z-0 mb-6 w-full group">
        <input onFocus={handleChange} type="text" name="firstName"  id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-1"  defaultValue={userInfo?.firstName}  />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
    <div className="relative z-0 mb-6 w-full group">
        <input onFocus={handleChange} type="text" name="lastName"  id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-1" defaultValue={userInfo?.lastName}   />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>


  </div>
  <div className="relative z-0 mb-6 mt-6 w-full group">
  <input onFocus={handleChange} type="email" name="email"  id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-1" defaultValue={user.email} disabled />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 mb-4">Email address</label>
          </div>
          <p className='text-lg font-bold my-4'>Address</p>


          <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input onFocus={handleChange} type="text" name="street" id="floating_first_name" className="block py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={userInfo?.street}   />
        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input onFocus={handleChange} type="text" name="city"  id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-1" defaultValue={userInfo?.city}   />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
        <input onFocus={handleChange} type="text" name="state"  id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-1" defaultValue={userInfo?.state}   />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State/Division</label>
    </div>
            <div className="relative z-0 mb-6 w-full group">
        <input onFocus={handleChange} type="text" name="country"  id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-1" defaultValue={userInfo?.country}   />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
    </div>
  </div>  
          
 
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
              <input onFocus={handleChange} type="tel" name="phoneNumber" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-1" defaultValue={userInfo?.phoneNumber}
     />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
    </div>
  
  </div>
  <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
</form>

      </div>
  
    </div>
  )
}

export default MyProfile