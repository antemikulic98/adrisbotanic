import React from 'react';
import { cn } from '@/app/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'new' | 'popular' | 'sale' | 'default';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  const variants = {
    new: 'bg-info text-white',
    popular: 'bg-accent text-white',
    sale: 'bg-error text-white',
    default: 'bg-neutral-200 text-neutral-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
