'use client';

import { useState, useEffect, FormEvent } from 'react';

export default function RSVP() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'yes',
    guests: '1',
    dietary: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('rsvp-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('RSVP Submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="rsvp-section"
      className="py-20 md:py-32 bg-gradient-to-b from-amber-50 via-rose-50 to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-20" />

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-rose-400 text-sm tracking-[0.3em] uppercase mb-4">Be Our Guest</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
            RSVP
          </h2>
          <p className="text-gray-600 text-lg">
            We would be honored to have you celebrate with us
          </p>
        </div>

        {/* RSVP Form */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-rose-100"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Attendance */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Will you attend? *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.attendance === 'yes'
                          ? 'border-rose-400 bg-rose-50 text-rose-600'
                          : 'border-gray-200 hover:border-rose-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        checked={formData.attendance === 'yes'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span>Joyfully Accept</span>
                    </label>
                    <label
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.attendance === 'no'
                          ? 'border-gray-400 bg-gray-50 text-gray-600'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value="no"
                        checked={formData.attendance === 'no'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span>Regretfully Decline</span>
                    </label>
                  </div>
                </div>

                {/* Number of Guests */}
                {formData.attendance === 'yes' && (
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all appearance-none bg-white"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Dietary Requirements */}
                {formData.attendance === 'yes' && (
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Dietary Requirements
                    </label>
                    <input
                      type="text"
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all"
                      placeholder="Any dietary restrictions or allergies?"
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Message for the Couple
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all resize-none"
                    placeholder="Share your wishes or a special message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-rose-400 to-amber-400 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send RSVP
                </button>
              </div>
            </form>
          ) : (
            /* Success Message */
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-rose-100 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your RSVP has been received. We can&apos;t wait to celebrate with you!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
