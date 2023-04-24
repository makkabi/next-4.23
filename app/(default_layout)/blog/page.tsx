import { BlogPostRest } from '@/types/blog-types';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Die neuesten Meldungen',
};

const WP_REST_BASE = process.env.WP_REST_BASE;

export default async function BlogPage() {
  const response = await fetch(`${WP_REST_BASE}/posts`, {
    next: {
      /* Anzahl an Sekunden, die die Antwort im Cache bleiben soll.
      Achtung: Die erste Anfrage nach dieser Zeit erhält noch den
      gespeicherten Wert, gleichzeit wird dann ein neuen Wert
      geladen, der beim folgenden Aufruf verwendet wird. */
      revalidate: 10,
    },
  });

  const posts = (await response.json()) as BlogPostRest[];

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <BlogTeaser key={post.id} {...post} />
      ))}
    </div>
  );
}

function BlogTeaser({ title, excerpt, date, slug }: BlogPostRest) {
  return (
    <article>
      <h2>
        <Link href={`/blog/${slug}`}>{title.rendered}</Link>
      </h2>
      <time dateTime={new Date(date).toLocaleDateString()}>
        {new Date(date).toLocaleDateString('de')}
      </time>
      <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
    </article>
  );
}
