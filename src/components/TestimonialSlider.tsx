import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Users } from 'lucide-react';
import { Button } from './Button';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
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
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200",
    quote: "The AI automation system revolutionized our customer service. Response times dropped by 80% while satisfaction scores soared to 98%.",
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
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
    quote: "Implementing AI for route optimization and demand forecasting increased our delivery efficiency by 40% and reduced fuel costs significantly.",
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
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200",
    quote: "The AI-driven personalization engine transformed our e-commerce platform. Our conversion rate doubled within three months.",
    metrics: [
      { label: "Conversion Rate", value: "8.5%", change: "+100%" },
      { label: "Avg Order Value", value: "$95", change: "+35%" }
    ],
    industry: "E-commerce",
    color: "#8C1AFF"
  },
  {
    name: "David Park",
    role: "Head of Sales",
    company: "InsureTech Pro",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200",
    quote: "AI automation helped us process claims 5x faster while reducing errors by 90%. Our customers couldn't be happier.",
    metrics: [
      { label: "Claims Processing", value: "6 hrs", change: "-80%" },
      { label: "Error Rate", value: "0.5%", change: "-90%" }
    ],
    industry: "Insurance",
    color: "#FF6F00"
  },
  {
    name: "Lisa Martinez",
    role: "Founder",
    company: "HealthTech Solutions",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=200&h=200",
    quote: "The AI scheduling system eliminated double bookings and reduced no-shows by 75%. It's like having an extra staff member.",
    metrics: [
      { label: "No-show Rate", value: "5%", change: "-75%" },
      { label: "Staff Hours Saved", value: "30hrs/wk", change: "+25%" }
    ],
    industry: "Healthcare",
    color: "#FF3B30"
  },
  {
    name: "James Wilson",
    role: "CTO",
    company: "DataDrive Analytics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    quote: "Implementing AI for data analysis cut our reporting time by 90% while uncovering insights we would have missed.",
    metrics: [
      { label: "Analysis Time", value: "2 hrs", change: "-90%" },
      { label: "Revenue Impact", value: "$2.5M", change: "+45%" }
    ],
    industry: "Data Analytics",
    color: "#8C1AFF"
  }
];

// Double the testimonials array to create a seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

export function TestimonialSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 40000; // 40 seconds for one complete cycle
    const startPosition = 0;
    const endPosition = slider.scrollWidth / 2; // Half because we duplicated the items

    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;

      if (slider) {
        slider.scrollLeft = startPosition + (endPosition * progress);

        // Reset when we reach the halfway point
        if (slider.scrollLeft >= endPosition) {
          startTime = currentTime;
          slider.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="relative py-24 bg-white/50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle, #FF6F00 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Trusted by Businesses Ready to Scale with AI
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how businesses are transforming their operations with our AI solutions.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-hidden gap-6 mb-16 cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'smooth' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-[400px] group relative bg-[#F8F4ED] rounded-lg border-[3px] transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 overflow-hidden"
              style={{ borderColor: testimonial.color }}
            >
              {/* Decorative Elements */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 -rotate-45 transform origin-top-right opacity-10"
                style={{ 
                  background: `repeating-linear-gradient(45deg, ${testimonial.color}, ${testimonial.color} 2px, transparent 2px, transparent 8px)`
                }}
              />

              <div className="relative p-6">
                <Quote 
                  className="w-8 h-8 mb-4"
                  style={{ color: testimonial.color }}
                />
                
                <blockquote className="text-sm mb-4 line-clamp-4">
                  {testimonial.quote}
                </blockquote>

                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-sm">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {testimonial.metrics?.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="bg-white/50 rounded-lg p-2 flex-1"
                    >
                      <div className="flex items-center justify-between">
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
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Link to="/contact">
            <Button 
              className="group relative overflow-hidden text-lg px-8 py-4 mx-2"
              style={{
                backgroundColor: '#FF6F00',
                color: 'white',
              }}
            >
              <span className="flex items-center justify-center">
                Supercharge Your Business with AI
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-gray-600">Not Sure Where to Start?</span>
            <Link to="/services">
              <Button 
                className="group relative overflow-hidden bg-white hover:bg-[#8C1AFF] text-[#8C1AFF] hover:text-white border-2 border-[#8C1AFF] transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  Get an AI Exploration Audit
                  <span className="ml-2 text-sm">($99)</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}