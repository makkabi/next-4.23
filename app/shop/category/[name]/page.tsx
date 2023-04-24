import type { Metadata } from 'next';
import ProductTeaser from '@/components/ProductTeaser';
import type { Product } from '@/types/shop-types';

type Props = {
  params: {
    name: string;
  };
};

export async function generateMetadata({
  params: { name },
}: Props): Promise<Metadata> {
  return {
    title: decodeURI(name.toUpperCase()),
  };
}

export default async function CategoryPage({ params: { name } }: Props) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${name}`
  );

  const products = (await response.json()) as Product[];

  return (
    <div>
      <h1 className="capitalize">{decodeURI(name)}</h1>
      <div className="product-teasers">
        {products.map((product) => (
          <ProductTeaser key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
