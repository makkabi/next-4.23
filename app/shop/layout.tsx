import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};
export default async function layout({ children }: Props) {
  /* Hier die Namen aller Kategorien laden */
  const response = await fetch('https://fakestoreapi.com/products/categories');

  const categories = (await response.json()) as string[];

  return (
    <div className="sidebar-layout">
      <main className="sidebar-layout__main">{children}</main>
      <aside className="sidebar-layout__sidebar">
        <h2 id="product-categories">Kategorien</h2>
        <nav
          className="category-navigation"
          aria-labelledby="product-categories"
        >
          <ul className="capitalize">
            {/* Hier für jeden Kategorie-Namen einen Link (in li) erstellen, Link-Ziel
            soll sein /shop/category/name-der-kategorie */}
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/shop/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
