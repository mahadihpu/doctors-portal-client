import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import Navbar from '../../Shared/Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;