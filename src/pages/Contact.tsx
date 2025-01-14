import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Navigate to thank you page
    navigate('/thank-you');
  };

  return (
    <div className="py-24">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute transform rotate-12 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] h-96 w-full opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to transform your business with AI? Get in touch with us today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="group relative bg-[#F8F4ED] rounded-lg border-[3px] border-[#FF6F00] transition-all duration-300 overflow-hidden">
              {/* Motocompo-inspired diagonal stripes */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 -rotate-45 transform origin-top-right opacity-10"
                style={{ 
                  background: 'repeating-linear-gradient(45deg, #FF6F00, #FF6F00 2px, transparent 2px, transparent 8px)'
                }}
              ></div>

              {/* Scanline texture */}
              <div className="absolute inset-0 opacity-5">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div 
                    key={i}
                    className="h-px w-full"
                    style={{ 
                      background: 'rgba(0,0,0,0.1)',
                      marginTop: `${i * 4}px`
                    }}
                  ></div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="relative p-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white/50 shadow-sm focus:border-[#FF6F00] focus:ring focus:ring-[#FF6F00] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white/50 shadow-sm focus:border-[#FF6F00] focus:ring focus:ring-[#FF6F00] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white/50 shadow-sm focus:border-[#FF6F00] focus:ring focus:ring-[#FF6F00] focus:ring-opacity-50"
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    boxShadow: '0 0 20px rgba(255,111,0,0.2)',
                    '--tw-ring-color': '#FF6F00'
                  }}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {[
                { icon: Mail, title: 'Email', content: 'ian@irbyaisolutions.com', color: '#FF6F00' },
                { icon: Phone, title: 'Phone', content: '832-797-0083', color: '#FF3B30' },
                { icon: MapPin, title: 'Location', content: 'The Woodlands, TX', color: '#8C1AFF' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group relative bg-[#F8F4ED] rounded-lg border-[3px] p-6 transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 overflow-hidden"
                  style={{ borderColor: item.color }}
                >
                  {/* Diagonal stripes */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 -rotate-45 transform origin-top-right opacity-10"
                    style={{ 
                      background: `repeating-linear-gradient(45deg, ${item.color}, ${item.color} 2px, transparent 2px, transparent 8px)`
                    }}
                  ></div>

                  {/* Scanlines */}
                  <div className="absolute inset-0 opacity-5">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div 
                        key={i}
                        className="h-px w-full"
                        style={{ 
                          background: 'rgba(0,0,0,0.1)',
                          marginTop: `${i * 4}px`
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="relative flex items-center space-x-4">
                    <item.icon 
                      className="w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: item.color }}
                    />
                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-gray-700">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}