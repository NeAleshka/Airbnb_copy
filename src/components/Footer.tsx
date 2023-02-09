import React from 'react';

const Footer = () => {
  return (
    <div
      style={{margin: '0 auto'}}
      className={
        'grid max-w-[1500px] grid-cols-1 px-10 justify-items-start text-sm md:grid-cols-3 gap-y-10 md:justify-items-center py-14 md:px-40'
      }>
      <div>
        <div className={'font-bold md:mb-3'}>ABOUT</div>
        <div className={'space-y-1.5 cursor-pointer'}>
          <div>How Airbnb works</div>
          <div>Investors</div>
          <div>Newsroom</div>
          <div>Airbnb Plus</div>
          <div>Airbnb Luxe</div>
        </div>
      </div>
      <div>
        <div className={'font-bold md:mb-3'}>COMMUNITY</div>
        <div className={'space-y-1.5 cursor-pointer'}>
          <div>Accessibility</div>
          <div>This is not real site</div>
          <div>Its a pretty awesome</div>
          <div>Referrals accepted</div>
          <div>Papafam</div>
        </div>
      </div>
      <div>
        <div className={'font-bold md:mb-3'}>SUPPORT</div>
        <div className={'space-y-1.5 cursor-pointer'}>
          <div>Help Center</div>
          <div>Trust & Safety</div>
          <div>Ask a Question</div>
          <div>Easter Eggs</div>
          <div>Something else</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
