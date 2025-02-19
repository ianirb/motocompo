import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Quote, Star, ArrowRight, Users, Clock, Zap, MessageSquare, Target } from 'lucide-react';
import { Button } from './Button';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  metrics: {
    label: string;
    value: string;
    change: string;
    icon: React.ElementType;
  }[];
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marren Miranti",
    role: "External Relations Director",
    company: "Think Private Lending",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200",
    quote: "Irby AI provided an AI-driven outreach system that transformed how we nurture investor relationships at Think Private Lending. Now, our follow-ups are immediate, personalized, and highly effective—ensuring that no potential deal falls through the cracks.",
    metrics: [
      { label: "Investor Response Rate", value: "+32%", change: "Increase", icon: Users },
      { label: "Reply Rate", value: "+4.4%", change: "Improvement", icon: MessageSquare }
    ],
    color: "#FF6F00"
  },
  {
    name: "Matthew Alvarez",
    role: "Marketing Director",
    company: "El Arroyo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
    quote: "We implemented their AI-powered email and SMS follow-up system, and the results were immediate—higher open rates, more repeat customers, and a streamlined process that saves us hours every week.",
    metrics: [
      { label: "Open Rate", value: "+27%", change: "SMS & Email", icon: MessageSquare },
      { label: "Repeat Customers", value: "+19%", change: "Increase", icon: Users }
    ],
    color: "#FF3B30"
  },
  {
    name: "Hannah Hensley",
    role: "Owner and Founder",
    company: "Dark Horse Weightlifting Club",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200",
    quote: "Ian understands the balance between automation and human touch, and I couldn't be happier with the results.",
    metrics: [
      { label: "Member Sign Ups", value: "+42%", change: "Increase", icon: Users },
      { label: "Scheduling Time", value: "-65%", change: "Reduction", icon: Clock }
    ],
    color: "#8C1AFF"
  },
  {
    name: "Steven King",
    role: "Chief Technology Officer",
    company: "Lumio HX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    quote: "With automated outreach and intelligent follow-up sequences, we've seen higher engagement and conversion rates without adding to our workload. Their expertise in AI automation is top-tier.",
    metrics: [
      { label: "Lead Conversion", value: "+55%", change: "Increase", icon: Target },
      { label: "Operational Load", value: "-38%", change: "Reduction", icon: Zap }
    ],
    color: "#FF6F00"
  },
  {
    name: "Kha Tran",
    role: "Founder",
    company: "VBU",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200",
    quote: "What impressed me most was the seamless integration with our existing tools, making the transition smooth and efficient. If you want to scale without sacrificing quality, Irby AI Solutions is the way to go!",
    metrics: [
      { label: "Lead Conversions", value: "3x", change: "Increase", icon: Target },
      { label: "Customer Support", value: "-50%", change: "Time Reduction", icon: Clock }
    ],
    color: "#FF3B30"
  }
];

export function TestimonialSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = 400 + 24; // card width + gap
    const totalWidth = testimonials.length * cardWidth;
    let currentTranslate = 0;

    const animate = () => {
      if (!isPaused.current) {
        currentTranslate -= 0.5;

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
            Real Results from Real Businesses
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
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current"
                          style={{ color: testimonial.color }}
                        />
                      ))}
                    </div>

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
                    <div className="grid grid-cols-2 gap-2">
                      {testimonial.metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                          <div 
                            key={idx}
                            className="bg-white/40 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 hover:bg-white/60"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <div className="text-xs text-gray-600">{metric.label}</div>
                              <Icon 
                                className="w-4 h-4"
                                style={{ color: testimonial.color }}
                              />
                            </div>
                            <div className="text-sm font-bold">{metric.value}</div>
                            <div className="text-xs text-gray-600">{metric.change}</div>
                          </div>
                        );
                      })}
                    </div>
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
                <Link to="/contact" className="w-full">
                  <Button 
                    variant="primary"
                    className="w-full h-[60px] group relative overflow-hidden"
                  >
                    <span className="flex items-center justify-center gap-2 px-6">
                      <span className="whitespace-nowrap">Supercharge Your Business with AI</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </span>
                  </Button>
                </Link>
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