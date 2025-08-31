"use client";
import { useState } from 'react';

// Hero section configuration
const heroContent = {
  title: "Welcome to DevBlog",
  subtitle: "Discover the latest insights in web development, programming tutorials, and technology trends. Join our community of developers and level up your skills.",
  buttons: [
    { 
      label: "Start Reading", 
      variant: "primary",
      href: "/blogs"
    },
    { 
      label: "Subscribe Newsletter", 
      variant: "outline",
      action: "newsletter"
    }
  ]
};

const HeroSection = () => {
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Handle newsletter subscription
  const handleNewsletterClick = () => {
    setIsSubscribing(true);
    // TODO: Implement newsletter subscription logic
    setTimeout(() => {
      setIsSubscribing(false);
      alert('Newsletter subscription coming soon!');
    }, 1000);
  };

  // Handle button clicks
  const handleButtonClick = (button) => {
    if (button.action === 'newsletter') {
      handleNewsletterClick();
    } else if (button.href) {
      window.location.href = button.href;
    }
  };

  return (
    <section 
      className="bg-gradient-to-br from-amber-50 to-orange-100 py-20"
      aria-labelledby="hero-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Hero Title */}
        <h1 
          id="hero-title"
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          {heroContent.title}
        </h1>
        
        {/* Hero Subtitle */}
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {heroContent.subtitle}
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          {heroContent.buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(button)}
              disabled={button.action === 'newsletter' && isSubscribing}
              className={`px-8 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                button.variant === 'primary'
                  ? 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900 disabled:opacity-50'
                  : 'border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-900 disabled:opacity-50'
              }`}
              aria-label={button.label}
            >
              {button.action === 'newsletter' && isSubscribing ? (
                <span className="flex items-center gap-2">
                  <svg 
                    className="animate-spin h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Subscribing...
                </span>
              ) : (
                button.label
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;