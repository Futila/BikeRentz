export interface Bike {
  id: number;
  cover: string;
  images: string[];
  name: string;
  engine: string;
  description: string;
  price: number;
  features: BikeFeature[];
}

export interface BikeFeature {
  title: string;
  description: string;
}
