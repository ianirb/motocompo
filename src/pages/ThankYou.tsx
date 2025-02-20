import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';

export function ThankYou() {
  return (
    <div className="py-24">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute transform rotate-12 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] h-96 w-full opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <CheckCircle className="w-24 h-24 text-[#FF6F00] animate-pulse" />
                <div className="absolute inset-0 blur-xl opacity-30 bg-[#FF6F00] rounded-full"></div>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">Thank You!</h1>
            <p className="text-xl text-gray-700 mb-8">
              We've received your message and will get back to you shortly. In the meantime, feel free to explore our services or learn more about our equity partnership program.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button 
                  variant="primary"
                  className="w-full sm:w-auto"
                  style={{
                    backgroundColor: '#FF6F00',
                    color: 'white'
                  }}
                >
                  Explore Services
                </Button>
              </Link>
              <Link to="/equity">
                <Button 
                  variant="secondary"
                  className="w-full sm:w-auto"
                  style={{
                    backgroundColor: '#8C1AFF',
                    color: 'white'
                  }}
                >
                  Learn About Equity
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}