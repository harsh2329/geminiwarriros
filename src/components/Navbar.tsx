import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Users, Calendar, Mail, ChevronDown, Github, Twitter, ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['about', 'events', 'partners', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: Code },
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Partners', href: '#partners', icon: Users },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const communityLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Discord', href: '#', icon: ExternalLink },
  ];

  return (
    <>
      <style jsx>{`
        .glow-animation {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }
        .glow-animation:hover {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
        }
        .logo-3d {
          transform: perspective(1000px) rotateX(15deg) rotateY(15deg);
          transition: all 0.3s ease;
        }
        .logo-3d:hover {
          transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.1);
        }
        .nav-item-active {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05));
          border: 1px solid rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }
        .nav-item-active .nav-icon {
          color: #22c55e;
          transform: rotate(12deg) scale(1.1);
        }
        .dropdown-enter {
          opacity: 0;
          transform: translateY(-10px) scale(0.95);
          transition: all 0.2s ease;
        }
        .dropdown-enter-active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .mobile-menu-enter {
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-menu-enter-active {
          opacity: 1;
          transform: translateY(0);
        }
        .navbar-blur {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .gradient-text {
          background: linear-gradient(135deg, #22c55e, #16a34a, #ffffff);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .floating-dots::before {
          content: '';
          position: absolute;
          top: -2px;
          right: -2px;
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
      `}</style>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 navbar-blur border-b border-green-400/20 shadow-lg shadow-green-400/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 relative">
              <div className="logo-3d w-12 h-12 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-xl flex items-center justify-center relative floating-dots">
                <Code className="w-7 h-7 text-black drop-shadow-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
              </div>
              <div className="text-2xl font-bold gradient-text tracking-tight">
                OSWeekend
              </div>
              <div className="hidden sm:block text-xs text-green-400/70 font-medium px-2 py-1 bg-green-400/10 rounded-full border border-green-400/20">
                2025
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-gray-300 hover:text-green-400 transition-all duration-300 group relative ${
                      isActive ? 'nav-item-active' : 'hover:bg-green-400/5'
                    }`}
                  >
                    <Icon className={`w-4 h-4 nav-icon transition-all duration-300 ${
                      isActive ? '' : 'group-hover:rotate-12 group-hover:scale-110'
                    }`} />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full"></div>
                    )}
                  </a>
                );
              })}
              
              {/* Community Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-gray-300 hover:text-green-400 hover:bg-green-400/5 transition-all duration-300 group"
                >
                  <Users className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">Community</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-black/90 navbar-blur border border-green-400/20 rounded-xl shadow-lg shadow-green-400/10 dropdown-enter dropdown-enter-active">
                    <div className="p-2">
                      {communityLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-green-400 hover:bg-green-400/5 transition-all duration-300 group"
                          >
                            <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium">{link.name}</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 ml-auto transition-opacity duration-300" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-black font-semibold rounded-xl hover:from-green-400 hover:to-green-500 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 glow-animation shadow-lg relative overflow-hidden group">
                <span className="relative z-10">Join Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 text-gray-300 hover:text-green-400 hover:bg-green-400/10 rounded-xl transition-all duration-300 relative"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} />
                  <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} />
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 navbar-blur border-b border-green-400/20 shadow-2xl shadow-green-400/20 mobile-menu-enter mobile-menu-enter-active">
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.name.toLowerCase();
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'nav-item-active' 
                          : 'text-gray-300 hover:text-green-400 hover:bg-green-400/5'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium text-lg">{item.name}</span>
                    </a>
                  );
                })}
                
                {/* Mobile Community Links */}
                <div className="pt-4 border-t border-green-400/20">
                  <div className="text-sm text-green-400 font-semibold mb-3 px-4">Community</div>
                  {communityLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        className="flex items-center space-x-4 px-4 py-3 rounded-xl text-gray-300 hover:text-green-400 hover:bg-green-400/5 transition-all duration-300"
                        style={{ animationDelay: `${(navItems.length + index) * 50}ms` }}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
                
                <div className="pt-4">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-black font-semibold rounded-xl hover:from-green-400 hover:to-green-500 transform hover:scale-[0.98] transition-all duration-300 glow-animation">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
