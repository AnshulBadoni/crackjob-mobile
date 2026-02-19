import React from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledTextInput = styled(TextInput);
const StyledView = styled(View);
const StyledText = styled(Text);

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

export function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  containerClassName = '',
  className = '',
  ...props
}: InputProps) {
  return (
    <StyledView className={`mb-4 ${containerClassName}`}>
      {label && (
        <StyledText className="text-xs font-medium text-text-secondary mb-1.5 px-1">
          {label}
        </StyledText>
      )}
      <StyledView className="relative">
        {leftIcon && (
          <StyledView className="absolute left-4 top-0 bottom-0 justify-center z-10 pointer-events-none">
            {leftIcon}
          </StyledView>
        )}
        <StyledTextInput
          placeholderTextColor="#c4c7c5"
          className={`h-16 bg-surface-container rounded-xl text-base text-white ${leftIcon ? 'pl-12' : 'pl-4'} ${rightIcon ? 'pr-12' : 'pr-4'} focus:border focus:border-primary transition-colors ${error ? 'border border-error' : 'border border-transparent'} ${className}`}
          {...props}
        />
        {rightIcon && (
          <StyledView className="absolute right-4 top-0 bottom-0 justify-center">
            {rightIcon}
          </StyledView>
        )}
      </StyledView>
      {error && (
        <StyledText className="text-xs text-error mt-1 px-1">
          {error}
        </StyledText>
      )}
    </StyledView>
  );
}
