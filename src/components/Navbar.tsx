import { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated Logo */}
            <div className="relative w-8 h-8">
              <Cpu 
                className={`w-8 h-8 transition-all duration-500 ${isHovered ? 'rotate-180 scale-110 text-[#FF3B30]' : 'rotate-0 scale-100 text-black'}`}
                style={{ 
                  filter: `drop-shadow(0 0 8px ${isHovered ? '#FF3B30' : '#000000'}40)`
                }}
              />
              <div 
                className={`absolute inset-0 rounded-full transition-all duration-500 ${isHovered ? 'scale-150 opacity-20' : 'scale-100 opacity-0'}`}
                style={{ 
                  background: `radial-gradient(circle, ${isHovered ? '#FF3B30' : '#000000'} 0%, transparent 70%)`
                }}
              />
            </div>

            {/* Brand Text */}
            <div className="h-16 flex items-center">
              <div className="relative h-8 w-48 px-2 overflow-hidden">
                <span 
                  className={`absolute inset-0 flex items-center font-display font-bold text-2xl tracking-wider transition-transform duration-500 ${
                    isHovered ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                >
                  IRBY AI
                </span>
                <span 
                  className={`absolute inset-0 flex items-center font-display font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] transition-transform duration-500 ${
                    isHovered ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                  }`}
                >
                  SOLUTIONS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] transition-all duration-300 relative group"
              >
                {link.label}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-[#FF6F00] transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-3 py-2 text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] hover:bg-gray-50 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}