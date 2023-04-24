import ProductTeaser from '@/components/ProductTeaser';
import type { Product } from '@/types/shop-types';

export const metadata = {
  title: 'Shop',
};

export default async function ShopPage() {
  const response = await fetch('https://fakestoreapi.com/products');

  const products = (await response.json()) as Product[];

  return (
    <div>
      <h1>Shop</h1>
      <div className="product-teasers">
        {products.map((product) => (
          <ProductTeaser key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
