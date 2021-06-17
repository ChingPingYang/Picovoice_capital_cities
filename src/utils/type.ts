export type Border = string;

export type Neighbor = {
  flag: string;
  name: string;
  capital: string;
};

export type CountryData = {
  flag: string;
  name: string;
  capital: string;
  borders: Array<Border>;
  neighbors?: Array<Neighbor>;
};
