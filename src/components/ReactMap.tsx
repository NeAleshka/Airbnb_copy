import React from 'react';
import getCenter from 'geolib/es/getCenter';
import {SearchPageProps} from '@/interfaces';
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';

const ReactMap = ({searchResultItems}: SearchPageProps) => {
  const coordinates = searchResultItems.map(({long, lat}) => ({
    longitude: long,
    latitude: lat,
  }));

  const center = getCenter(coordinates);

  return (
    <YMaps query={{lang: 'en_US'}}>
      <Map
        defaultState={{
          center: center && [center.latitude - 0.12, center.longitude - 0.01],
          zoom: 12,
          controls: ['fullscreenControl'],
        }}
        modules={['control.FullscreenControl']}
        className={'w-full h-full'}>
        {searchResultItems.map(({long, lat, title, price}) => (
          <Placemark
            key={`${long}_${title}`}
            modules={['geoObject.addon.balloon']}
            defaultGeometry={[lat, long]}
            properties={{
              iconContent: price.split(' ')[0],
            }}
            options={{preset: 'islands#blueStretchyIcon'}}
          />
        ))}
      </Map>
    </YMaps>
  );
};

export default ReactMap;
