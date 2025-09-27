import React from 'react';
import { ExternalLink, Award, Zap, Globe, Code, Users, Briefcase, Star } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'TechCorp',
      type: 'Platinum',
      logo: Code,
      description: 'Leading technology company providing cloud solutions and developer tools.',
      website: 'https://techcorp.com',
      contribution: 'Main Sponsor'
    },
    {
      name: 'DevTools Inc',
      type: 'Gold',
      logo: Zap,
      description: 'Innovative development tools and platforms for modern developers.',
      website: 'https://devtools.com',
      contribution: 'Infrastructure Partner'
    },
    {
      name: 'Cloud Solutions',
      type: 'Gold',
      logo: Globe,
      description: 'Scalable cloud infrastructure and hosting solutions for startups.',
      website: 'https://cloudsolutions.com',
      contribution: 'Hosting Partner'
    },
    {
      name: 'StartupHub',
      type: 'Silver',
      logo: Briefcase,
      description: 'Connecting startups with resources, mentorship, and investment opportunities.',
      website: 'https://startuphub.com',
      contribution: 'Mentorship Partner'
    },
    {
      name: 'CodeAcademy',
      type: 'Silver',
      logo: Users,
      description: 'Online learning platform for programming and technology skills.',
      website: 'https://codeacademy.com',
      contribution: 'Education Partner'
    },
    {
      name: 'Innovation Labs',
      type: 'Bronze',
      logo: Award,
      description: 'Research and development lab focused on emerging technologies.',
      website: 'https://innovationlabs.com',
      contribution: 'Research Partner'
    }
  ];

  const getPartnerStyle = (type: string) => {
    switch (type) {
      case 'Platinum':
        return 'border-yellow-400/50 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10';
      case 'Gold':
        return 'border-amber-400/50 bg-gradient-to-br from-amber-400/10 to-amber-600/10';
      case 'Silver':
        return 'border-gray-400/50 bg-gradient-to-br from-gray-400/10 to-gray-600/10';
      case 'Bronze':
        return 'border-orange-400/50 bg-gradient-to-br from-orange-400/10 to-orange-600/10';
      default:
        return 'border-green-400/50 bg-gradient-to-br from-green-400/10 to-green-600/10';
    }
  };

  const getPartnerIcon = (type: string) => {
    switch (type) {
      case 'Platinum':
        return <Star className="w-4 h-4 text-yellow-400" />;
      case 'Gold':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'Silver':
        return <Award className="w-4 h-4 text-gray-400" />;
      case 'Bronze':
        return <Award className="w-4 h-4 text-orange-400" />;
      default:
        return <Star className="w-4 h-4 text-green-400" />;
    }
  };

  return (
    <section id="partners" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
              Our Partners
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're proud to work with industry leaders who share our vision of empowering 
            developers and fostering open source innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const Logo = partner.logo;
            return (
              <div
                key={index}
                className={`group relative p-8 glass-effect rounded-2xl border-2 transition-all duration-500 hover-lift ${getPartnerStyle(partner.type)}`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-green-400/20 -z-10"></div>
                
                <div className="relative z-10">
                  {/* Partner tier badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      {getPartnerIcon(partner.type)}
                      <span className="text-sm font-semibold text-gray-300">{partner.type} Partner</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                  </div>
                  
                  {/* Logo */}
                  <div className="flex items-center justify-center w-20 h-20 bg-white/5 border-2 border-white/10 rounded-2xl mb-6 group-hover:border-green-400/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Logo className="w-10 h-10 text-green-400" />
                  </div>
                  
                  {/* Partner name */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {partner.description}
                  </p>
                  
                  {/* Contribution */}
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-full">
                      <span className="text-sm text-green-400 font-medium">{partner.contribution}</span>
                    </div>
                    <button className="text-green-400 hover:text-green-300 transition-colors duration-300 font-medium">
                      Learn More →
                    </button>
                  </div>
                </div>

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-16 h-16 border border-green-400 rounded-full rotate-3d"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-400/20 rounded-lg float-animation"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center space-y-4 p-8 glass-effect rounded-2xl border border-green-400/30">
            <h3 className="text-2xl font-bold text-white">Become a Partner</h3>
            <p className="text-gray-300 max-w-md">
              Join our mission to empower developers and support the open source community.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-black font-semibold rounded-lg hover:from-green-400 hover:to-green-500 transform hover:scale-105 transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;