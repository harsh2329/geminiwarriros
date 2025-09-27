import React from 'react';
import { Code, Users, Trophy, Zap, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Open Source Focus',
      description: 'All projects are open source, contributing to the global developer community and promoting collaborative innovation.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with like-minded developers, share knowledge, and build lasting relationships in the tech community.'
    },
    {
      icon: Trophy,
      title: 'Competitive Excellence',
      description: 'Showcase your skills in exciting challenges with amazing prizes and recognition from industry leaders.'
    },
    {
      icon: Zap,
      title: 'Fast-Paced Innovation',
      description: 'Experience rapid prototyping and development in our high-energy 48-hour hackathon environment.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Create solutions that make a difference, addressing real-world problems with technology and creativity.'
    },
    {
      icon: Heart,
      title: 'Inclusive Environment',
      description: 'We welcome developers of all skill levels and backgrounds to participate and learn together.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
              About Open Source Weekend
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Open Source Weekend is more than just a hackathon - it's a celebration of collaborative 
            development, innovation, and the power of open source technology to change the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 glass-effect rounded-2xl hover-lift transition-all duration-500 neon-border"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-green-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-400/10 border-2 border-green-400/30 rounded-xl mb-6 group-hover:border-green-400 transition-all duration-500 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-green-400 group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-green-400/10 to-green-600/10 border border-green-400/30 rounded-2xl">
            <div className="w-4 h-4 bg-green-400 rounded-full pulse-animation"></div>
            <span className="text-lg text-white">Join 500+ developers from around the world</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;