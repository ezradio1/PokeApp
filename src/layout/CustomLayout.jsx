import React, { useContext } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import CustomNavbar from '../components/Navbar';
import CustomContent from './CustomContent';
import CustomFooter from '../components/Footer';

import { WidthContext } from '../context/WidthContext';
import BottomNavBar from '../components/BottomNavBar';

const CustomLayout = () => {
  const [matchesWidth] = useContext(WidthContext);

  return (
    <Router>
      <>
        <CustomNavbar />
        <CustomContent />
        {!matchesWidth ? <CustomFooter /> : <BottomNavBar />}
      </>
    </Router>
  );
};

export default CustomLayout;
