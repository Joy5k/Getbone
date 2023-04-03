import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';
import React, { useState, useContext ,useEffect} from 'react'

type productProps = {
  url: string; 
  title: string;
  _id: string;
  image: string;
  price: number;
  guarantee:any,
  warranty: any,
  quantity: number,
  description: any;
  paid: boolean,
  productId:string,
}
type NewUserProps2 = {
  thumbnailUrl:string;
  title:string;
  url:string; 
};
type NewUserProps = {
  // firstName: string;
  // email: string;
  // phoneNumber: any;
  // lastName: string;


};
const Review = () => {
  const { user } = useContext(AuthContext);
  const [userInfo,setUserInfo]=useState({})
  const product = useLoaderData() as productProps;
  const [CustomerComment, setCustomerComment] = useState<NewUserProps>({})
  console.log(product,'product');
  const handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event, 'The comment has been');
    const fieldName = event.target.name;
    // setUserInfo({ ...userInfo, [fieldName]: event.target.value, email: user?.email });
    const Data = { [fieldName]: event.target.value,userInfo:userInfo }
    const newData = { ...Data }
    setCustomerComment(newData)
  }
  useEffect(() => {
    fetch(`http://localhost:5000/email/${user.email}`)
      .then(response => response.json())
      .then(data => {
        setUserInfo(data)
      })
  },[user.email])
  console.log(CustomerComment, 'new data');
  const handleSubmitReview = () => {
    console.log('clicked');
    fetch(`http://localhost:5000/review/${product._id}`, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(CustomerComment)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data,'success');
      })
  }
  const details = (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-auto w-full items-center bg-white border border-gray-200 rounded-lg shadow   ">
      <img className=" w-96 h-96 mx-auto" src={product.image} alt=""/>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description.slice(0, 500) // extract the first 7 characters
}...</p>
      </div>
      <div className='w-full lg:w-96 mx-auto  '>
         <label  htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your comment</label>
<textarea onChange={handleComment} name="message"  id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your valuable comment here..."></textarea>
<button onClick={()=>handleSubmitReview()}  className='btn bg-blue-600 text-white p-2 rounded-sm w-20 my-4 hover:rounded-md '>Send</button>
          </div>
    </div>
  );

  return (
    <div className='sm:w-full md:w-10/12 lg:w-10/12 mx-auto'>
      {details}
    
    </div>
  );
}

export default Review;
