import MainNavigation from './MainNavigation';
import { TbAtom } from 'react-icons/tb';
export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__title">
        <TbAtom />
        Next
      </div>
      <MainNavigation />
    </header>
  );
}
