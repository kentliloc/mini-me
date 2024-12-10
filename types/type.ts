type Center = {
  id: string;
  center_name: string;
  business_name: string;
  address: Address;
  geocodedCoordinates: GeocodedCoordinates;
  googlePlaceId:string;
  state: string;
  phone_number: string;
  hours: Hours;
  conditionsTreated: string[];
  reservationUrl: ReservationUrl;
  insuranceAccepted: string[];
  services: string[];
};

type Address = {
  line1: string;
  line2?: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type GeocodedCoordinates = {
  latitude: number;
  longitude: number;
} | null;

type Hours = {
  [day: string]: {
    openIntervals?: {
      start: string;
      end: string;
    }[];
    isClosed?: boolean;
  };
};

type ReservationUrl = {
  url: string;
  displayUrl?: string;
  preferDisplayUrl: boolean;
} | null;

type VisitACenterSectionProps = {
  region: string;
  state: string;
};

type CenterBodyProps = {
  centerData: Center
  apiKey: string | undefined
  centerImage: PrismicImage | null
}

type CenterDetailsSectionProps = {
  centerDetails: Center | null;
  coordinates: { latitude: number; longitude: number };
  googlePlaceId: string;
};

type BottomSectionProps = {
  image: string;
  title: string;
  message: string;
  alt: string;
  button?: string;
};

type ButtonProps = {
  name: string;
  variant?: string;
};

type FAQsSectionProps = {
  listOfInsurance: string[];
};

type HeroSectionProps = {
  message: string;
  image: string;
  variant?: string;
};


type MapComponentProps = {
  latitude: number;
  longitude: number;
  googlePlaceId: string;
  className?: string;
  apiKey: string | undefined;
}
type QuoteCarouselProps = {
  quotes: { quote: string; citation: string }[];
};

type StateViewProps = {
  name: string;
  id: string;
};

type PrismicImage = {
  id: string
  url: string
  filename: string
  size: number
  width: number
  height: number
  last_modified: number
  kind: string
  extension: string
  notes: string
  credits: string
  alt: string
  uploader_id: string
  created_at: number
  search_highlight: {
    notes: string[]
  }
  tags: PrismicImageTag[]
}
type PrismicImageTag = {
  id: string
  name: string
  last_modified: number
  created_at: number
  uploader_id: string
}

type AccordionListProps = {
  items1: string[];
  items2: string[];
};