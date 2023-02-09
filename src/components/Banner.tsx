import React from 'react';
import Image from 'next/legacy/image';
import {banner} from '@/assets/images';

const Banner = () => {
  return (
    <div
      className={
        'relative h-[300px] sm:h-[400px] xl:h-[600px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'
      }>
      <Image src={banner} layout={'fill'} objectFit={'cover'} />
      <div className={'absolute top-1/4 w-full text-center md:top-1/2'}>
        <p className={'text-sm text-white font-bold sm:text-lg'}>
          Not sure where to go? Perfect.
        </p>
        <button
          className={
            'py-3 px-5 font-bold text-blue-500 bg-white rounded-xl shadow-md my-3 active:scale-90 transition duration-200'
          }>
          I`m fixable
        </button>
      </div>
    </div>
  );
};

export default Banner;
