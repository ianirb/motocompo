import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'relative btn-hover-effect px-6 py-3 font-bold rounded-lg transform hover:scale-105 transition-all duration-300';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#FF6F00] via-[#FF3B30] to-[#FF6F00] text-white hover:shadow-xl hover:shadow-[#FF6F00]/30',
    secondary: 'bg-white text-[#8C1AFF] hover:text-white border-2 border-[#8C1AFF] hover:bg-[#8C1AFF] hover:shadow-xl hover:shadow-[#8C1AFF]/30'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </button>
  );
}