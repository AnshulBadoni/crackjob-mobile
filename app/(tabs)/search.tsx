import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/src/components/ui/ThemedView';
import { ThemedText } from '@/src/components/ui/ThemedText';
import { Input } from '@/src/components/ui/Input';
import { ListItem } from '@/src/components/ui/ListItem';
import { Chip } from '@/src/components/ui/Chip';

export default function SearchScreen() {
  return (
    <ThemedView className="flex-1 bg-background">
      {/* Header with Search */}
      <View className="px-4 pt-12 pb-4 bg-background z-10">
        <Input
          placeholder="Software Engineer"
          placeholderTextColor="#E3E3E3"
          leftIcon={<Text style={{ fontSize: 20 }}>🔍</Text>}
          rightIcon={<Text style={{ fontSize: 20 }}>⚙️</Text>}
          className="bg-surface-highlight border-transparent h-14"
        />

        {/* Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8, paddingBottom: 8 }}
          className="mt-2"
        >
          <Chip label="Remote" variant="filled" />
          <Chip label="Full-time" variant="filled" />
          <Chip label="Salary" variant="filled" />
          <Chip label="Entry level" variant="filled" />
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100, gap: 12 }}>
        <ThemedText className="font-bold text-xl mb-2 mt-4">Recommended Jobs</ThemedText>

        <ListItem
          title="Senior Software Engineer"
          subtitle="Google • Mountain View, CA"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuC0jQ9-AIWkRHYQ2KDXoe7_C6mwat-ivn1WlfrqcMIf-vINn_ryR2KtavLxU2UsPeNJELP0uxZw6QdBszPk-VXOD6kB3Eq5TvMo64y7v34OGXpZnfposabTEtPoOW6HlTccFntV0zsOQC3FFQer95c2tU_xj9O0vzjWFmL3-yvZmPe7ldVYtKJZW2vALHAb7xubJ-hyJcXe2l19FCPl9YU--CKQHMtQBHL9MMBlM4hOQ0aqfB7e-to8G9llPBMfksEDF6xdnWBkqY8i"
          className="bg-surface-highlight border-transparent"
          trailing={
            <TouchableOpacity className="bg-tonal-blue px-4 py-2 rounded-full">
              <Text className="text-[#062e6f] font-bold text-xs">Quick Apply</Text>
            </TouchableOpacity>
          }
        />

        <ListItem
          title="Cloud Infrastructure Lead"
          subtitle="Amazon • Seattle, WA"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAS4rRy2kU9cCvH3jPTDv9-CJtO2jR1aBTOTArA7l2HBx7RbZ8L_HkQhC8M2uFWb-5gwEdCmrZFuySB2J09cUv-EBBoTmpiB1bjnzj2kE6Lkpo3AVPDzmRmLHR0_xT7A0KoSlA34WyL9xj5A-ot-FNBOVv2r2YUhWoZvvB2O8qDnJjpn4lcX-zdzv-gUJUdonVN5800i8kWKqfWpML8Fm0KuBpiyJMtmadIoUIUrHPBogaJuezpni8JcVlqNmyWvHeW0XsT4dQK28cB"
          className="bg-surface-highlight border-transparent"
          trailing={
            <TouchableOpacity className="bg-tonal-blue px-4 py-2 rounded-full">
              <Text className="text-[#062e6f] font-bold text-xs">Quick Apply</Text>
            </TouchableOpacity>
          }
        />

        <ListItem
          title="Full Stack Developer"
          subtitle="Meta • Menlo Park, CA"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBNqiUSpZmK3iS-aIWN4SFSHQlFSQ0Jlzx70CD0zJQII75rckyFtN-tjdN2IvxYxnZj9-bErYu-R0tNsWgLdu-hDvshFBuNaAGQjObtCa19UHadeTxJujQcvNz3lfVRouKM2PjXrCNh_dmECUmiR6qoIdWiG61AjcPJpvO3yOniZ05F5ALWNXK3u-LX1CAJmJrreRJcQrT-asL6ls7yDtT1Ag78d2e4rm6u7TBKBFllCE5wM1uTWyY34ZthpoAB7wBqueJnReGD3shE"
          className="bg-surface-highlight border-transparent"
          trailing={
            <TouchableOpacity className="bg-tonal-blue px-4 py-2 rounded-full">
              <Text className="text-[#062e6f] font-bold text-xs">Quick Apply</Text>
            </TouchableOpacity>
          }
        />

        <ListItem
          title="Backend Engineer"
          subtitle="Netflix • Los Gatos, CA"
          leading={
            <View className="w-12 h-12 rounded-full bg-[#E50914] items-center justify-center mr-4 border border-white/20">
              <Text className="text-white font-black text-xl">N</Text>
            </View>
          }
          className="bg-surface-highlight border-transparent"
          trailing={
            <TouchableOpacity className="bg-tonal-blue px-4 py-2 rounded-full">
              <Text className="text-[#062e6f] font-bold text-xs">Quick Apply</Text>
            </TouchableOpacity>
          }
        />
      </ScrollView>
    </ThemedView>
  );
}
