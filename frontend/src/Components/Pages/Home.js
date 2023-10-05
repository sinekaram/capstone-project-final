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
      <section className="banking-section">
        <div className="banking-content">
          <h2>Banking Services</h2>
          <p>
            We offer a wide range of banking services to meet your financial needs.<br />
            Whether you're saving for the future, managing your daily expenses, or<br />
            planning for retirement, we have you covered.
          </p>
          
          <button className="btn-primary">Learn More</button>
        </div>
        <div className="banking-image">
          <img
            src="https://www.natwest.com/content/dam/natwest/personal/ways-to-bank/image.dim.667.nw-pers-hero-senior-lady-in-denim-shirt-speaking-on-mobile-phone-taking-notes.jpg" // Placeholder image for banking services
            height={400}
            width={500}
            alt="Banking Services"
          />
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

      <Footer />
    </Fragment>
  )
}

export default Home