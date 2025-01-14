import React from 'react';
import { Bot, Brain, Zap, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';

export function Home() {
  const services = [
    {
      title: 'AI Outreach',
      description: 'Automated, intelligent outreach that connects with your target audience.',
      icon: Bot,
      color: '#FF6F00'
    },
    {
      title: 'Lead Generation',
      description: 'Smart algorithms that identify and capture high-quality leads.',
      icon: Zap,
      color: '#FF3B30'
    },
    {
      title: 'AI Strategy',
      description: 'Custom AI solutions tailored to your business objectives.',
      icon: Brain,
      color: '#8C1AFF'
    }
  ];

  const testimonials = [
    {
      name: 'Kha Tran',
      role: 'Founder of Volleyball University',
      quote: 'Irby AI Solutions transformed the way we connect with prospective athletes. The AI-powered outreach system doubled our enrollment inquiries in just three months! I couldn\'t be happier with the results.',
      color: '#FF6F00'
    },
    {
      name: 'Dr. Susan Mills',
      role: 'Owner of Lakeside Family Clinic',
      quote: 'The appointment scheduling system built by Irby AI Solutions has been a game changer for our practice.',
      color: '#FF3B30'
    },
    {
      name: 'Daniel Harper',
      role: 'Real Estate Wholesaler at Harper Properties',
      quote: 'As a real estate wholesaler, follow-up is everything. Irby AI\'s lead generation and CRM integrations have made tracking and nurturing leads effortless. This is the best investment I\'ve made for my business.',
      color: '#8C1AFF'
    },
    {
      name: 'Marren Miranti',
      role: 'Owner of DOW Global Enterprises',
      quote: 'Our global operations felt overwhelming until Irby AI Solutions streamlined our workflows with their custom AI tools. The systems they designed helped us save time, scale faster, and increase profits.',
      color: '#FF6F00'
    },
    {
      name: 'Rachel Moore',
      role: 'Co-Founder of GPS Gym LLC',
      quote: 'As a startup, we needed to scale efficiently without sacrificing quality. Irby AI Solutions delivered an outreach automation platform that felt like a full marketing team, helping us secure new clients quickly.',
      color: '#FF3B30'
    },
    {
      name: 'James Parker',
      role: 'CEO of SolarSync Energy',
      quote: 'Irby AI\'s cold-calling system is brilliant. It generated high-quality leads for our solar solutions and freed up our sales team to focus on closing deals. I highly recommend their expertise.',
      color: '#8C1AFF'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute transform -rotate-45 bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] h-96 w-full top-1/2 -translate-y-1/2 opacity-10"></div>
          <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-black"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Automate. Elevate. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF]">
                Dominate.
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Transform your business with next-generation AI solutions
            </p>
            <Link to="/contact">
              <Button>Start Your Journey</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Rest of the component remains unchanged */}
      {/* Services Section */}
      <div className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button variant="secondary" className="text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gradient-to-r from-[#FF6F00]/5 via-[#FF3B30]/5 to-[#8C1AFF]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Trusted by innovators and industry leaders across various fields, our AI solutions empower businesses to automate, elevate, and dominate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative bg-[#F8F4ED] rounded-lg border-[3px] transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 overflow-hidden"
                style={{ borderColor: testimonial.color }}
              >
                {/* Motocompo-inspired diagonal stripes */}
                <div 
                  className="absolute top-0 right-0 w-24 h-24 -rotate-45 transform origin-top-right opacity-10"
                  style={{ 
                    background: `repeating-linear-gradient(45deg, ${testimonial.color}, ${testimonial.color} 2px, transparent 2px, transparent 8px)`
                  }}
                ></div>

                {/* Scanline texture */}
                <div className="absolute inset-0 opacity-5">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div 
                      key={i}
                      className="h-px w-full"
                      style={{ 
                        background: `rgba(0,0,0,0.1)`,
                        marginTop: `${i * 4}px`
                      }}
                    ></div>
                  ))}
                </div>

                <div className="relative p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote 
                      className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: testimonial.color }}
                    />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="mb-6">
                    <p className="text-gray-700 text-sm leading-relaxed">{testimonial.quote}</p>
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <p 
                      className="font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                      style={{ 
                        backgroundImage: `linear-gradient(to right, ${testimonial.color}, ${testimonial.color})` 
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}