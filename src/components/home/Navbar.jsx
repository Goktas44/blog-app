"use client";
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

// Navigation links configuration
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/article", label: "Article" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Authentication links configuration
const authLinks = [
  { href: "/login", label: "Login", variant: "outline" },
  { href: "/register", label: "Sign Up", variant: "primary" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  // Optimized toggle function with useCallback
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Close menu handler
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle keyboard navigation for mobile menu
  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <nav
      className="bg-white shadow-lg border-b border-gray-200 transition-colors duration-300 sticky top-0 z-50"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-14 sm:h-16">
          {/* Sol: Logo */}
          <div className="flex-shrink-0 flex items-center z-10">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-amber-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
              aria-label="BlogApp Home"
            >
              BlogApp
            </Link>
          </div>

          {/* Orta: Navigation Links - Desktop & Tablet */}
          <div
            className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2"
            role="menubar"
          >
            <div className="flex space-x-6 xl:space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-amber-500 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 whitespace-nowrap"
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Sağ: Dark Mode Toggle & Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 z-10">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 hover:text-amber-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 xl:px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${link.variant === "primary"
                  ? "bg-amber-500 hover:bg-amber-600 text-white shadow-md hover:shadow-lg transform hover:scale-105"
                  : "text-gray-700 hover:text-amber-500 border border-gray-300 hover:border-amber-500 hover:bg-amber-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Tablet: Simplified Navigation (md breakpoint) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4 z-10">
            {/* Navigation Links - Compact */}
            <div className="flex space-x-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-amber-500 px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 hover:text-amber-500 hover:bg-gray-100 transition-all duration-200"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Auth Buttons - Compact */}
            <div className="flex space-x-2">
              {authLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${link.variant === "primary"
                    ? "bg-amber-500 hover:bg-amber-600 text-white shadow-md"
                    : "text-gray-700 hover:text-amber-500 border border-gray-300 hover:border-amber-500"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile: Dark Mode Toggle & Menu Button (< md) */}
          <div className="md:hidden flex items-center space-x-1 sm:space-x-2 z-10">
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1.5 sm:p-2 rounded-lg text-gray-700 hover:text-amber-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={toggleMenu}
              onKeyDown={handleKeyDown}
              className="text-gray-700 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded transition-colors duration-200 p-1.5 sm:p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t border-gray-200 z-40"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="px-3 sm:px-4 pt-2 pb-4 space-y-1">
              {/* Mobile Navigation Links */}
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 hover:text-amber-500 hover:bg-amber-50 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Authentication Section */}
              <div className="border-t border-gray-200 pt-4 mt-3 space-y-2">
                {authLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold text-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${link.variant === "primary"
                      ? "bg-amber-500 hover:bg-amber-600 text-white shadow-md"
                      : "text-gray-700 hover:text-white hover:bg-amber-500 border border-gray-300"
                      }`}
                    onClick={closeMenu}
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;