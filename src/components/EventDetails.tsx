'use client';

import { useEffect, useState } from 'react';

interface Event {
  title: string;
  time: string;
  location: string;
  address: string;
  description: string;
  icon: React.ReactNode;
}

export default function EventDetails() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('event-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const events: Event[] = [
    {
      title: 'The Ceremony',
      time: '4:00 PM',
      location: 'The Grand Palace',
      address: 'Cairo, Egypt',
      description: 'Join us as we exchange our vows and begin our journey together.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'The Reception',
      time: '7:00 PM',
      location: 'Royal Gardens',
      address: 'Cairo, Egypt',
      description: 'Celebrate with us over dinner, dancing, and unforgettable memories.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
    },
    {
      title: 'The After Party',
      time: '10:00 PM',
      location: 'Starlight Lounge',
      address: 'Cairo, Egypt',
      description: 'Dance the night away and make memories that will last forever.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="event-section"
      className="py-20 md:py-32 bg-white relative"
    >
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-rose-400 text-sm tracking-[0.3em] uppercase mb-4">Save The Date</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
            Wedding Events
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300" />
            <span className="text-rose-400">♥</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300" />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group relative h-full">
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-amber-200 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 border border-rose-100 hover:border-rose-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {event.icon}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-serif text-2xl text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-3xl font-light text-rose-500 mb-4">
                      {event.time}
                    </p>
                    <div className="space-y-1 mb-4">
                      <p className="text-gray-800 font-medium">{event.location}</p>
                      <p className="text-gray-500 text-sm">{event.address}</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rose-200 rounded-tr-lg opacity-50" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-rose-200 rounded-bl-lg opacity-50" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Link */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-400 to-amber-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            View Location on Map
          </a>
        </div>
      </div>
    </section>
  );
}
