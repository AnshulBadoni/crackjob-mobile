import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withSpring,
  withTiming,
  Easing
} from 'react-native-reanimated';
import { ThemedView } from '@/src/components/ui/ThemedView';
import { Input } from '@/src/components/ui/Input';
import { Button } from '@/src/components/ui/Button';

export default function LoginScreen() {
  const router = useRouter();

  // Animation values
  const card1Offset = useSharedValue(100);
  const card2Offset = useSharedValue(100);
  const card3Offset = useSharedValue(100);
  const contentOpacity = useSharedValue(0);

  useEffect(() => {
    card1Offset.value = withDelay(100, withSpring(0, { damping: 12 }));
    card2Offset.value = withDelay(200, withSpring(0, { damping: 12 }));
    card3Offset.value = withDelay(300, withSpring(0, { damping: 12 }));
    contentOpacity.value = withDelay(600, withTiming(1, { duration: 500 }));
  }, []);

  const card1Style = useAnimatedStyle(() => ({
    transform: [
      { translateY: card1Offset.value },
      { rotate: '-6deg' },
      { scale: 0.9 }
    ],
    opacity: 0.8,
  }));

  const card2Style = useAnimatedStyle(() => ({
    transform: [
      { translateY: card2Offset.value },
      { rotate: '-3deg' },
      { scale: 0.95 }
    ],
    opacity: 0.9,
  }));

  const card3Style = useAnimatedStyle(() => ({
    transform: [
      { translateY: card3Offset.value },
    ],
  }));

  const contentStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
    transform: [{ translateY: withTiming(contentOpacity.value === 1 ? 0 : 20) }]
  }));

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <ThemedView className="flex-1 px-6 pt-12 bg-background">
      {/* Status Bar Placeholder */}
      <View className="h-11 flex-row justify-between items-center mb-4">
        <Text className="text-white font-bold">9:41</Text>
        <View className="flex-row gap-1">
          <View className="w-4 h-4 rounded-full bg-white/20" />
          <View className="w-4 h-4 rounded-full bg-white/20" />
        </View>
      </View>

      {/* Animated Cards Stack */}
      <View className="h-[280px] items-center justify-center relative mt-4 mb-8">
        {/* Pink Card (Back) */}
        <Animated.View
          className="absolute w-full h-[200px] bg-tonal-pink rounded-3xl p-6 justify-end"
          style={[{ top: 20, zIndex: 1 }, card1Style]}
        >
          <Text className="text-tertiary-dark font-bold text-lg">Connect with top recruiters</Text>
        </Animated.View>

        {/* Blue Card (Middle) */}
        <Animated.View
          className="absolute w-full h-[220px] bg-secondary rounded-3xl p-6 justify-end"
          style={[{ top: 10, zIndex: 2 }, card2Style]}
        >
          <Text className="text-secondary-dark font-bold text-xl">Discover hidden job gems</Text>
        </Animated.View>

        {/* Yellow Card (Front) */}
        <Animated.View
          className="absolute w-full h-[240px] bg-tertiary rounded-3xl p-8 justify-center z-10"
          style={[card3Style]}
        >
          <Text className="text-3xl mb-2">👋</Text>
          <Text className="text-3xl font-bold text-tertiary-dark tracking-tight">Welcome back</Text>
          <Text className="text-tertiary-dark/80 mt-2 font-medium">We're glad to see you again. Enter your details below.</Text>
        </Animated.View>
      </View>

      {/* Carousel Indicators */}
      <View className="flex-row gap-1.5 ml-2 mb-8">
        <View className="w-6 h-1.5 rounded-full bg-tertiary" />
        <View className="w-1.5 h-1.5 rounded-full bg-surface-container" />
        <View className="w-1.5 h-1.5 rounded-full bg-surface-container" />
      </View>

      {/* Form Inputs */}
      <Animated.View style={[contentStyle, { flex: 1 }]}>
        <Input
          placeholder="Email"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon={<Text style={{ fontSize: 20 }}>✉️</Text>}
        />

        <View className="relative">
          <Input
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            leftIcon={<Text style={{ fontSize: 20 }}>🔒</Text>}
            rightIcon={
              <TouchableOpacity>
                <Text style={{ fontSize: 20, opacity: 0.5 }}>👁️</Text>
              </TouchableOpacity>
            }
          />
        </View>

        <TouchableOpacity className="self-end mb-8">
          <Text className="text-tonal-blue font-medium">Forgot password?</Text>
        </TouchableOpacity>

        <Button
          title="Sign In"
          onPress={handleLogin}
          variant="primary"
          size="lg"
          className="mb-8"
        />

        <View className="flex-row items-center gap-4 mb-8">
          <View className="h-[1px] flex-1 bg-white/10" />
          <Text className="text-text-secondary text-sm">or</Text>
          <View className="h-[1px] flex-1 bg-white/10" />
        </View>

        <View className="flex-row justify-center gap-6 mb-10">
          <TouchableOpacity className="w-14 h-14 rounded-full bg-surface-container items-center justify-center border border-white/5">
            <Text style={{ fontSize: 24 }}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-14 h-14 rounded-full bg-surface-container items-center justify-center border border-white/5">
            <Text style={{ fontSize: 24 }}>A</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center gap-1 mb-8">
          <Text className="text-text-secondary">Don't have an account?</Text>
          <TouchableOpacity>
            <Text className="text-primary font-bold">Sign up</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ThemedView>
  );
}
