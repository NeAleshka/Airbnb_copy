import Head from 'next/head';
import {IExploreData, ILiveAnywhereCards} from '@/interfaces/exploreData';
import {
  SmallCard,
  MediumCard,
  Header,
  Banner,
  LargeCard,
  Footer,
} from '@/components';

interface IHomeProps {
  exploreData: IExploreData;
  liveAnywhereCards: ILiveAnywhereCards[];
}

export default function Home({exploreData, liveAnywhereCards}: IHomeProps) {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className={'max-w-7xl mx-auto px-4'}>
        <section className={'pt-[30px]'}>
          <h2 className={'text-4xl font-semibold pb-5'}> Explore Nearby</h2>
        </section>
        <div className={'flex flex-wrap justify-between'}>
          {exploreData?.items.map(({img, location, distance}, index) => {
            return (
              <SmallCard
                key={`${img}_${index}`}
                distance={distance}
                img={img}
                location={location}
              />
            );
          })}
        </div>
        <section className={'text-4xl font-semibold py-8'}>
          <div className={'pb-3'}> Live Anywhere</div>
          <div
            className={
              'flex overflow-scroll space-x-3 overflow-y-hidden scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-thumb-gray-300 p-3 -m-3'
            }>
            {liveAnywhereCards?.map(({img, title}, index) => (
              <MediumCard key={`${img}_${index}`} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img={
            'https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
          }
          title={'The Greatest Outdoor'}
          buttonText={'Get Inspired'}
          description={'Wishlists curated by Airbnb'}
        />
      </main>
      <footer className={'bg-gray-300 '}>
        <Footer />
      </footer>
    </>
  );
}

export const getStaticProps = async () => {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    res => res.json(),
  );

  const liveAnywhereCards = await fetch(
    'https://www.jsonkeeper.com/b/VHHT',
  ).then(res => res.json());

  return {
    props: {
      exploreData: {items: exploreData},
      liveAnywhereCards,
    },
  };
};
