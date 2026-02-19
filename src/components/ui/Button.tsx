import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  textClassName?: string;
  icon?: React.ReactNode;
}

export function Button({
  onPress,
  title,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  textClassName = '',
  icon,
}: ButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-primary-dark';
      case 'secondary':
        return 'bg-surface-highlight border border-white/10';
      case 'outline':
        return 'bg-transparent border border-divider';
      case 'ghost':
        return 'bg-transparent';
      default:
        return 'bg-primary';
    }
  };

  const getTextVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'text-[#00390a] font-bold';
      case 'secondary':
        return 'text-white font-medium';
      case 'outline':
        return 'text-text-primary font-medium';
      case 'ghost':
        return 'text-primary font-medium';
      default:
        return 'text-[#00390a] font-bold';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 rounded-full';
      case 'md':
        return 'px-6 py-3.5 rounded-full'; // Matching Figma design
      case 'lg':
        return 'w-full py-4 rounded-full';
      default:
        return 'px-6 py-3.5 rounded-full';
    }
  };

  return (
    <StyledTouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      className={`flex-row items-center justify-center ${getVariantClasses()} ${getSizeClasses()} ${disabled ? 'opacity-50' : ''} ${className}`}
    >
      {icon && <StyledText className="mr-2">{icon}</StyledText>}
      <StyledText className={`text-base ${getTextVariantClasses()} ${textClassName}`}>
        {title}
      </StyledText>
    </StyledTouchableOpacity>
  );
}
