import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink, Star } from 'lucide-react';
import { toast } from 'react-toastify';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  participants: number;
  maxParticipants: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  prize: string;
  isRegistered: boolean;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: 'AI/ML Hackathon',
      date: '2024-03-15',
      time: '09:00 - 18:00',
      location: 'Tech Hub, Downtown',
      description: 'Build innovative AI and Machine Learning solutions that solve real-world problems. Work with cutting-edge technologies and compete for amazing prizes.',
      participants: 45,
      maxParticipants: 100,
      difficulty: 'Advanced',
      tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
      prize: '$5000',
      isRegistered: false
    },
    {
      id: 2,
      title: 'Web Development Sprint',
      date: '2024-03-22',
      time: '10:00 - 16:00',
      location: 'Innovation Center',
      description: 'Create stunning web applications using modern frameworks. Perfect for beginners and experienced developers looking to showcase their skills.',
      participants: 32,
      maxParticipants: 80,
      difficulty: 'Intermediate',
      tags: ['React', 'Next.js', 'JavaScript', 'CSS'],
      prize: '$2500',
      isRegistered: false
    },
    {
      id: 3,
      title: 'Open Source Contribution Workshop',
      date: '2024-03-29',
      time: '14:00 - 17:00',
      location: 'Community College',
      description: 'Learn how to contribute to open source projects, understand Git workflows, and make your first meaningful contribution to the community.',
      participants: 28,
      maxParticipants: 60,
      difficulty: 'Beginner',
      tags: ['Git', 'GitHub', 'Open Source', 'Collaboration'],
      prize: 'Certificates',
      isRegistered: false
    },
    {
      id: 4,
      title: 'Mobile App Development Challenge',
      date: '2024-04-05',
      time: '09:00 - 19:00',
      location: 'Startup Incubator',
      description: 'Build cross-platform mobile applications that make a difference. Focus on user experience, performance, and innovative features.',
      participants: 38,
      maxParticipants: 90,
      difficulty: 'Intermediate',
      tags: ['React Native', 'Flutter', 'Mobile', 'UX'],
      prize: '$3500',
      isRegistered: false
    }
  ]);

  const handleRegister = (eventId: number) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, isRegistered: !event.isRegistered, participants: event.isRegistered ? event.participants - 1 : event.participants + 1 }
        : event
    ));
    
    const event = events.find(e => e.id === eventId);
    if (event?.isRegistered) {
      toast.success('Successfully unregistered from the event!');
    } else {
      toast.success('Successfully registered for the event!');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-400/10 text-green-400 border-green-400/30';
      case 'Intermediate': return 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30';
      case 'Advanced': return 'bg-red-400/10 text-red-400 border-red-400/30';
      default: return 'bg-gray-400/10 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <section id="events" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't miss out on these exciting opportunities to learn, build, and connect with the developer community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative card-flip h-80"
            >
              {/* Front of card */}
              <div className="card-front glass-effect p-8 border border-green-400/30 hover:border-green-400 transition-all duration-500">
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm border ${getDifficultyColor(event.difficulty)}`}>
                      {event.difficulty}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-300">{event.prize}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 flex-grow line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar className="w-4 h-4 text-green-400" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back of card */}
              <div className="card-back glass-effect p-8 border border-green-400/30 bg-gradient-to-br from-green-400/5 to-green-600/5">
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">{event.title}</h3>
                  
                  <div className="flex-grow space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Participants</span>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-green-400" />
                        <span className="text-white">{event.participants}/{event.maxParticipants}</span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-gray-300 text-sm">Technologies:</span>
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-green-400/10 text-green-400 border border-green-400/30 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <button
                      onClick={() => handleRegister(event.id)}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        event.isRegistered
                          ? 'bg-red-500/20 text-red-400 border-2 border-red-500/30 hover:bg-red-500/30'
                          : 'bg-gradient-to-r from-green-500 to-green-600 text-black hover:from-green-400 hover:to-green-500'
                      }`}
                    >
                      {event.isRegistered ? 'Unregister' : 'Register Now'}
                    </button>
                    
                    <button className="w-full py-3 border-2 border-green-400/30 text-green-400 rounded-lg hover:bg-green-400/10 transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-black font-semibold rounded-lg hover:from-green-400 hover:to-green-500 transform hover:scale-105 transition-all duration-300">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;