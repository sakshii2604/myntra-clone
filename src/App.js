import './App.css'
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Bag from "./components/Bag";
import Login from "./components/LoginSignup";
import CreateAccount from "./components/CreateAcc";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Orders from "./components/profile/Orders";
import MyntraCredit from "./components/profile/MyntraCredit";
import MynCash from "./components/profile/MynCash";
import Cards from "./components/profile/Cards";
import Vpa from "./components/profile/Vpa";
import Addresses from "./components/profile/Addresses";
import Coupons from "./components/profile/Coupons";
import ProfileDetails from "./components/profile/ProfileDetails";
import Otp from "./components/Otp";
import LoginUsingPassword from "./components/LoginUsingPassword";
import ResetPassword from "./components/ResetPassword";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Myntra from "./components/Myntra";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    document.title = `Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra`;
  }, []);

  return (
    <section>
      <div className="app">
        <Routes>
          <Route path="/myntra/:id/bag" element={<Bag />} />
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/myntra" element={<><Navbar /><Myntra /></>} />
          <Route path="/myntra/:id" element={<><Navbar /><Products /></>} />
          <Route path="/login" element={<><Navbar /><Login /></>} />
          <Route path="/profile" element={<><Navbar /><Profile /></>} />
          <Route path="/createAccount" element={<><Navbar /><CreateAccount /></>} />
          <Route path="/signup" element={<><Navbar /><SignUp /></>} />
          <Route path="/orders" element={<><Navbar /><Orders /></>} />
          <Route path="/credit" element={<><Navbar /><MyntraCredit /></>} />
          <Route path="/myncash" element={<><Navbar /><MynCash /></>} />
          <Route path="/cards" element={<><Navbar /><Cards /></>} />
          <Route path="/upi" element={<><Navbar /><Vpa /></>} />
          <Route path="/address" element={<><Navbar /><Addresses /></>} />
          <Route path="/coupons" element={<><Navbar /><Coupons /></>} />
          <Route path="/editProfile" element={<><Navbar /><ProfileDetails /></>} />
          <Route path="/otpLogin" element={<><Navbar /><Otp /></>} />
          <Route path="/password" element={<><Navbar /><LoginUsingPassword /></>} />
          <Route path="/forgot" element={<><Navbar /><ResetPassword /></>} />
        </Routes>
        <Footer />
      </div>
    </section>
  );
};

export default App;
