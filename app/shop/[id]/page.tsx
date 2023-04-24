import type { Metadata } from 'next';
import type { Product } from '@/types/shop-types';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string; // Alles aus der URL ist vom Typ String. id entspricht [id]
  };
};
export default async function page({ params }: Props) {
  const product = await getProductData(params.id);

  return (
    <article>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <strong>{product.price} €</strong>
    </article>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductData(params.id);

  return {
    title: product.title,
  };
}

/* Next "de-dupliziert" mehrfache Aufrufe des selben Fetch-Befehls,
d.h. fetch wird nur einmal aufgerufen und das Ergebnis wird danach
aus dem Cache zurückgegeben. */
async function getProductData(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    const product = (await response.json()) as Product;

    /* Leitet zur 404-Seite weiter. Funktioniert bei der fakestore.api nicht,
  bei einer "echten" API sollte in der Antwort die Information stecken,
  dass nichts gefunden wurde, oder response.status ist 404,
  was mann dann direkt nach der fetch-Zeile abfragen müsste. */
    if (!product) {
      notFound();
    }
    return product;
  } catch (error) {
    throw new Error('Fehler beim Laden des Produkts');
  }
}
