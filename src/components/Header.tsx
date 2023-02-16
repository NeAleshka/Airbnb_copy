import Image from 'next/image';
import {
  Bars3Icon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import {GlobeAltIcon} from '@heroicons/react/24/outline';
import useResizeObserver from 'use-resize-observer';
import {lgLogo, smLogo} from '../assets/images';
import {useState} from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {DateRangePicker} from 'react-date-range';
import {useRouter} from 'next/router';
import {IHeaderProps, ILogoProps} from '@/interfaces';

const Header = ({placeholder}: IHeaderProps) => {
  const {ref: headerRef, width: headerWidth} = useResizeObserver<HTMLDivElement>({
    box: 'border-box',
  });

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 grid grid-cols-3  shadow-md bg-white p-5 md:px-10`}>
      <Logo headerWidth={headerWidth} />
      <Search placeholder={placeholder} />
      <NavigationBar />
    </header>
  );
};

export default Header;

const Logo = ({headerWidth}: ILogoProps) => {
  const router = useRouter();
  const logo = () => {
    if (headerWidth && headerWidth >= 500)
      return (
        <Image
          src={lgLogo}
          alt={'airbnb'}
          width={102}
          height={32}
          priority
          className={'h-auto w-auto'}
        />
      );
    return (
      <Image
        src={smLogo}
        alt={'airbnb'}
        width={32}
        height={32}
        priority
        className={'h-auto w-auto'}
      />
    );
  };
  return (
    <div
      onClick={() => router.push('/')}
      className={'flex items-center cursor-pointer my-auto min-w-max'}>
      {logo()}
    </div>
  );
};

const Search = ({placeholder}: IHeaderProps) => {
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const handleSelectDate = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const searchClick = () => {
    router
      .push({
        pathname: '/search',
        query: {
          location: search,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          noOfGuests,
        },
      })
      .then();
  };

  const selectRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  return (
    <div className={'relative flex items-center justify-between md:border-2 rounded-xl'}>
      <input
        type={'text'}
        className={'outline-none bg-transparent px-2 flex-grow'}
        placeholder={placeholder || 'Start your search ...'}
        onChange={event => setSearch(event.currentTarget.value)}
        value={search}
      />
      <MagnifyingGlassCircleIcon
        className={
          'hidden mr-[5px] text-[#ff385c] cursor-pointer hover:text-amber-500 md:inline-flex h-[30px] w-[30px]'
        }
      />
      {search && (
        <div className={'flex flex-col col-span-3 mx-auto'}>
          <div className={'absolute -translate-x-1/2 left-1/2 top-14 bg-white'}>
            <DateRangePicker
              rangeColors={['#FD5B61']}
              ranges={[selectRange]}
              onChange={handleSelectDate}
            />
            <div className={'flex mx-4 items-center border-b mb-4'}>
              <div className={'flex-grow font-semibold text-2xl'}>Number of Guests</div>
              <UsersIcon className={'h-[20px] mr-[10px]'} />
              <input
                type={'number'}
                className={'w-14 outline-none text-red-500'}
                value={noOfGuests}
                min={1}
                onChange={event => setNoOfGuests(+event.currentTarget.value)}
              />
            </div>
            <div className={'flex items-center mb-3'}>
              <button onClick={() => setSearch('')} className={'w-1/2 text-red-400'}>
                Cancel
              </button>
              <button className={'w-1/2 text-gray-500'} onClick={searchClick}>
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const NavigationBar = () => {
  return (
    <nav className={'flex items-center justify-end space-x-4 cursor-pointer'}>
      <div className={'hidden md:inline'}>Become a host</div>
      <GlobeAltIcon className={'w-[20px] h-[20px]'} />
      <div
        className={
          'flex items-center border-1 p-[7px] rounded-full space-x-2 border-solid border-[1px] border-[#DDDDDD] hover:shadow-md'
        }>
        <Bars3Icon className={'h-[19px] w-[19px]'} />
        <UserCircleIcon className={'h-[20px] w-[20px] text-[#717171] md:h-[35px] w-[35px]'} />
      </div>
    </nav>
  );
};
