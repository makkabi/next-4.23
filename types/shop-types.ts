export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: ProductRating;
};

export type ProductRating = {
  rate: number;
  count: number;
};
