import React from 'react';
import {Footer, Header} from '@/components';
import {useRouter} from 'next/router';
import {format} from 'date-fns';

type FilterButtonPropsType = {
  title: string;
};

const Search = () => {
  const {location, startDate, endDate, noOfGuests} = useRouter().query;

  const filterButtonTitles = [
    'Cancellation Flexibility',
    'Type of Place',
    'Price',
    'Rooms and Beds',
    'More filters',
  ];

  const rangeDate = `${format(
    new Date(`${startDate}`),
    'dd MMMM yy',
  )} - ${format(new Date(`${endDate}`), 'dd MMMM yy')}`;

  return (
    <>
      <Header />
      <div className={'text-sm'}>
        300+ stays-{rangeDate} - {noOfGuests} guests
      </div>
      <div className={'hidden lg:inline-flex my-3 space-x-3'}>
        {filterButtonTitles.map((title, index) => (
          <FilterButton key={`${title}_${index}`} title={title} />
        ))}
      </div>

      <div className={'text-xl font-semibold'}>Stays in {location}</div>
      <Footer />
    </>
  );
};

export default Search;

const FilterButton = ({title}: FilterButtonPropsType) => {
  return <div className={'button'}>{title}</div>;
};
