import { View, ViewProps } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);

export interface ThemedViewProps extends ViewProps {
  lightColor?: string;
  darkColor?: string;
  className?: string;
}

export function ThemedView({ style, lightColor, darkColor, className, ...otherProps }: ThemedViewProps) {
  // Assuming dark mode by default as per design
  return <StyledView className={`bg-background ${className}`} style={style} {...otherProps} />;
}
