import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Database, Users, Bot, Zap, Brain, Phone, Calendar, Quote, BarChart, Clock } from 'lucide-react';
import { Button } from '../components/Button';

export function Services() {
  const services = [
    {
      id: 'lead-gen',
      header: 'Capture More Leads, Automatically.',
      description: 'Our AI-driven lead generation systems help businesses identify, capture, and organize potential clients.',
      icon: Users,
      color: '#FF6F00',
      features: [
        'Advanced targeting algorithms',
        'Seamless integration with your CRM',
        'Automated follow-ups'
      ],
      benefits: [
        'Increase sales pipeline',
        'Save time on closing'
      ],
      cta: 'Learn More'
    },
    {
      id: 'outreach',
      header: 'Reach More People, Effortlessly.',
      description: 'Scale your outreach campaigns with personalized, data-driven messages that land in the inbox at the perfect time.',
      icon: Bot,
      color: '#FF3B30',
      features: [
        'Email and SMS automation',
        'Smart personalization',
        'Campaign analytics'
      ],
      benefits: [
        'Higher response rates',
        'Reduced manual work'
      ],
      cta: 'Explore Outreach'
    },
    {
      id: 'scheduling',
      header: 'Simplify Your Scheduling.',
      description: 'AI-powered appointment setting systems streamline your bookings, ensuring your calendar is always optimized.',
      icon: Calendar,
      color: '#8C1AFF',
      features: [
        'Calendar automation',
        'Real-time syncing',
        'Smart reminders'
      ],
      benefits: [
        'Reduce no-shows',
        'Optimize scheduling'
      ],
      cta: 'Get Started'
    },
    {
      id: 'crm',
      header: 'Seamless CRM Integration.',
      description: 'Connect your CRM with our AI systems for seamless data flow and enhanced productivity.',
      icon: Database,
      color: '#FF6F00',
      features: [
        'Major CRM support',
        'Real-time updates',
        'Easy setup'
      ],
      benefits: [
        'Central management',
        'Better collaboration'
      ],
      cta: 'Integrate Now'
    },
    {
      id: 'calling',
      header: 'AI-Powered Cold Calling.',
      description: 'Our AI caller system conducts engaging conversations with prospects to qualify and transfer leads.',
      icon: Phone,
      color: '#FF3B30',
      features: [
        'Natural AI voice',
        'Smart transfers',
        'Call analytics'
      ],
      benefits: [
        'Save time',
        'Better conversion'
      ],
      cta: 'Learn More'
    },
    {
      id: 'chatbot',
      header: 'Always Available Support.',
      description: 'From answering FAQs to booking appointments, our chatbots work 24/7 to support your clients.',
      icon: MessageSquare,
      color: '#8C1AFF',
      features: [
        'Custom responses',
        'Multi-platform',
        'NLP powered'
      ],
      benefits: [
        'Better support',
        'Lower costs'
      ],
      cta: 'Build Chatbot'
    }
  ];

  const stats = [
    {
      value: '100+',
      label: 'Businesses Served',
      icon: Users,
      color: '#FF6F00'
    },
    {
      value: '40%',
      label: 'Average Lead Conversion',
      icon: BarChart,
      color: '#FF3B30'
    },
    {
      value: '24/7',
      label: 'Support Availability',
      icon: Clock,
      color: '#8C1AFF'
    }
  ];

  const testimonials = [
    {
      quote: "The AI-powered systems implemented by Irby AI Solutions revolutionized our member acquisition process. Our lead conversion rate increased by 45% in just two months!",
      name: "Hannah Ruth",
      role: "Founder of Dark Horse Weightlifting",
      metrics: [
        { label: 'Lead Conversion', value: '+45%' },
        { label: 'Time Saved', value: '20hrs/week' }
      ],
      color: '#FF6F00'
    },
    {
      quote: "Their AI chatbot and automated scheduling system have transformed how we handle customer inquiries. We've seen a dramatic improvement in customer satisfaction and efficiency.",
      name: "Matthew Alvarez",
      role: "Marketing Director, El Arroyo",
      metrics: [
        { label: 'Response Time', value: '-85%' },
        { label: 'Customer Satisfaction', value: '98%' }
      ],
      color: '#FF3B30'
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Innovative AI Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Empowering businesses with cutting-edge AI solutions for outreach, lead generation, and operational excellence.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="text-lg">
              Get Started with AI Today
            </Button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-[#F8F4ED] rounded-lg border-[3px] transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 overflow-hidden"
              style={{ borderColor: service.color }}
            >
              {/* Motocompo-inspired diagonal stripes */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 -rotate-45 transform origin-top-right opacity-10"
                style={{ 
                  background: `repeating-linear-gradient(45deg, ${service.color}, ${service.color} 2px, transparent 2px, transparent 8px)`
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

              <div className="relative p-6 h-full flex flex-col">
                {/* Icon with glow effect */}
                <div className="mb-4 relative">
                  <service.icon 
                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 relative z-10" 
                    style={{ color: service.color }}
                  />
                  <div 
                    className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: service.color }}
                  ></div>
                </div>

                {/* Content */}
                <h2 
                  className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, ${service.color}, ${service.color})` 
                  }}
                >
                  {service.header}
                </h2>
                
                <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
                
                <div className="space-y-4 mb-6 text-sm flex-grow">
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">Features:</h3>
                    <ul className="list-disc list-inside space-y-0.5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-gray-700">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">Benefits:</h3>
                    <ul className="list-disc list-inside space-y-0.5">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="text-gray-700">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Link to="/contact" className="mt-auto">
                  <Button 
                    variant="primary"
                    className="w-full text-sm py-2 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm bg-opacity-90"
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      boxShadow: `0 0 20px ${service.color}20`,
                      '--tw-ring-color': service.color
                    }}
                  >
                    {service.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how AI solutions are transforming businesses across industries.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-[#F8F4ED] rounded-lg border-[3px] p-6 transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 overflow-hidden"
                style={{ borderColor: stat.color }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 -rotate-45 transform origin-top-right opacity-10"
                  style={{ 
                    background: `repeating-linear-gradient(45deg, ${stat.color}, ${stat.color} 2px, transparent 2px, transparent 8px)`
                  }}
                ></div>
                <div className="relative flex items-center space-x-4">
                  <stat.icon 
                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: stat.color }}
                  />
                  <div>
                    <div className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-gray-700">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-[#F8F4ED] rounded-lg border-[3px] p-8 transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 overflow-hidden"
                style={{ borderColor: testimonial.color }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 -rotate-45 transform origin-top-right opacity-10"
                  style={{ 
                    background: `repeating-linear-gradient(45deg, ${testimonial.color}, ${testimonial.color} 2px, transparent 2px, transparent 8px)`
                  }}
                ></div>
                
                <Quote 
                  className="w-12 h-12 mb-4"
                  style={{ color: testimonial.color }}
                />
                
                <blockquote className="text-lg mb-6">{testimonial.quote}</blockquote>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {testimonial.metrics.map((metric, i) => (
                    <div key={i} className="bg-white/50 rounded-lg p-4">
                      <div className="text-2xl font-bold" style={{ color: testimonial.color }}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-700">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-gray-700">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}