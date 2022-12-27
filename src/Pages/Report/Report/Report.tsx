import { type } from 'os';
import React,{useState,useContext} from 'react'
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import swal from 'sweetalert';
import { AuthContext } from '../../../context/Authprovider';

type NewUserProps = {
    // firstName: string;
    // email: string;
    // phoneNumber: any;
    // lastName: string;

  
  };
type NewUserProps2 = {
thumbnailUrl:string;
title:string;
url:string; 
  };

const Report = () => {
    const navigate=useNavigate()
    const reportedItem = useLoaderData();
  const {user}=useContext(AuthContext)
   const [userInfo,setUserInfo]=useState<NewUserProps>({})
    const [reportedData, setReportedData] = useState<NewUserProps>({})

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const fieldName = event.target.name;
        setUserInfo({ ...userInfo, [fieldName]: event.target.value, email: user?.email });
        const Data = { [fieldName]: event.target.value, email: user?.email }
        const newData = { ...Data, reportedItem }
        setReportedData(newData)
    }
    const handleReport = () => {
        console.log(reportedData);
        fetch(`http://localhost:5000/report`, {
            method: 'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(reportedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged===true) {
                    swal(
                        'Successfully reported',
                        "Admin will take action soon.",
                        "success"
                      );
                }  
                navigate('/')
            })
     }
  return (
      <div className='w-full lg:w-10/12 md:w-10/12  mx-auto h-screen flex items-center'>
        
          <div className='w-full lg:w-96 mx-auto  '>
              {/* <label htmlFor="message" className="block mb-2 text-xl font-semibold text-gray-900 dark:text-white">What happen?</label>
              <input onChange={handleChange} type="text" name="message"  id="floating_last_name" className="block py-2.5 px-0 w-full h-96 text-sm text-gray-900  border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-1"  /> */}
         
         <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea onChange={handleChange} name="message"  id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
<button onClick={handleReport} className='btn bg-red-600 text-white p-2 rounded-sm w-20 my-4 '>Send</button>
          </div>
 
 </div>
  )
}

export default Report