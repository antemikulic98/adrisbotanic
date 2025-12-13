import React from 'react';
import { cn } from '@/app/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-800 focus:ring-primary-500 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30',
    secondary:
      'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30',
    accent:
      'bg-accent text-white hover:bg-accent-dark focus:ring-accent shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30',
    outline:
      'border-2 border-neutral-300 text-neutral-700 hover:border-primary hover:text-primary hover:bg-primary/5 focus:ring-primary',
    ghost: 'text-primary hover:bg-primary-50 focus:ring-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
