import React,{Fragment} from 'react'
import TopNavbar from '../Header/TopNavbar'
import Footer from '../Footer/Footer'
import './Home.css'; // Import your CSS file for styling
import { Carousel } from 'react-responsive-carousel';
import HeaderSlider from '../Header/HeaderSlider';



const Home = () => {
  return (
    <Fragment>
        <TopNavbar />
        <div className="content-container">
        <div className="content">
          <span className="span">
          <h1>
          Open an account and keep your <br/>
          banking in one place.
          </h1>
          <h5>
          Switch to NatWest today and we'll even move over your direct debits. It only <br />
          takes 7 days!
          </h5>
          </span>
          <img 
          src="https://www.natwest.com/content/dam/natwest/assets/personal/photography/dmm/hero/image.dim.667.young-woman-sitting-on-yellow-sofa-using-laptop-CASS-510x340.jpg" 
          alt="Your Image" 
          height="200"
          className="right-corner-image"
           />{' '}
           </div>
          </div>
          <div className="spacer">
            <HeaderSlider/>
          </div>
        
        <Footer />
    </Fragment>
  )
}

export default Home