import { FiTwitter, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="site-footer">
      <small>&copy; Cimdata {new Date().getFullYear()}</small>
      <nav className="social-nav" aria-label="Social Media">
        <a href="https://twitter.com" aria-label="Twitter">
          <FiTwitter />
        </a>
        <a href="https://facebook.com" aria-label="Facebook">
          <FiFacebook />
        </a>
      </nav>
    </footer>
  );
}
