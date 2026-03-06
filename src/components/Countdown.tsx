'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const weddingDate = new Date('2025-02-14T16:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('countdown-section');
    if (element) observer.observe(element);

    return () => {
      clearInterval(timer);
      if (element) observer.unobserve(element);
    };
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown-section"
      className="py-20 md:py-32 bg-gradient-to-b from-amber-50 via-rose-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23be185d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
            Counting Down to Forever
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every second brings us closer to the beginning of our beautiful journey together
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative group">
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-amber-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                
                {/* Card Content */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-rose-100 hover:border-rose-200 transition-all hover:-translate-y-1">
                  <div className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-amber-500 mb-2 tabular-nums">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-500 text-sm md:text-base uppercase tracking-wider">
                    {unit.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div
          className={`flex justify-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-rose-300 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-amber-300 animate-pulse delay-100" />
            <div className="w-2 h-2 rounded-full bg-rose-300 animate-pulse delay-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
