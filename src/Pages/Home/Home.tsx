import CartDetails from '../../components/CartDetails'
import Desktop from '../Desktop/Desktop'
import Laptop from '../Laptop/Laptop'
import Phone from '../Phone/Phone'

const Home = () => {
  return (
    <div>

    
    <div  className='w-full  md:w-10/12 lg:w-10/12  mx-auto '>
      <section className="dark:bg-gray-800 dark:text-gray-100 mb-12">
<img className='w-full' src="https://www.uob.com.sg/assets/web-resources/personal/images/save/everyday-accounts/one-account/one-account-banner-lemon-1440x700.jpg" alt="" />
</section>
        
      </div>
      <Desktop></Desktop>
      <Laptop></Laptop>
      <Phone></Phone>
      </div>
  )
}

export default Home
