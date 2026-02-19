import React from 'react';
import { View, ViewProps } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);

interface CardProps extends ViewProps {
  variant?: 'default' | 'highlight' | 'outline' | 'flat';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export function Card({ variant = 'default', padding = 'md', children, className = '', ...props }: CardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'default':
        return 'bg-surface';
      case 'highlight':
        return 'bg-surface-highlight border border-white/5';
      case 'outline':
        return 'bg-transparent border border-white/10';
      case 'flat':
        return 'bg-surface-container';
      default:
        return 'bg-surface';
    }
  };

  const getPaddingClasses = () => {
    switch (padding) {
      case 'none':
        return 'p-0';
      case 'sm':
        return 'p-3';
      case 'md':
        return 'p-5';
      case 'lg':
        return 'p-6';
      default:
        return 'p-5';
    }
  };

  return (
    <StyledView
      className={`rounded-2xl ${getVariantClasses()} ${getPaddingClasses()} ${className}`}
      {...props}
    >
      {children}
    </StyledView>
  );
}
