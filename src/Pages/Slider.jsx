import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

import img1 from '../assets/toytrain.webp'
import img2 from '../assets/pexels-freestockpro-12955537.jpg'
import img3 from '../assets/circle.jpg'
import img4 from '../assets/michal-bozek-RcxR1aLw8X0-unsplash.jpg'
import img5 from '../assets/pexels-neosiam-681118.jpg'


const Slider = () => {
 
    return (
        <div >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className='flex justify-center'><img src={img1} alt="" /> </div></SwiperSlide>
        <SwiperSlide><div className='flex justify-center'><img src={img2} alt="" /> </div></SwiperSlide>
        <SwiperSlide><div className='flex justify-center'><img src={img3} alt="" /> </div></SwiperSlide>
        <SwiperSlide><div className='flex justify-center'><img src={img4} alt="" /> </div></SwiperSlide>
        <SwiperSlide><div className='flex justify-center'><img src={img5} alt="" /> </div></SwiperSlide>
       
      </Swiper>

        </div>
    );
};

export default Slider;