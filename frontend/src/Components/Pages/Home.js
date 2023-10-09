import React, { Fragment, useState, useEffect } from 'react'
import TopNavbar from '../Header/TopNavbar'
import Footer from '../Footer/Footer';
import '../css/Home.css'; // Import your CSS file for styling
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const Home = () => {

  const data = [
    { name: 'Mortage', ratings: 65 },
    { name: 'Wealth', ratings: 59 },
    { name: 'Overdraft', ratings: 80 },
    { name: 'Finance', ratings: 81 },
    { name: 'Economy', ratings: 56 },
  ];

  return (
    <Fragment>
      <TopNavbar />
      <div className="content-container">
        <div className="content">
          <span className="span">
            <h1>
              Open an account and keep your <br />
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

      <div clasName="spacer">
        <div className="image-gallery">
          <div className="image-container">
            <img
              src="data:image/png;base64,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"
              alt="Image 1"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">Select the right mortage</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kXaCRiH8HjpSG5hFb365qTMsXtAw26sXnpWcHtjGS0O0W0xMj6GGiNcE-Qi7MSUQfws&usqp=CAU"
              alt="Choose from our credit cards"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">Choose from credit cards</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4f_4PAm1d-LI3pMeE2kkzudW_qzYA0kAG_g&usqp=CAU"
              alt="Choose from our credit cards"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">Banking with NatWest</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="data:image/png;base64,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"
              alt="Choose from our credit cards"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">see our savings products</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="data:image/jpeg;base64,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"
              alt="Choose from our credit cards"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">Visit Support Centre</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjH_X1AG5kCyq73d6JW5JkUosrg69Ub0MTAg&usqp=CAU"
              alt="Choose from our credit cards"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">Login to Online Banking</a>
            </div>
          </div>
        </div>
      </div>
      <section className="banking-section">
        <div className="banking-content">
          <h2>Something can’t wait? Buy Now Pay Later</h2>
          <p>
            We offer a wide range of banking services to meet your financial needs.
            Whether you're saving for the future, managing your daily expenses, or
            planning for retirement, we have you covered.
            A loan EMI calculator helps you save your valuable time.
            You don’t have to do the complex calculations manually,
            which can be quite time-consuming. It eliminates any chance of
            a miscalculation, providing you with an accurate estimate every time.
            It is highly specific for each type of loan.
          </p>

          <button className="btn-primary">Learn More</button>
        </div>

      </section>
      <div className="chart-container">
        <div className="chart-description">
          <h2>Banking Ratings</h2>
          <p>
            This chart displays the ratings for different banking categories. We are committed to providing top-notch banking services to meet your financial needs and ensure your financial success.The 5 most important banking services are checking and savings accounts, loan and mortgage services, wealth management, providing Credit and Debit Cards, Overdraft services. You can read about the Types of Banks in India – Category and Functions of Banks in India in the given link.
          </p>
        </div>
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ratings" fill="#d33737" />
        </BarChart>
      </div>
      <div className="image1-container">
        <div className="image1-description">
          <img src="https://www.natwest.com/content/dam/royal_bank_of_scotland/personal/climate/article/image.dim.480.rb-pers-photo-girl-switching-light-switch-450x280.jpg"
            alt="Image Description" />
          <h2>Tackle the rising cost of  the energy</h2>
          <p>We know how hard it is to keep up with the changing cost of energy.

            Small changes around the house could help you save energy and improve your monthly household budget.</p>
        </div>
        <div className="image1-description">
          <img src="https://www.natwest.com/content/dam/natwest/assets/personal/photography/article/image.dim.480.photo-web-article-happy-couple-stanfing-near-their-house-with-solar-panels-450x280.jpg"
            alt="Image Description" />
          <h2>Upgrade your home's energy efficiency</h2>
          <p>We’re showing you some home efficiency improvements you could make to:

            Save money over the long term,
            Help improve the value of your home,
            Take a look now.</p>
        </div>
        <div className="image1-description">
          <img src="https://www.natwest.com/content/dam/natwest_com/Life-space-Moments/image.dim.480.nw-cost-of-living.jpg"
            alt="Image Description" />
          <h2>Prices are up. Let's ease the squeeze.</h2>
          <p>We're experiencing the biggest price hike for 50 years. Inflation, energy prices, tax rises and the Russian invasion of Ukraine, have all played a part. It's squeezing all our pockets.</p>
        </div>
      </div>

      <Footer />
    </Fragment>
  )
}

export default Home