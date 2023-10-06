import './App.css';

import { Fragment } from "react";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import FAQ from "./Components/Pages/FAQ";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import EmiCalculator from "./Components/Pages/EmiCalculator";
import CustomerSupport from "./Components/Pages/CustomerSupport";
import Payment from "./Components/Pages/Payment";
import LoginPage from './Components/Pages/LoginPage';
import Register from './Components/Pages/Register';
import DashboardLayout from './Components/Pages/DashboardLayout';
import LoanTypes from './Components/Pages/LoanTypes';
import LoanQueries from './Components/Pages/LoanQueries';




function App() {
  return (
    <Fragment>
      
      <Routes>
        <Route path="natwestlogo" element={<Home/>}/>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About/>}/>
        <Route path="faq" element={<FAQ/>}/>

        <Route path="emiCalculator" element={<EmiCalculator/>}/>
        <Route path="/register" element={<Register />} />

        <Route path="/apply-for-loan" element={<LoanApplicationForm />} />
        <Route path="/loan-history" element={<LoanHistory />} />
        <Route path="emiCalculator" element={<EmiCalculator/>}/>

        <Route path="/emi-calculator" element={<EmiCalculator/>}/>
        <Route path="/apply-for-loan" element={<LoanApplicationForm/>}/>
        <Route path="/loan-history" element={<LoanHistory/>}/>

        <Route path="customerSupport" element={<CustomerSupport/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/userdashboard" element={<DashboardLayout />} />
          <Route path="/userdashboard/loantypes" element={<LoanTypes />} />
          <Route path="/loanqueriesfaq" element={<LoanQueries />} />
          
        <Route path="*" element={<div className="text-center text-danger">Page Not Found!!</div>} />
      </Routes>
    </Fragment>
  );
}

export default App;
