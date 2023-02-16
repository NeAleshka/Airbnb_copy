import React from 'react';
import {IExploreItem} from '@/interfaces';
import Image from 'next/image';

const SmallCard = ({img, location, distance}: IExploreItem) => {
  return (
    <div
      className={
        'flex mr-10 mb-[20px] rounded-2xl hover:scale-105 transform transition duration-300 ease-out hover:bg-gray-100'
      }>
      <Image className={'rounded-xl'} src={img} alt={location} height={100} width={100} />
      <div className={'flex flex-col justify-center w-[140px] max-w-[140px] px-[5px]'}>
        <div>{distance}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default SmallCard;
