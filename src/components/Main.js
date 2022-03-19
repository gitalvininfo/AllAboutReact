

import React from 'react';
import Profile from './Profile';
import Button from './Button';
import About from './About';
import Footer from './Footer';
import Header from './Header';


export default function Main() {

    return (
        <div className='card-content-container'>
            <Header />
            <div className='details-content-container'>
                <Profile />
                <Button />
                <About />
            </div>
            <Footer />
        </div>
    )
}