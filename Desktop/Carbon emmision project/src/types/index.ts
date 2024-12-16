export interface FootprintData {
  transportation: {
    car: number;
    transit: number;
    bike: number;
    plane: number;
  };
  energy: {
    electricity: number;
    gas: number;
  };
  diet: {
    meat: number;
    vegetarian: number;
    vegan: number;
  };
  waste: {
    recycling: number;
    nonRecyclable: number;
  };
  timestamp?: string;
}