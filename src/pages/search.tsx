import React from 'react';
import {Footer, Header} from '@/components';
import {useRouter} from 'next/router';
import {format} from 'date-fns';
import {IPlaceCard, SearchPageProps} from '@/interfaces';
import Image from 'next/image';
import {HeartIcon} from '@heroicons/react/24/outline';
import {StarIcon} from '@heroicons/react/24/solid';
import Head from 'next/head';

type FilterButtonPropsType = {
  title: string;
};

const Search = ({searchResultItems}: SearchPageProps) => {
  const {location, startDate, endDate, noOfGuests} = useRouter().query;

  console.log(searchResultItems);
  const filterButtonTitles = [
    'Cancellation Flexibility',
    'Type of Place',
    'Price',
    'Rooms and Beds',
    'More filters',
  ];

  const formattedStartData = startDate && format(new Date(startDate.toString()), 'dd MMMM yy');
  const formattedEndData = endDate && format(new Date(endDate.toString()), 'dd MMMM yy');
  const placeholder = `${location} | ${formattedStartData} | ${formattedEndData} | ${noOfGuests} guests`;

  return (
    <>
      <Head>
        <title>Airbnb</title>
      </Head>
      <Header placeholder={placeholder} />
      <div className={'px-4 py-5'}>
        <div className={'text-sm'}>
          300+ stays -{formattedStartData}-{formattedEndData} - {noOfGuests} guests
        </div>
        <div className={'text-xl font-semibold ml-2'}>Stays in {location}</div>
        <div className={'hidden lg:inline-flex my-3 space-x-3'}>
          {filterButtonTitles.map((title, index) => (
            <FilterButton key={`${title}_${index}`} title={title} />
          ))}
        </div>
      </div>
      <div className={'flex flex-col mb-3 md:pl-5 md:pr-14'}>
        {searchResultItems.map(({img, price, title, star, total, description, location}) => (
          <PlaceCard
            img={img}
            location={location}
            title={title}
            description={description}
            star={star}
            price={price}
            total={total}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Search;

const PlaceCard = ({img, price, title, star, total, description, location}: IPlaceCard) => {
  return (
    <div
      key={img + title}
      className={
        'flex w-full py-8 pl-5 cursor-pointer rounded-2xl border-b hover:shadow-2xl hover:opacity-80 transition' +
        ' duration-200 ease-out first:border-t'
      }>
      <div className={'relative mr-3 h-24 w-52 md: h-52 md:w-80 flex-shrink-0'}>
        <Image src={img} alt={title} fill priority className={'rounded-2xl'} />
      </div>
      <div className={'w-full flex flex-col justify-between pr-9'}>
        <div className={'flex justify-between'}>
          <div>
            <div>{location}</div>
            <div className={'text-xl font-semibold'}>{title}</div>
            <div>{description}</div>
          </div>
          <HeartIcon className={'w-[25px] h-[25px] mt-3 flex-shrink-0'} />
        </div>
        <div className={'flex justify-between items-end'}>
          <div className={'flex items-center'}>
            <StarIcon className={'w-[15px] h-[15px] mr-1 text-gray-400'} />
            <div>{star}</div>
          </div>
          <div className={'text-end'}>
            <div className={'font-semibold'}>{price}</div>
            <div className={'text-sm font-extralight'}>{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterButton = ({title}: FilterButtonPropsType) => {
  return <div className={'button'}>{title}</div>;
};

export const getServerSideProps = async () => {
  const searchResultItems = await fetch('https://www.jsonkeeper.com/b/5NPS').then(res =>
    res.json(),
  );
  return {
    props: {
      searchResultItems,
    },
  };
};
