"use client";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Search,
  Bell,
  Settings,
  Star,
  User,
  LogOut,
} from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="https://placehold.co/150x40/003366/FFFFFF?text=Wealth+Elite"
                alt="Wealth Elite Logo"
                className="h-10"
              />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-gray-50 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm text-gray-900 dark:text-gray-100 transition-colors"
                placeholder="Search for a portfolio..."
              />
            </div>
          </div>

          {/* Right side icons & Logout */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-gray-700"
            >
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 block dark:hidden" />
            </button>

            <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 md:hidden">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-gray-700">
              <Star className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
            </button>
            <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-gray-700">
              <User className="h-5 w-5" />
            </button>

            <button className="ml-2 flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
              <LogOut className="h-5 w-5" />
              <span className="hidden md:inline">LOGOUT</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
