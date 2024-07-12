import React from 'react';
import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-col w-full max-sm:w-full'>
      <img
        src={imgURL}
        alt={name}
        className='w-[280px] h-[280px] object-cover'
      />
      <div className='mt-8 flex flex-col items-start gap-2.5'>
        <div className='flex items-center gap-2.5'>
          <img
            src={star}
            alt="rating"
            width={24}
            height={24}
          />
          <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
