import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

interface ListItemProps {
  title: string;
  subtitle?: string;
  overline?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  onPress?: () => void;
  image?: ImageSourcePropType | string;
  className?: string;
}

export function ListItem({
  title,
  subtitle,
  overline,
  leading,
  trailing,
  onPress,
  image,
  className = '',
}: ListItemProps) {
  return (
    <StyledTouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.7}
      className={`bg-surface-container rounded-2xl p-4 flex-row items-center justify-between border border-white/5 active:scale-[0.98] transition-transform ${className}`}
    >
      <StyledView className="flex-row items-center flex-1 mr-4">
        {image ? (
          <StyledView className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shrink-0 overflow-hidden border border-white/10">
            <StyledImage
              source={typeof image === 'string' ? { uri: image } : image}
              className="w-full h-full object-cover"
              resizeMode="cover"
            />
          </StyledView>
        ) : (
          leading && <StyledView className="mr-4">{leading}</StyledView>
        )}

        <StyledView className="flex-1">
          {overline && (
            <StyledText className="text-xs text-text-secondary uppercase tracking-wider mb-0.5">
              {overline}
            </StyledText>
          )}
          <StyledText className="text-base font-bold text-white leading-tight" numberOfLines={1}>
            {title}
          </StyledText>
          {subtitle && (
            <StyledText className="text-sm text-text-secondary mt-0.5" numberOfLines={1}>
              {subtitle}
            </StyledText>
          )}
        </StyledView>
      </StyledView>

      {trailing && <StyledView>{trailing}</StyledView>}
    </StyledTouchableOpacity>
  );
}
