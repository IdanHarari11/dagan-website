import { useEffect, useState } from 'react';
import Head from 'next/head';

const AccessibilityIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load NagishLi script when component mounts
    const script = document.createElement('script');
    script.src = '/nagishli.js';
    script.async = true;
    document.body.appendChild(script);

    // Load NagishLi CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/nagishli.css';
    document.head.appendChild(link);

    // Create nagishli tag required by the script
    const nagishliTag = document.createElement('nagishli');
    nagishliTag.id = 'NagishLiTag';
    document.body.appendChild(nagishliTag);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
      document.head.removeChild(link);
      if (document.getElementById('NagishLiTag')) {
        document.body.removeChild(document.getElementById('NagishLiTag'));
      }
    };
  }, []);

  const toggleAccessibility = () => {
    // This will toggle the NagishLi menu if it exists
    const nagishLiBar = document.getElementById('NagishLiBar');
    if (nagishLiBar) {
      if (nagishLiBar.style.display === 'none' || nagishLiBar.style.display === '') {
        nagishLiBar.style.display = 'block';
      } else {
        nagishLiBar.style.display = 'none';
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        {/* Add any additional meta tags or styles needed for accessibility */}
        <meta name="accessibility-control" content="NagishLi" />
      </Head>
      <div 
        className="fixed z-50 bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all duration-300 accessibility-icon"
        onClick={toggleAccessibility}
        aria-label="פתח תפריט נגישות"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleAccessibility();
          }
        }}
      >
        <i className="fas fa-universal-access text-xl" aria-hidden="true"></i>
      </div>
    </>
  );
};

export default AccessibilityIcon; 