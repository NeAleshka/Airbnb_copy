import React from 'react';
import Image from 'next/legacy/image';
import {ILargeCardProps} from '@/interfaces';

const LargeCard = ({img, title, description, buttonText}: ILargeCardProps) => {
  return (
    <section className={'relative py-16'}>
      <div className={'relative h-96  min-w-[300px]'}>
        <Image
          src={img}
          alt={title}
          layout={'fill'}
          objectFit={'cover'}
          className={'rounded-2xl'}
        />
        <div className={'absolute top-32 left-12 font-bold'}>
          <div className={'text-4xl  mb-3 w-64'}>{title}</div>
          <div className={'mb-7'}>{description}</div>
          <div
            className={
              'w-fit font-normal text-sm text-white bg-gray-900 py-2 px-4 rounded-[5px] cursor-pointer hover:scale-105 transform transition duration-300 ease-out'
            }>
            {buttonText}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeCard;
