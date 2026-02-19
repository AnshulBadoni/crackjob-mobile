import { Text, TextProps } from 'react-native';
import { styled } from 'nativewind';

const StyledText = styled(Text);

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'caption' | 'display';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  className,
  ...rest
}: ThemedTextProps) {
  let typeClasses = '';

  switch (type) {
    case 'display':
      typeClasses = 'text-4xl font-bold tracking-tight';
      break;
    case 'title':
      typeClasses = 'text-2xl font-bold tracking-tight';
      break;
    case 'subtitle':
      typeClasses = 'text-lg font-bold';
      break;
    case 'defaultSemiBold':
      typeClasses = 'text-base font-semibold';
      break;
    case 'caption':
      typeClasses = 'text-xs text-text-secondary';
      break;
    case 'link':
      typeClasses = 'text-base text-primary underline';
      break;
    default:
      typeClasses = 'text-base text-text-primary';
      break;
  }

  return (
    <StyledText
      className={`${typeClasses} ${className || ''}`}
      style={style}
      {...rest}
    />
  );
}
