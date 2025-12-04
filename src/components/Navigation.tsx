import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-sm z-50 border-b border-rose-200">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <ul className="flex justify-center gap-12 text-sm tracking-widest">
          <li>
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-dusty-rose' : 'text-dusty-rose/60 hover:text-dusty-rose'
              }`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              className={`transition-colors ${
                isActive('/media') ? 'text-dusty-rose' : 'text-dusty-rose/60 hover:text-dusty-rose'
              }`}
            >
              MEDIA
            </Link>
          </li>
          <li>
            <Link
              to="/imprint"
              className={`transition-colors ${
                isActive('/imprint') ? 'text-dusty-rose' : 'text-dusty-rose/60 hover:text-dusty-rose'
              }`}
            >
              IMPRINT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
