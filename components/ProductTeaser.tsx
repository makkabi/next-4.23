import type { Product } from '@/types/shop-types';
import Link from 'next/link';

export default function ProductTeaser({ title, id, price, image }: Product) {
  return (
    <article className="product-teaser">
      <h2 className="product-teaser__title capitalize">
        <Link href={`/shop/${id}`}>{title}</Link>
      </h2>
      <strong>{price} €</strong>
    </article>
  );
}
