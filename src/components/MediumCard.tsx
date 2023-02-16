import React from 'react';
import {ILiveAnywhereCards} from '@/interfaces';
import Image from 'next/image';

const MediumCard = ({img, title}: ILiveAnywhereCards) => {
  return (
    <div className={'cursor-pointer hover:scale-105 transform transition duration-300 ease-out'}>
      <div className={'relative h-80 w-80'}>
        <Image
          src={img}
          alt={title}
          fill
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          priority
          className={'rounded-2xl'}
        />
      </div>
      <h3 className={'text-2xl mt-3 mb-5'}>{title}</h3>
    </div>
  );
};

export default MediumCard;
