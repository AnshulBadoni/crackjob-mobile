import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ThemedView } from '@/src/components/ui/ThemedView';
import { ThemedText } from '@/src/components/ui/ThemedText';
import { Card } from '@/src/components/ui/Card';
import { Header } from '@/src/components/ui/Header';
import { Button } from '@/src/components/ui/Button';

export default function JobDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const handleApply = () => {
    router.push('/application/review');
  };

  return (
    <ThemedView className="flex-1 bg-background">
      <Header
        showBack
        onBack={() => router.back()}
        rightAction={
          <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full active:bg-white/10">
            <Text style={{ fontSize: 24 }}>📤</Text>
          </TouchableOpacity>
        }
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Hero Section */}
        <View className="items-center mt-4 mb-8 px-6">
          <View className="w-24 h-24 rounded-full bg-white items-center justify-center mb-6 overflow-hidden">
            <Text style={{ fontSize: 40 }}>G</Text>
          </View>
          <ThemedText className="text-3xl font-bold text-center leading-tight mb-1">Senior Software Engineer</ThemedText>
          <ThemedText className="text-xl font-bold text-text-secondary">Google</ThemedText>

          <View className="flex-row flex-wrap justify-center gap-2 mt-6">
            <View className="px-4 py-2 bg-tonal-blue/10 rounded-full">
              <Text className="text-tonal-blue font-medium text-sm">Mountain View, CA</Text>
            </View>
            <View className="px-4 py-2 bg-tonal-blue/10 rounded-full">
              <Text className="text-tonal-blue font-medium text-sm">Full-time</Text>
            </View>
            <View className="px-4 py-2 bg-tonal-blue/10 rounded-full">
              <Text className="text-tonal-blue font-medium text-sm">$160k - $220k</Text>
            </View>
          </View>
        </View>

        {/* About */}
        <View className="px-6 mb-4">
          <Card className="bg-surface-highlight">
            <ThemedText className="text-xl font-bold mb-4">About the Job</ThemedText>
            <ThemedText className="text-text-secondary leading-6 mb-4">
              As a Senior Software Engineer, you will lead the development of next-generation features that reach millions of users. You'll work across the stack to deliver high-quality, scalable solutions in a collaborative environment.
            </ThemedText>
            <ThemedText className="text-text-secondary leading-6">
              You will be responsible for designing complex systems, mentoring junior developers, and contributing to the overall technical strategy of the Flutter ecosystem.
            </ThemedText>
          </Card>
        </View>

        {/* Requirements */}
        <View className="px-6">
          <Card className="bg-surface-highlight">
            <ThemedText className="text-xl font-bold mb-4">Key Requirements</ThemedText>
            <View className="gap-4">
              {[
                "5+ years of Flutter experience in production environments",
                "Strong system design skills and architectural knowledge",
                "Experience with Dart and cross-platform optimization",
                "Proficiency in CI/CD and automated testing strategies",
                "Bachelor's or Master's degree in Computer Science"
              ].map((req, index) => (
                <View key={index} className="flex-row items-start">
                  <Text className="text-secondary mr-3 mt-0.5 text-lg">✓</Text>
                  <ThemedText className="text-text-secondary flex-1 leading-snug">{req}</ThemedText>
                </View>
              ))}
            </View>
          </Card>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-black/80 p-6 pt-4 border-t border-white/5 flex-row gap-4 items-center pb-10">
        <Button
          title="Apply Now"
          onPress={handleApply}
          variant="primary"
          className="flex-1"
        />
        <TouchableOpacity className="w-14 h-14 rounded-full border border-white/10 items-center justify-center active:bg-white/5">
          <Text style={{ fontSize: 24 }}>🔖</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}
