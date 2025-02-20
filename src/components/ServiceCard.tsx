import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export function ServiceCard({ title, description, icon: Icon, color }: ServiceCardProps) {
  return (
    <div 
      className="group relative bg-[#F8F4ED] rounded-lg border-[3px] transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 overflow-hidden"
      style={{ borderColor: color }}
    >
      {/* Motocompo-inspired diagonal stripes */}
      <div 
        className="absolute top-0 right-0 w-24 h-24 -rotate-45 transform origin-top-right opacity-10"
        style={{ 
          background: `repeating-linear-gradient(45deg, ${color}, ${color} 2px, transparent 2px, transparent 8px)`
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
          <Icon 
            className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 relative z-10" 
            style={{ color }}
          />
          <div 
            className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{ backgroundColor: color }}
          ></div>
        </div>

        {/* Content */}
        <h3 
          className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
          style={{ 
            backgroundImage: `linear-gradient(to right, ${color}, ${color})` 
          }}
        >
          {title}
        </h3>
        
        <p className="text-gray-700 mb-6 text-sm flex-grow">{description}</p>
        
        {/* CTA Button */}
        <Link to="/contact" className="mt-auto">
          <Button 
            variant="primary"
            className="w-full text-sm py-2 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm bg-opacity-90"
            style={{
              backgroundColor: 'black',
              color: 'white',
              boxShadow: `0 0 20px ${color}20`,
              '--tw-ring-color': color
            } as React.CSSProperties}
          >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}