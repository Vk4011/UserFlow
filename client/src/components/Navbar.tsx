import { Home, UserPlus, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive('/')}`}
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
            <Link
              to="/register"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive('/register')}`}
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Register
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive('/dashboard')}`}
            >
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}