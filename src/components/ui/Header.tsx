import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { styled } from 'nativewind';
// In a real app, I'd use actual icons, but I'll use text or a placeholder for now
// Assuming MaterialIcons are available via expo/vector-icons

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
  onBack?: () => void;
  className?: string;
}

export function Header({ title, showBack = false, rightAction, onBack, className = '' }: HeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <StyledSafeAreaView className={`bg-background ${className}`}>
      <StyledView className="flex-row items-center justify-between px-6 pt-2 pb-4 h-16">
        <StyledView className="flex-row items-center flex-1">
          {showBack && (
            <StyledTouchableOpacity
              onPress={handleBack}
              className="w-10 h-10 items-center justify-center -ml-2 mr-2 rounded-full active:bg-white/10"
            >
              <StyledText className="text-white text-2xl">←</StyledText>
            </StyledTouchableOpacity>
          )}
          {title && (
            <StyledText className="text-xl font-bold text-white tracking-tight flex-1" numberOfLines={1}>
              {title}
            </StyledText>
          )}
        </StyledView>
        {rightAction && (
          <StyledView>
            {rightAction}
          </StyledView>
        )}
      </StyledView>
    </StyledSafeAreaView>
  );
}
