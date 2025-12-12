"use client";
import Link from 'next/link';
import { useCallback, useState } from 'react';

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
      className="bg-white shadow-lg border-b border-gray-200"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section - Left Corner */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-amber-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label="BlogApp Home"
            >
              BlogApp
            </Link>
          </div>

          {/* Desktop Navigation Links - Center */}
          <div
            className="hidden md:flex space-x-8 flex-1 justify-center"
            role="menubar"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-amber-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2"
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Authentication Buttons - Right Corner */}
          <div className="hidden md:flex items-center space-x-3">
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 ${link.variant === "primary"
                  ? "bg-amber-300 hover:bg-amber-300 text-white shadow-md hover:shadow-lg transform hover:scale-105"
                  : "text-gray-700 hover:text-amber-300 border border-gray-300 hover:border-amber-300 hover:bg-blue-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              onKeyDown={handleKeyDown}
              className="text-gray-700 hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 rounded transition-colors duration-200 p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
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
            className="md:hidden"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t border-gray-200">
              {/* Mobile Navigation Links */}
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 hover:amber-300 hover:bg-amber-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Authentication Section */}
              <div className="border-t border-gray-300 pt-4 mt-4 space-y-2">
                {authLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold text-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${link.variant === "primary"
                      ? "bg-amber-300 hover:bg-amber-400 text-white shadow-md"
                      : "text-gray-700 hover:text-white hover:bg-amber-400 border border-gray-300"
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