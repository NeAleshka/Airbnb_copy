import Image from 'next/image';
import {
  MagnifyingGlassCircleIcon,
  Bars3Icon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import {GlobeAltIcon} from '@heroicons/react/24/outline';
import useResizeObserver from 'use-resize-observer';
import {lgLogo, smLogo} from '../assets/images';

const Header = () => {
  const {ref: headerRef, width: headerWidth} =
    useResizeObserver<HTMLDivElement>({
      box: 'border-box',
    });
  const logo = () => {
    if (headerWidth && headerWidth >= 500)
      return (
        <Image src={lgLogo} alt={'airbnb'} width={102} height={32} priority />
      );
    return (
      <Image src={smLogo} alt={'airbnb'} width={32} height={32} priority />
    );
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 grid grid-cols-mobile-3  shadow-md bg-white p-5 md:px-10`}>
      {/*logo*/}
      <div
        className={
          'relative flex items-center cursor-pointer my-auto min-w-max'
        }>
        {logo()}
      </div>
      {/*Search*/}
      <div
        className={'flex items-center justify-between md:border-2 rounded-xl '}>
        <input
          type={'text'}
          className={'outline-none bg-transparent px-2'}
          placeholder={'Start your search ...'}
        />
        <MagnifyingGlassCircleIcon
          className={
            'hidden mr-[5px] text-[#ff385c] cursor-pointer hover:text-amber-500 md:inline-flex h-[30px] w-[30px]'
          }
        />
      </div>
      <nav className={'flex items-center justify-end space-x-4 cursor-pointer'}>
        <div className={'hidden md:inline'}>Become a host</div>
        <GlobeAltIcon className={'w-[20px] h-[20px]'} />
        <div
          className={
            'flex items-center border-1 p-[7px] rounded-full space-x-2 border-solid border-[1px] border-[#DDDDDD] hover:shadow-md'
          }>
          <Bars3Icon className={'h-[19px] w-[19px]'} />
          <UserCircleIcon
            className={'h-[20px] w-[20px] text-[#717171] md:h-[35px] w-[35px]'}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
