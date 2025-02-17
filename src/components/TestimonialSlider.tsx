import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  logo?: string;
  image: string;
  quote: string;
  rating?: number;
  metrics?: {
    label: string;
    value: string;
    change: string;
  }[];
  industry?: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=50",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200",
    quote: "The AI automation system revolutionized our customer service. Response times dropped by 80% while satisfaction scores soared to 98%.",
    rating: 5,
    metrics: [
      { label: "Customer Response Time", value: "2 min", change: "-80%" },
      { label: "Satisfaction Score", value: "98%", change: "+15%" }
    ],
    industry: "SaaS",
    color: "#FF6F00"
  },
  {
    name: "Marcus Rodriguez",
    role: "Operations Director",
    company: "Global Logistics Co",
    logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=200&h=50",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
    quote: "Implementing AI for route optimization and demand forecasting increased our delivery efficiency by 40% and reduced fuel costs significantly.",
    rating: 5,
    metrics: [
      { label: "Delivery Efficiency", value: "40%", change: "+40%" },
      { label: "Fuel Costs", value: "$12K/mo", change: "-25%" }
    ],
    industry: "Logistics",
    color: "#FF3B30"
  },
  {
    name: "Emily Watson",
    role: "Marketing Manager",
    company: "Retail Innovations",
    logo: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&w=200&h=50",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200",
    quote: "The AI-driven personalization engine transformed our e-commerce platform. Our conversion rate doubled within three months.",
    rating: 5,
    metrics: [
      { label: "Conversion Rate", value: "8.5%", change: "+100%" },
      { label: "Avg Order Value", value: "$95", change: "+35%" }
    ],
    industry: "E-commerce",
    color: "#8C1AFF"
  }
];

export function TestimonialSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Calculate the width of a single testimonial card including gap
    const cardWidth = 400 + 24; // card width + gap
    const totalWidth = testimonials.length * cardWidth;
    let currentTranslate = 0;

    const animate = () => {
      if (!isPaused.current) {
        currentTranslate -= 0.5; // Adjust speed by changing this value

        // Reset position when we've scrolled one full set of testimonials
        if (Math.abs(currentTranslate) >= totalWidth) {
          currentTranslate = 0;
        }

        if (slider) {
          slider.style.transform = `translateX(${currentTranslate}px)`;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      isPaused.current = true;
    };

    const handleMouseLeave = () => {
      isPaused.current = false;
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative py-24 bg-gradient-to-b from-white/50 to-white/30 overflow-hidden">
      {/* Glassmorphism background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F00]/5 via-[#FF3B30]/5 to-[#8C1AFF]/5" />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Trusted by Businesses Ready to Scale with AI
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how businesses are transforming their operations with our AI solutions.
          </p>
        </div>

        {/* Testimonial Slider Container */}
        <div className="overflow-hidden mb-16">
          {/* Testimonial Track */}
          <div 
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-100 ease-linear will-change-transform"
            style={{ width: 'max-content' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-[400px] group"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full backdrop-blur-md bg-white/30 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 overflow-hidden shadow-lg hover:shadow-xl">
                  {/* Gradient border */}
                  <div className="absolute inset-0 p-[1px] bg-gradient-to-r from-[#FF6F00]/50 via-[#FF3B30]/50 to-[#8C1AFF]/50 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Inner content with glass effect */}
                  <div className="relative h-full bg-gradient-to-br from-white/60 to-white/30 p-6 rounded-2xl">
                    {/* Company Logo */}
                    {testimonial.logo && (
                      <div className="absolute top-6 right-6 w-20 h-10">
                        <img
                          src={testimonial.logo}
                          alt={testimonial.company}
                          className="w-full h-full object-contain opacity-70"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Rating */}
                    {testimonial.rating && (
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-current"
                            style={{ color: testimonial.color }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Quote */}
                    <Quote 
                      className="w-8 h-8 mb-4 opacity-80"
                      style={{ color: testimonial.color }}
                    />
                    
                    <blockquote className="text-sm mb-6 line-clamp-4 text-gray-700">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Profile */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F00] via-[#FF3B30] to-[#8C1AFF] rounded-full blur-md opacity-50" />
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-12 h-12 rounded-full object-cover ring-2 ring-white"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-sm">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                        <div className="text-gray-600 text-sm">{testimonial.company}</div>
                      </div>
                    </div>

                    {/* Metrics */}
                    {testimonial.metrics && (
                      <div className="grid grid-cols-2 gap-2">
                        {testimonial.metrics.map((metric, idx) => (
                          <div 
                            key={idx}
                            className="bg-white/40 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 hover:bg-white/60"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <div className="text-xs text-gray-600">{metric.label}</div>
                              <div 
                                className="text-xs font-medium"
                                style={{ color: testimonial.color }}
                              >
                                {metric.change}
                              </div>
                            </div>
                            <div className="text-sm font-bold">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section with Glassmorphism */}
        <div className="relative text-center space-y-6 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6F00]/5 via-[#FF3B30]/5 to-[#8C1AFF]/5 rounded-3xl blur-xl" />
          <div className="relative backdrop-blur-md bg-white/30 rounded-3xl p-8 border border-white/20">
            <div className="flex flex-col sm:flex-row gap-8 items-stretch">
              <div className="flex-1 flex flex-col items-center">
                <span className="text-gray-600 mb-2">Ready to Automate?</span>
                <a href="https://form.typeform.com/to/xhYsGnhQ" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    variant="primary"
                    className="w-full h-[60px] group relative overflow-hidden"
                  >
                    <span className="flex items-center justify-center gap-2 px-6">
                      <span className="whitespace-nowrap">Supercharge Your Business with AI</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </span>
                  </Button>
                </a>
              </div>

              <div className="flex-1 flex flex-col items-center">
                <span className="text-gray-600 mb-2">Not Sure Where to Start?</span>
                <a href="https://form.typeform.com/to/xhYsGnhQ" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    variant="secondary"
                    className="w-full h-[60px] group relative overflow-hidden"
                  >
                    <span className="flex items-center justify-center gap-2 px-6">
                      <span className="whitespace-nowrap">Get an AI Exploration Audit</span>
                      <span className="whitespace-nowrap text-sm">($99)</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}