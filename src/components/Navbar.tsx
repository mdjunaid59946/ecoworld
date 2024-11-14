import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Home, Info, MessageSquare, LogIn, LogOut, AlertTriangle } from 'lucide-react';
import { useUserStore } from '../store/userStore';

export const Navbar = () => {
  const { user, logout } = useUserStore();

  return (
    <nav className="bg-emerald-600/90 text-white shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6" />
            <span className="font-bold text-xl">EcoMonitor</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center hover:text-emerald-200">
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center hover:text-emerald-200">
              <Info className="h-5 w-5 mr-1" />
              <span>About</span>
            </Link>
            <Link to="/information" className="flex items-center hover:text-emerald-200">
              <MessageSquare className="h-5 w-5 mr-1" />
              <span>Information</span>
            </Link>
            <Link to="/awareness" className="flex items-center hover:text-emerald-200">
              <AlertTriangle className="h-5 w-5 mr-1" />
              <span>Awareness</span>
            </Link>
            {user ? (
              <button
                onClick={logout}
                className="flex items-center hover:text-emerald-200"
              >
                <LogOut className="h-5 w-5 mr-1" />
                <span>Logout</span>
              </button>
            ) : (
              <Link to="/login" className="flex items-center hover:text-emerald-200">
                <LogIn className="h-5 w-5 mr-1" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};