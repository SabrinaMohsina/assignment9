import React from 'react';
import Slider from  '../Pages/Slider';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div >
          <Navbar></Navbar>
          <main className='min-h-[calc(100vh-287px)]'>
            
              <Slider></Slider>
            <Outlet></Outlet>
          </main>
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;