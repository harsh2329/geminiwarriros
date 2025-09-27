import React from 'react';
import { ArrowRight, Play, Github, Users, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Contributors' },
    { icon: Github, value: '100+', label: 'Projects' },
    { icon: Calendar, value: '50+', label: 'Events' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-green-400/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-full text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full pulse-animation"></div>
                <span>Open Source Weekend 2024</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
                  Code.
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Collaborate.
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
                  Create.
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Join the ultimate open source hackathon where developers, designers, and innovators 
                come together to build the future. Experience 48 hours of coding, learning, and 
                creating amazing projects with the community.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-black font-semibold rounded-lg hover:from-green-400 hover:to-green-500 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 glow-animation">
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Intro</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-400/10 border border-green-400/30 rounded-lg mb-2 group-hover:bg-green-400/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right 3D Graphics */}
          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px]">
              {/* Main 3D Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 rotate-3d">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-3xl transform rotate-12 hover-lift"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-green-400/30 to-green-500/30 rounded-2xl transform -rotate-6 hover-lift delay-100"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-black to-gray-900 rounded-xl border border-green-400/50 flex items-center justify-center hover-lift delay-200">
                    <div className="text-6xl font-bold text-green-400 animate-pulse">{'<>'}</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-400/20 rounded-lg float-animation"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-green-600/20 rounded-full float-animation delay-1000"></div>
              <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/20 rounded transform rotate-45 float-animation delay-2000"></div>
              
              {/* Circuit Lines */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  <path d="M50 50 L350 50 L350 350 L50 350 Z" stroke="rgb(34, 197, 94)" strokeWidth="2" className="pulse-animation" />
                  <circle cx="200" cy="200" r="100" stroke="rgb(34, 197, 94)" strokeWidth="1" fill="none" className="pulse-animation delay-500" />
                  <path d="M100 100 L300 300 M300 100 L100 300" stroke="rgb(34, 197, 94)" strokeWidth="1" className="pulse-animation delay-1000" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;