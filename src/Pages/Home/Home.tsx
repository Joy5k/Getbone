import CatergoryLayout from '../CategoryLayout/CatergoryLayout'
import Desktop from '../Desktop/Desktop'
import Laptop from '../Laptop/Laptop'
import Phone from '../Phone/Phone'
import Navbar from '../shared/Navbar/Navbar'

const Home = () => {
  return (
    <div>

    
    <div  className='lg:w-10/12 md:w-10/12 sm:w-full mx-auto'>
      <section className="dark:bg-gray-800 dark:text-gray-100 mb-12">
<img src="https://www.uob.com.sg/assets/web-resources/personal/images/save/everyday-accounts/one-account/one-account-banner-lemon-1440x700.jpg" alt="" />
</section>
        
      </div>
      <Desktop></Desktop>
      <Laptop></Laptop>
      <Phone></Phone>
      </div>
  )
}

export default Home
