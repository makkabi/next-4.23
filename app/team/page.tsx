import Link from 'next/link';

export const metadata = {
  title: 'Team',
};

export default function TeamPage() {
  return (
    <div>
      <h1>Team</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        quisquam, magni quas nesciunt voluptas delectus aliquam. Nihil, officia!
        Nostrum, adipisci?
      </p>
      <h2>Unsere Teammitglieder</h2>
      <nav>
        <ul>
          <li>
            <Link href="/team/lisa">Lisa</Link>
          </li>
          <li>
            <Link href="/team/luisa">Luisa</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
