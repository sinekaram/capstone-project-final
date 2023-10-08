import React, { Fragment } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import TopNavbar from '../Header/TopNavbar';
import Footer from '../Footer/Footer';

function About() {
  const paperStyle = {
    padding: '20px',
    backgroundColor: '#FEDFE2', // Set the background color here
  };

  const whoWeAreStyle = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginTop: '20px', // Add margin on top
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '20px',
  };

  const personalLoanStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#F9F9F9', // Background color for Personal Loan section
    marginTop: '20px', // Add margin on top
    display: 'flex', // Add flex display
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-end', // Align items to the right
  };
  const personalloan = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginTop: '20px', // Add margin on top
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '20px',
    marginRight: '100px',
  };

  const homeLoanStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#FEDFE2', // Background color for Home Loan section (same as Who We Are)
    marginTop: '20px', // Add margin on top
    display: 'flex', // Add flex display
    flexDirection: 'column', // Stack items vertically, reversing the order
    alignItems: 'flex-end', // Align items to the right
  };
  const homeloan = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '20px',
    marginRight: '800px', // Adjust margin-right to move the heading to the right
    textAlign: '', // Align text to the right
  };
  const CarLoanStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#F9F9F9', // Background color for Personal Loan section
    marginTop: '20px', // Add margin on top
    //display: 'flex', // Add flex display
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-end', // Align items to the right
  };
  const carloan = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginTop: '20px', // Add margin on top
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '800px',
    marginRight: '20px',
  };
  const StudentLoanStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#FEDFE2', // Background color for Home Loan section (same as Who We Are)
    marginTop: '20px', // Add margin on top
    display: 'flex', // Add flex display
    flexDirection: 'column', // Stack items vertically, reversing the order
    alignItems: 'flex-end', // Align items to the right
  };
  const studentloan = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginTop: '20px', // Add margin on top
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '20px',
    marginRight: '800px',
  };
  const BusinessLoanStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#F9F9F9', // Background color for Personal Loan section
    marginTop: '20px', // Add margin on top
    //display: 'flex', // Add flex display
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-end', // Align items to the right
  };
  const businessloan = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginTop: '20px', // Add margin on top
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '800px',
    marginRight: '20px',
  };


  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal alignment
    justifyContent: 'space-between', // Move text and image to opposite ends
  };

  const textContainerStyle = {
    flex: 1, // Allow text to take up remaining space
    marginLeft: '20px', // Adjust left margin to move text more to the left
    marginRight: '40px', // Adjust right margin to move text more to the right
    marginTop: '20px', // Add margin on top
  };
  const textContainerStyle1 = {
    flex: 1, // Allow text to take up remaining space
    marginLeft: '600px', // Adjust left margin to move text more to the left
    marginRight: '0px', // Adjust right margin to move text more to the right
    marginTop: '40px', // Add margin on top
    alignItems:'Right',
  };
  const textContainerStyle2 = {
    flex: 1, // Allow text to take up remaining space
    marginLeft: '20px', // Adjust left margin to move text more to the left
    marginRight: '500px', // Adjust right margin to move text more to the right
    marginTop: '20px',
  };
  const textContainerStyle3 = {
    flex: 1, // Allow text to take up remaining space
    marginLeft: '600px', // Adjust left margin to move text more to the left
    marginRight: '0px', // Adjust right margin to move text more to the right
    marginTop: '40px', // Add margin on top
    alignItems:'Right',
  };
  const textContainerStyle4 = {
    flex: 1, // Allow text to take up remaining space
    marginLeft: '20px', // Adjust left margin to move text more to the left
    marginRight: '500px', // Adjust right margin to move text more to the right
    marginTop: '20px',
  };

  const imageStyle = {
    maxWidth: '50%', // Adjust the width as needed
    height: 'auto',
    marginTop: '0px', // Add margin on top
    marginRight: '20px',
  };
  const imageStyle1 = {
    maxWidth: '50%', // Adjust the width as needed
    height: 'auto',
    marginTop: '-150px', // Add margin on top
    marginRight: '550px',
  };
  const imageStyle3 = {
    maxWidth: '30%', // Adjust the width as needed
    height: 'auto',
    marginTop: '-120px', // Add margin on top
    marginRight: '80px',
  };
  const imageStyle4 = {
    maxWidth: '40%', // Adjust the width as needed
    height: 'auto',
    marginTop: '-160px', // Add margin on top
    marginRight: '50px',
    marginLeft: '30px',
  };
  const imageStyle5 = {
    maxWidth: '30%', // Adjust the width as needed
    height: 'auto',
    marginTop: '-160px', // Add margin on top
    marginRight: '50px',
    marginLeft: '30px',
  };
  const imageStyle6 = {
    maxWidth: '30%', // Adjust the width as needed
    height: 'auto',
    marginTop: '-160px', // Add margin on top
    marginRight: '50px',
    marginLeft: '30px',
  };

  return (
    <Fragment>
      <TopNavbar/>
    <Container>
      
      <Box pt={10}>
        <Paper elevation={3} style={paperStyle}>
          <Typography variant="h4" gutterBottom style={whoWeAreStyle}>
            Who We Are
          </Typography>
          <div style={contentContainerStyle}>
            <div style={textContainerStyle}>
              <Typography variant="body1">
                NatWest Group is a relationship bank for a digital world. We champion potential;
                breaking down barriers and building financial confidence so the 19 million people,
                families, and businesses we serve in communities throughout the UK and Ireland can
                rebuild and thrive. If our customers succeed, so will we.
              </Typography>
            </div>
            <img
              src="/Images/about.jpg" // Replace with the correct image path and extension
              alt="" // Provide a meaningful description
              style={imageStyle}
            />
          </div>
        </Paper>
      </Box>
      <Box pt={3}>
        <Paper elevation={3} style={personalLoanStyle}>
          <Typography variant="h5" gutterBottom style={personalloan}>
            Personal Loan
          </Typography>
          <div style={textContainerStyle1}>
            <Typography variant="body1">
              Experience financial freedom with our personal loans. Whether it's for unexpected expenses, a dream vacation, or consolidating debt, our competitive interest rates and hassle-free application process will help you achieve your goals with ease.
            </Typography>
          </div>
          <img
            src="/Images/personal-loan-4.jpg" // Replace with the correct image path and extension
            alt="" // Provide a meaningful description
            style={imageStyle1}
          />
        </Paper>
      </Box>
      {/* <Box pt={3}>
        <Paper elevation={3} style={homeLoanStyle}>
          <Typography variant="h5" gutterBottom style={homeloan}>
            Home Loan
          </Typography>
          <div style={textContainerStyle2}>
            <Typography variant="body1">
              Unlock your dream of homeownership with our tailored home loans. Choose from a variety of options with competitive interest rates, enjoy tax benefits, and start building equity in your future. Let us guide you towards your ideal home.
            </Typography>
          </div>
          <img
            src="/Images/home-loan.jpg" // Replace with the correct image path and extension
            alt="" // Provide a meaningful description
            style={imageStyle3}
          />
        </Paper>
      </Box> */}
      <Box pt={3}>
        <Paper elevation={3} style={homeLoanStyle}>
          <Typography variant="h5" gutterBottom style={homeloan}>
            Home Loan
          </Typography>
          <div style={textContainerStyle2}>
            <Typography variant="body1">
            Unlock your dream of homeownership with our tailored home loans. Choose from a variety of options with competitive interest rates, enjoy tax benefits, and start building equity in your future. Let us guide you towards your ideal home.
            </Typography>
          </div>
          <img
            src="/Images/home-loan.jpg" // Replace with the correct image path and extension
            alt="" // Provide a meaningful description
            style={imageStyle3}
          />
        </Paper>
      </Box>
      <Box pt={3}>
        <Paper elevation={3} style={CarLoanStyle}>
          <Typography variant="h5" gutterBottom style={carloan}>
            Car Loan
          </Typography>
          <div style={textContainerStyle3}>
            <Typography variant="body1">
            Drive your dreams with our car loans. Get behind the wheel of your dream vehicle with affordable interest rates and flexible repayment options. Start your journey towards owning a new car today.
            </Typography>
          </div>
          <img
            src="/Images/car-loan.jpg" // Replace with the correct image path and extension
            alt="" // Provide a meaningful description
            style={imageStyle4}
          />
        </Paper>
      </Box>
      <Box pt={3}>
        <Paper elevation={3} style={StudentLoanStyle}>
          <Typography variant="h5" gutterBottom style={studentloan}>
            Sudent Loan
          </Typography>
          <div style={textContainerStyle4}>
            <Typography variant="body1">
            Invest in your future with our student loans. Pursue your education with ease through competitive interest rates and student-friendly repayment plans. Let us support your academic journey.
            </Typography>
          </div>
          <img
            src="/Images/education-loan.jpg" // Replace with the correct image path and extension
            alt="" // Provide a meaningful description
            style={imageStyle5}
          />
        </Paper>
      </Box>
      <Box pt={3}>
        <Paper elevation={3} style={BusinessLoanStyle}>
          <Typography variant="h5" gutterBottom style={businessloan}>
            Business Loan
          </Typography>
          <div style={textContainerStyle3}>
            <Typography variant="body1">
            Fuel your entrepreneurial ambitions with our small business loans. Access the capital you need to grow and succeed, with flexible terms and competitive interest rates. Start building your business today.
            </Typography>
          </div>
          <img
            src="/Images/business-loan.jpg" // Replace with the correct image path and extension
            alt="" // Provide a meaningful description
            style={imageStyle6}
          />
          
        </Paper>
      </Box>
    </Container>
    <Footer/>
    </Fragment>
  );
}

export default About;
