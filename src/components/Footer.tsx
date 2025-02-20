import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, Check } from 'lucide-react';
import { Button } from './Button';
import { supabase } from '../lib/supabase';

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Reset states
    setError(null);
    setIsAnimating(true);

    try {
      // Validate email format
      if (!isValidEmail(email)) {
        throw new Error('Invalid email format');
      }

      // Insert subscriber
      const { error: insertError } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            email,
            subscription_source: 'website',
            status: 'active'
          }
        ]);

      if (insertError) {
        // Check if error is due to duplicate email
        if (insertError.code === '23505') {
          throw new Error('This email is already subscribed');
        }
        throw new Error('Failed to subscribe. Please try again later.');
      }

      // Success
      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <footer className="relative bg-[#F8F4ED] mt-auto">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links section */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#FF6F00]">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-700 hover:text-[#FF6F00] transition-colors duration-300 hover:underline decoration-[#FF6F00]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services section */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#FF3B30]">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Lead Generation Systems',
                'AI-Powered Outreach',
                'Appointment Scheduling',
                'CRM Integrations',
                'AI-Powered Cold Calling',
                'Custom Chatbots'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-700 hover:text-[#FF3B30] transition-colors duration-300 hover:underline decoration-[#FF3B30]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info section */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#FF6F00]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#FF6F00]" />
                <span className="text-gray-700">ian@irbyaisolutions.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#FF3B30]" />
                <span className="text-gray-700">832-797-0083</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#8C1AFF]" />
                <span className="text-gray-700">The Woodlands, TX</span>
              </li>
            </ul>
          </div>

          {/* Newsletter section */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-[#FF3B30]">Stay Updated</h3>
            <div className="relative">
              {!isSubscribed && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Join our newsletter for AI insights
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3B30] focus:border-transparent ${
                        error ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {error && (
                      <p className="mt-2 text-sm text-red-600">{error}</p>
                    )}
                  </div>
                  <Button 
                    type="submit"
                    className={`w-full relative overflow-hidden transition-all duration-300 ${
                      isAnimating ? 'bg-[#FF3B30]' : ''
                    }`}
                    style={{
                      backgroundColor: isAnimating ? '#FF3B30' : 'black',
                      color: 'white',
                      boxShadow: '0 0 20px rgba(255,59,48,0.2)',
                      '--tw-ring-color': '#FF3B30'
                    } as React.CSSProperties}
                    disabled={isAnimating || !email}
                  >
                    {isAnimating ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                    ) : (
                      'Subscribe'
                    )}
                  </Button>
                </form>
              )}

              {/* Success Message */}
              {isSubscribed && (
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-500">
                  <div className="flex items-center space-x-2">
                    <Check className="w-6 h-6 text-green-500" />
                    <p className="text-green-700 font-medium">Thanks for subscribing!</p>
                  </div>
                  <p className="text-green-600 text-sm mt-2">
                    You'll receive our latest AI insights directly in your inbox.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Irby AI Solutions. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        <ArrowUp className="w-6 h-6 group-hover:text-[#FF6F00] transition-colors duration-300" />
      </button>

      {/* Motocompo Stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] m-0 p-0"></div>
    </footer>
  );
}