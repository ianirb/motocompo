import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 font-bold transition-all duration-300 rounded-lg transform hover:scale-105 relative overflow-hidden';
  
  const variants = {
    primary: 'bg-[#FF6F00] text-black hover:bg-[#FF3B30] hover:shadow-lg hover:shadow-[#FF6F00]/20 after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 after:bg-gradient-to-r after:from-[#FF6F00]/20 after:via-[#FF3B30]/20 after:to-[#8C1AFF]/20',
    secondary: 'bg-[#8C1AFF] text-white hover:bg-[#FF3B30] hover:shadow-lg hover:shadow-[#8C1AFF]/20 after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 after:bg-gradient-to-r after:from-[#8C1AFF]/20 after:via-[#FF3B30]/20 after:to-[#FF6F00]/20'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}