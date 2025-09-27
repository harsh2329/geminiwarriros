import React from 'react';
import { Code, Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'About', href: '#about' },
      { name: 'Events', href: '#events' },
      { name: 'Partners', href: '#partners' },
      { name: 'Contact', href: '#contact' }
    ],
    'Resources': [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Community Guidelines', href: '#' },
      { name: 'Code of Conduct', href: '#' }
    ],
    'Community': [
      { name: 'Discord', href: '#' },
      { name: 'Slack', href: '#' },
      { name: 'Reddit', href: '#' },
      { name: 'Stack Overflow', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="relative bg-black/50 border-t border-green-400/30 mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,255,65,0.1),transparent)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center rotate-3d">
                <Code className="w-7 h-7 text-black" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
                  OSWeekend
                </div>
                <div className="text-sm text-gray-400">Open Source Weekend</div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Empowering developers worldwide through open source collaboration, 
              innovation, and community building. Join us in shaping the future of technology.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-green-400/10 border border-green-400/30 rounded-lg flex items-center justify-center text-green-400 hover:bg-green-400/20 hover:border-green-400 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-green-400/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Stay Connected</h3>
              <p className="text-gray-300 text-sm">Get the latest updates on events and opportunities.</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-black/50 border border-green-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-black font-semibold rounded-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-green-400/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>© 2024 Open Source Weekend. All rights reserved.</span>
            </div>
            
            {/* Made with love by gemini warriors */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-300">Made with</span>
              <Heart className="w-4 h-4 text-red-400 pulse-animation" />
              <span className="text-gray-300">by</span>
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-semibold">
                Gemini Warriors
              </span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 text-black rounded-full flex items-center justify-center hover:from-green-400 hover:to-green-500 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl glow-animation"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;