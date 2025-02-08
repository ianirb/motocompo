import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'btn-hover-effect px-6 py-3 font-bold rounded-lg transform hover:scale-105 transition-all duration-300';
  const variants = {
    primary: 'bg-[#FF6F00] text-black hover:bg-[#FF3B30] hover:shadow-lg hover:shadow-[#FF6F00]/20',
    secondary: 'bg-[#8C1AFF] text-white hover:bg-[#FF3B30] hover:shadow-lg hover:shadow-[#8C1AFF]/20'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}