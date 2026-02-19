import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/src/components/ui/ThemedView';
import { ThemedText } from '@/src/components/ui/ThemedText';
import { Card } from '@/src/components/ui/Card';
import { Chip } from '@/src/components/ui/Chip';
import { ListItem } from '@/src/components/ui/ListItem';

export default function DashboardScreen() {
  const router = useRouter();

  const handleJobPress = (id: string) => {
    router.push(`/job/${id}`);
  };

  return (
    <ThemedView className="flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View className="px-6 pt-12 pb-6 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <View className="w-12 h-12 rounded-full border border-white/10 overflow-hidden mr-4">
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNO3m0uuMzGzy2ZMEduDXqKTwJ-pBMuDbV4FqHzLZN-f5NGUrjRVaaDxHVyoVgR3fQZa9QZO9eXMmFIj8aXMhza_dLv2YS3ntHKf3-ZhQTHbDJE7KIDJT_TALzHASTtOcBV-3J2YRET4HUuNksk2A0OjytIBUCuIOfsnlKjAvkEdiD4-805qllJUDIz2sfJyNnTfQ78scQR9Rflcg_XqMh1uO7yESeLKHdLuYvPt_XAPs3WhxBwfG81Z2nDNoNU2TOYqwRemYStTU_' }}
                className="w-full h-full"
              />
            </View>
            <View>
              <ThemedText type="subtitle">Anshul Badoni</ThemedText>
              <View className="flex-row items-center mt-1">
                <ThemedText className="text-text-secondary text-sm mr-1">4.5</ThemedText>
                <Text>⭐</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-surface-container items-center justify-center">
            <Text>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Active Roles */}
        <View className="mb-8">
          <ThemedText className="px-6 mb-4 text-xs font-bold text-text-secondary uppercase tracking-widest">
            ACTIVE ROLES
          </ThemedText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            snapToInterval={300} // Approximate width + gap
            decelerationRate="fast"
          >
            {/* Card 1 */}
            <View className="w-[280px] bg-tertiary rounded-2xl p-5 justify-between h-[160px]">
              <View className="flex-row justify-between items-start">
                <View>
                  <Text className="text-xl font-bold text-tertiary-dark">Senior UX Designer</Text>
                  <Text className="text-tertiary-dark/80 text-sm mt-1">Full-time • Remote</Text>
                </View>
                <Text>🔖</Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-tertiary-dark font-bold text-xs">Applied 2d ago</Text>
                <View className="bg-black/10 px-3 py-1.5 rounded-full">
                  <Text className="text-tertiary-dark font-bold text-xs">Under Review</Text>
                </View>
              </View>
            </View>

            {/* Card 2 */}
            <View className="w-[280px] bg-tonal-blue rounded-2xl p-5 justify-between h-[160px]">
              <View className="flex-row justify-between items-start">
                <View>
                  <Text className="text-xl font-bold text-secondary-dark">Product Lead</Text>
                  <Text className="text-secondary-dark/80 text-sm mt-1">Full-time • Hybrid</Text>
                </View>
                <Text>🔖</Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text className="text-secondary-dark font-bold text-xs">Applied 5d ago</Text>
                <View className="bg-black/10 px-3 py-1.5 rounded-full">
                  <Text className="text-secondary-dark font-bold text-xs">Interviewing</Text>
                </View>
              </View>
            </View>
          </ScrollView>

          <View className="flex-row justify-center gap-1.5 mt-4">
            <View className="w-1.5 h-1.5 rounded-full bg-primary" />
            <View className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </View>
        </View>

        {/* Recommended Jobs */}
        <View className="px-6 mb-8">
          <ThemedText className="mb-4 text-xs font-bold text-text-secondary uppercase tracking-widest">
            RECOMMENDED JOBS
          </ThemedText>
          <View className="gap-3">
            <ListItem
              title="Lead Software Engineer"
              subtitle="Google • Mountain View, CA"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBhNl5g811srWqvIRnRs4Am_F_jZSQFqRZgnmlbCOeLXmu7YjKtuvZHTLQb61Goxf0qvl6zqbbVFc8C95f96k89039w9wrN2DVm9W1b3cFzPqYE0iXPx9blZooJLZwXDhlYA50640xpRFqucm99kQaNye9F4zh7lHsL1n2xKdy9TM4cIXSacz4ctBQUwXbcq_AP3mnyO2zl4CwbN-U7s9Q9FN4pkHkv0AwasevgLHlJKmyAAXHFlgR-2ylYMlE1mh7pfFgc7zSVD_c6"
              onPress={() => handleJobPress('1')}
              trailing={
                <TouchableOpacity className="bg-tonal-surface px-4 py-2 rounded-full">
                  <Text className="text-primary font-bold text-xs">Quick Apply</Text>
                </TouchableOpacity>
              }
            />
            <ListItem
              title="Senior Systems Architect"
              subtitle="Amazon • Seattle, WA"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDLiUNikaZPKVn_4eH1yx0loasOhphn0q00nAQDYWyR_pVJ6LwdEUkRqR-fVlj8dEfBeFo24Wm3JvuaTraXX5RhXexkUgCZzMrUrHBsSVbHflKteXLD-ItjaqYyLQxUEI8o9SC9xVS6rZkqQyjMbGRvXjHiX-TbFlInEO30FtA8wPPnSH2T-QCCGro1kSki7Wr6kEFBfhTPOaBUaSIdxtcOtLLnzwzNwAP0U6JzHvUPty9HliOanN7xxfiWDVV6BPvYsRAjZ6rokZEC"
              onPress={() => handleJobPress('2')}
              trailing={
                <TouchableOpacity className="bg-tonal-surface px-4 py-2 rounded-full">
                  <Text className="text-primary font-bold text-xs">Quick Apply</Text>
                </TouchableOpacity>
              }
            />
            <ListItem
              title="Product Designer"
              subtitle="Figma • San Francisco, CA"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBNO3m0uuMzGzy2ZMEduDXqKTwJ-pBMuDbV4FqHzLZN-f5NGUrjRVaaDxHVyoVgR3fQZa9QZO9eXMmFIj8aXMhza_dLv2YS3ntHKf3-ZhQTHbDJE7KIDJT_TALzHASTtOcBV-3J2YRET4HUuNksk2A0OjytIBUCuIOfsnlKjAvkEdiD4-805qllJUDIz2sfJyNnTfQ78scQR9Rflcg_XqMh1uO7yESeLKHdLuYvPt_XAPs3WhxBwfG81Z2nDNoNU2TOYqwRemYStTU_"
              onPress={() => handleJobPress('3')}
              trailing={
                <TouchableOpacity className="bg-tonal-surface px-4 py-2 rounded-full">
                  <Text className="text-primary font-bold text-xs">Quick Apply</Text>
                </TouchableOpacity>
              }
            />
          </View>
        </View>

        {/* Skills */}
        <View className="px-6 mb-8">
          <ThemedText className="mb-4 text-xs font-bold text-text-secondary uppercase tracking-widest">
            SKILLS
          </ThemedText>
          <Card className="flex-row flex-wrap gap-2">
            <Chip label="Flutter" />
            <Chip label="React" />
            <Chip label="Python" />
            <Chip label="UX Design" />
            <Chip label="System Design" />
          </Card>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
