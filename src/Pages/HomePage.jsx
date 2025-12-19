import React from 'react';

import PopularToys from '../Components/PopularToys';
import { useLoaderData } from 'react-router';
import ToysCard from '../Components/ToysCard';



const HomePage = () => {
  const toys = useLoaderData();
  console.log(toys);
   
  
    return (
      <div className='bg-accent-100'>
        <div className='flex justify-center items-center flex-col m-10'>
           <h2 className='font-bold text-5xl text-blue-600  '>Welcome to <br /> <span className='text-amber-400'>LITTLE UMMAH</span> Toy Store</h2>
              <p className='mt-5 text-[#656565]'> It's a joyful place where faith, fun, and imagination come together! 🌙✨ <br /> Discover toys that inspire learning, kindness, and creativity. Every product <br /> is chosen with love to nurture young hearts and minds, making playtime meaningful for <br /> our little Ummah.
        
              </p>

          <PopularToys> </PopularToys>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
               {
              toys.map(toy=>(<ToysCard key={toy.id}  toy={toy} />) )
             }
            </div>
        </div>
        </div>
    );
};

export default HomePage;