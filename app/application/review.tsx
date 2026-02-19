import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/src/components/ui/ThemedView';
import { ThemedText } from '@/src/components/ui/ThemedText';
import { Card } from '@/src/components/ui/Card';
import { Header } from '@/src/components/ui/Header';
import { Button } from '@/src/components/ui/Button';

export default function ApplicationReviewScreen() {
  const router = useRouter();

  return (
    <ThemedView className="flex-1 bg-background">
      <Header title="Review Application" showBack onBack={() => router.back()} />

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Progress Bar */}
        <View className="flex-row items-center gap-1 mb-8 px-6">
          <View className="h-1 flex-1 rounded-full bg-primary" />
          <View className="h-1 flex-1 rounded-full bg-primary" />
          <View className="h-1 flex-1 rounded-full bg-primary" />
        </View>

        {/* Applicant Details */}
        <View className="px-6 mb-8">
          <ThemedText className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4 px-1">
            APPLICANT DETAILS
          </ThemedText>
          <Card className="bg-surface-highlight">
            <View className="flex-row items-center mb-6">
              <View className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-divider">
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNO3m0uuMzGzy2ZMEduDXqKTwJ-pBMuDbV4FqHzLZN-f5NGUrjRVaaDxHVyoVgR3fQZa9QZO9eXMmFIj8aXMhza_dLv2YS3ntHKf3-ZhQTHbDJE7KIDJT_TALzHASTtOcBV-3J2YRET4HUuNksk2A0OjytIBUCuIOfsnlKjAvkEdiD4-805qllJUDIz2sfJyNnTfQ78scQR9Rflcg_XqMh1uO7yESeLKHdLuYvPt_XAPs3WhxBwfG81Z2nDNoNU2TOYqwRemYStTU_' }}
                  className="w-full h-full"
                />
              </View>
              <View>
                <ThemedText className="text-xl font-bold">Anshul Badoni</ThemedText>
                <ThemedText className="text-text-secondary text-sm">Software Engineer</ThemedText>
              </View>
            </View>
            <View className="bg-black/30 rounded-xl p-4 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-lg bg-tonal-surface items-center justify-center mr-3">
                  <Text className="text-primary text-xl">📄</Text>
                </View>
                <View>
                  <ThemedText className="font-medium text-sm">resume_ansh.pdf</ThemedText>
                  <ThemedText className="text-text-secondary text-xs">Uploaded 2m ago</ThemedText>
                </View>
              </View>
              <Text className="text-text-secondary text-xl">✅</Text>
            </View>
          </Card>
        </View>

        {/* Quick Answers */}
        <View className="px-6 mb-10 space-y-4">
          <ThemedText className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4 px-1">
            QUICK ANSWERS
          </ThemedText>

          <Card className="bg-surface-highlight">
            <ThemedText className="text-lg font-medium leading-snug mb-4">Are you authorized to work in the US?</ThemedText>
            <View className="flex-row gap-3">
              <TouchableOpacity className="bg-primary px-6 py-2 rounded-full">
                <Text className="text-primary-dark font-bold text-sm">Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-tonal-surface px-6 py-2 rounded-full">
                <Text className="text-text-secondary font-bold text-sm">No</Text>
              </TouchableOpacity>
            </View>
          </Card>

          <Card className="bg-surface-highlight">
            <ThemedText className="text-lg font-medium leading-snug mb-4">Will you now or in the future require sponsorship?</ThemedText>
            <View className="flex-row gap-3">
              <TouchableOpacity className="bg-tonal-surface px-6 py-2 rounded-full">
                <Text className="text-text-secondary font-bold text-sm">Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-primary px-6 py-2 rounded-full">
                <Text className="text-primary-dark font-bold text-sm">No</Text>
              </TouchableOpacity>
            </View>
          </Card>

          <Card className="bg-surface-highlight">
            <View className="flex-row items-center justify-between">
              <ThemedText className="text-lg font-medium leading-snug">Remote work preferred?</ThemedText>
              <View className="w-12 h-6 bg-primary rounded-full relative">
                <View className="absolute right-1 top-1 w-4 h-4 bg-[#00390a] rounded-full" />
              </View>
            </View>
          </Card>
        </View>

        <ThemedText className="text-xs text-text-secondary text-center px-4 leading-relaxed mb-8">
          By clicking submit, you agree to our Terms of Service and acknowledge that you have read our Privacy Policy.
        </ThemedText>
      </ScrollView>

      {/* Bottom Submit Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-black/80 p-6 border-t border-divider pb-10">
        <Button
          title="Submit Application"
          onPress={() => router.push('/(tabs)')}
          variant="primary"
          className="w-full py-4 rounded-full"
        />
        <View className="h-1 w-32 bg-divider mx-auto mt-6 rounded-full" />
      </View>
    </ThemedView>
  );
}
