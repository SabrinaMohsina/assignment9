import React from 'react';
import { Link } from 'react-router';

const ToysCard = ({toy}) => {
  const {thumbnail , toyName , rating , availableQuantity , price }= toy
   
    return (
       <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-outx">
  <figure className='h-48 overflow-hidden'>
    <img className='w-full object-cover'
      src={thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[ #F1EDCD] rounded-md">
    <h2 className="card-title">{toyName}</h2>
    <p > <span className='text-bold'>Rating</span> :{rating}</p>
    <p> Quantity :{availableQuantity}</p>
    <p> Price : ${price}</p>

    <div className="card-actions justify-end">
      <Link to="/toysdetails" className="btn   bg-amber-800 text-white">View More</Link>
    </div>
  </div>
</div>
    );
};

export default ToysCard;