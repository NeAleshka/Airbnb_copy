import React from 'react';
import {IExploreItem} from '@/interfaces/exploreData';
import Image from 'next/image';

const SmallCard = ({img, location, distance}: IExploreItem) => {
  return (
    <div className={'flex mr-10 mb-[20px]'}>
      <Image
        className={'rounded-xl'}
        src={img}
        alt={location}
        height={100}
        width={100}
      />
      <div
        className={
          'flex flex-col justify-center w-[140px] max-w-[140px] px-[5px]'
        }>
        <div>{distance}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default SmallCard;
