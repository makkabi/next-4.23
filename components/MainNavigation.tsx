'use client';
import { useToggle } from '@/lib/hooks/useToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const linkTargets = [
  {
    text: 'Start',
    url: '/',
  },
  {
    text: 'Team',
    url: '/team',
  },
  {
    text: 'Kontakt',
    url: '/kontakt',
  },
  {
    text: 'Shop',
    url: '/shop',
  },
  {
    text: 'Bilder',
    url: '/bilder',
  },
  {
    text: 'Blog',
    url: '/blog',
  },
];

function MainNavigation() {
  const pathName = usePathname();
  const [showMenu, toggleShowMenu, setShowMenu] = useToggle(false);
  useEffect(() => {
    setShowMenu(false);
  }, [pathName]);

  return (
    <>
      <nav className="main-navigation main-navigation--desktop">
        <ul className="main-navigation__list">{getMenuItems(pathName)}</ul>
      </nav>
      <nav className="main-navigation main-navigation--mobile">
        <button className="main-navigation__button" onClick={toggleShowMenu}>
          Menu
        </button>
        {showMenu && (
          <ul className="main-navigation__list main-navigation__list--mobile">
            {getMenuItems(pathName)}
          </ul>
        )}
      </nav>
    </>
  );
}
export default MainNavigation;

function getMenuItems(pathName: string) {
  return linkTargets.map(({ text, url }) => {
    const isCurrentPath = url === pathName;

    const cssClass = `main-navigation__link ${
      isCurrentPath ? 'main-navigation__link--current' : ''
    }`;
    return (
      <li key={url}>
        <Link href={url} className={cssClass}>
          {text}
        </Link>
      </li>
    );
  });
}
