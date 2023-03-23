import { useLoaderData } from 'react-router-dom'
import paymentImg from './payment.png'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import Checkout from './Checkout';


interface MyData {
  image: string;
  // other properties
}
const stripePromise = loadStripe('pk_test_51M65lJBEpUuPl12HhfqXisUr9QyauC9XbQehSaXuRYaGV3KPqMmuxvJ4xUYEjw1BebhCxC0F32j4rTHHCKRZcYX500PAGEmnfF');

function Payment() {
  const data = useLoaderData() as MyData;
  const image = 'image' in data ? data.image : null;

  // Below the if else code is optional

  // if (image !== null) {
  //   console.log(image,'got the image');
  // }

  return (
      <div  className='sm:w-full md:w-10/12 lg:w-10/12 mx-auto text-center'>
          <h3 className='text-4xl text-center font-bold sm:w-full md:w-10/12 lg:w-10/12 mx-auto '>Payment for your product</h3>
      <div className='h-auto '>
        {/* <div className='max-w-md'>
          <img className='bg-transparent' src='https://thumbs.gfycat.com/IllegalShimmeringAsp-size_restricted.gif' alt="" />
        
        </div> */}
        
<div className="bg-transparent h-auto  w-full max-w-sm mx-auto my-4 rounded-lg ">
    
<figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
{image !== null && (
      <img className='bg-transparent h-auto ' src={image} alt="image image" />
    )}
</figure>
</div>
        </div>
   <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
    </div>
  )
}

export default Payment