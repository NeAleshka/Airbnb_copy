export interface IExploreData {
  items: IExploreItem[];
}

export interface IExploreItem {
  img: string;
  location: string;
  distance: string;
}

export interface ILiveAnywhereCards {
  img: string;
  title: string;
}

export interface ILogoProps {
  headerWidth: number | undefined;
}
export interface IHeaderProps {
  placeholder?: string;
}

export interface ILargeCardProps {
  img: string;
  description: string;
  buttonText: string;
  title: string;
}

export interface IHomeProps {
  exploreData: IExploreData;
  liveAnywhereCards: ILiveAnywhereCards[];
}

export type childrenMainPropsType = Partial<IHomeProps>;

interface ISearchResultItem {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

export interface IPlaceCard extends Omit<ISearchResultItem, 'long' | 'lat'> {}

export interface SearchPageProps {
  searchResultItems: ISearchResultItem[];
}
