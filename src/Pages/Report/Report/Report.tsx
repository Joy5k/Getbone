import { type } from 'os';
import React,{useState,useContext} from 'react'
import { useLoaderData } from 'react-router-dom'
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
    const reportedItem = useLoaderData();
  const {user}=useContext(AuthContext)
   const [userInfo,setUserInfo]=useState<NewUserProps>({})
    const [reportedData, setReportedData] = useState<NewUserProps>({})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name;
        setUserInfo({ ...userInfo, [fieldName]: event.target.value, email: user?.email });
        const Data = { [fieldName]: event.target.value, email: user?.email }
        const newData = { ...Data, reportedItem }
        setReportedData(newData)
    }
    const handleReport = () => {
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
            })
     }
  return (
      <div className='w-full lg:w-10/12 md:w-10/12  mx-auto h-screen flex items-center'>
        
          <div className='w-full lg:w-96 mx-auto '>
              <label htmlFor="message" className="block mb-2 text-xl font-semibold text-gray-900 dark:text-white">What happen?</label>
              <input onChange={handleChange} type="text" name="message"  id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900  border-1 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-1"  />
<button onClick={handleReport} className='btn bg-red-600 text-white p-2 rounded-sm w-20 my-4 '>Send</button>
</div>
 </div>
  )
}

export default Report