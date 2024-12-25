import { Home, UserPlus, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-indigo-700 shadow-lg' : 'hover:bg-indigo-600';
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive('/')}`}
            >
              <Home className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/register"
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive('/register')}`}
            >
              <UserPlus className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Register</span>
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive('/dashboard')}`}
            >
              <LayoutDashboard className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
