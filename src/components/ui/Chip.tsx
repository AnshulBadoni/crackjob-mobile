import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledView = styled(View);
const StyledText = styled(Text);

interface ChipProps {
  label: string;
  variant?: 'filled' | 'outlined' | 'tonal';
  selected?: boolean;
  onPress?: () => void;
  icon?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

export function Chip({
  label,
  variant = 'tonal',
  selected = false,
  onPress,
  icon,
  className = '',
  textClassName = '',
}: ChipProps) {
  const getVariantClasses = () => {
    if (selected) {
      return 'bg-primary border-primary';
    }

    switch (variant) {
      case 'filled':
        return 'bg-surface-container border-surface-container';
      case 'outlined':
        return 'bg-transparent border border-white/20';
      case 'tonal':
        return 'bg-surface-container-high border border-white/5';
      default:
        return 'bg-surface-container border-transparent';
    }
  };

  const getTextVariantClasses = () => {
    if (selected) {
      return 'text-primary-dark font-bold';
    }
    return 'text-text-primary font-medium';
  };

  const commonClasses = `flex-row items-center justify-center px-4 py-2.5 rounded-full border ${getVariantClasses()} ${className}`;

  if (onPress) {
    return (
      <StyledTouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className={commonClasses}
      >
        {icon && <StyledView className="mr-2">{icon}</StyledView>}
        <StyledText className={`text-sm ${getTextVariantClasses()} ${textClassName}`}>
          {label}
        </StyledText>
      </StyledTouchableOpacity>
    );
  }

  return (
    <StyledView className={commonClasses}>
      {icon && <StyledView className="mr-2">{icon}</StyledView>}
      <StyledText className={`text-sm ${getTextVariantClasses()} ${textClassName}`}>
        {label}
      </StyledText>
    </StyledView>
  );
}
