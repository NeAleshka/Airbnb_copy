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

type childrenMainPropsType = Partial<IHomeProps>;

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
      <Main exploreData={exploreData} liveAnywhereCards={liveAnywhereCards} />
      <Footer />
    </>
  );
}

const Main = ({exploreData, liveAnywhereCards}: IHomeProps) => {
  const largeImg =
    'https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440';
  return (
    <main className={'max-w-7xl mx-auto px-4'}>
      <Explore exploreData={exploreData} />
      <LiveAnywhere liveAnywhereCards={liveAnywhereCards} />
      <LargeCard
        img={largeImg}
        title={'The Greatest Outdoor'}
        buttonText={'Get Inspired'}
        description={'Wishlists curated by Airbnb'}
      />
    </main>
  );
};

const Explore = ({exploreData}: childrenMainPropsType) => {
  return (
    <>
      <div className={'pt-[30px]'}>
        <h2 className={'text-4xl font-semibold pb-5'}> Explore Nearby</h2>
      </div>
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
    </>
  );
};

const LiveAnywhere = ({liveAnywhereCards}: childrenMainPropsType) => {
  return (
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
  );
};

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
