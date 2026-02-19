import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { ThemedView } from '@/src/components/ui/ThemedView';
import { ThemedText } from '@/src/components/ui/ThemedText';
import { Card } from '@/src/components/ui/Card';
import { Chip } from '@/src/components/ui/Chip';

export default function ProfileScreen() {
  return (
    <ThemedView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View className="px-6 pt-12 pb-4 flex-row items-center justify-between">
          <TouchableOpacity className="w-10 h-10 items-center justify-center">
            <Text className="text-white text-2xl">←</Text>
          </TouchableOpacity>
          <ThemedText className="font-medium text-xl">Professional Profile</ThemedText>
          <View className="w-10" />
        </View>

        {/* Profile Card */}
        <View className="px-6 mb-8">
          <Card padding="lg" className="items-center">
            <View className="w-[104px] h-[104px] rounded-full p-[3px] bg-gradient-to-tr from-tonal-blue to-primary mb-5 justify-center items-center overflow-hidden border border-white/10">
               <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNO3m0uuMzGzy2ZMEduDXqKTwJ-pBMuDbV4FqHzLZN-f5NGUrjRVaaDxHVyoVgR3fQZa9QZO9eXMmFIj8aXMhza_dLv2YS3ntHKf3-ZhQTHbDJE7KIDJT_TALzHASTtOcBV-3J2YRET4HUuNksk2A0OjytIBUCuIOfsnlKjAvkEdiD4-805qllJUDIz2sfJyNnTfQ78scQR9Rflcg_XqMh1uO7yESeLKHdLuYvPt_XAPs3WhxBwfG81Z2nDNoNU2TOYqwRemYStTU_' }}
                className="w-full h-full rounded-full"
              />
            </View>
            <ThemedText className="text-2xl font-bold mb-1">Anshul Badoni</ThemedText>
            <ThemedText className="text-text-secondary font-medium mb-3">Senior Software Engineer</ThemedText>
            <View className="flex-row items-center gap-1">
              <ThemedText className="font-bold mr-1">4.5</ThemedText>
              <Text className="text-tertiary">⭐⭐⭐⭐</Text>
              <Text className="text-tertiary/50">⭐</Text>
            </View>
          </Card>
        </View>

        {/* Resume */}
        <View className="px-6 mb-8">
          <ThemedText className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-3 px-1">
            RESUME
          </ThemedText>
          <Card>
            <View className="bg-black/20 rounded-xl p-4 flex-row items-center justify-between mb-4 border border-white/5">
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-lg bg-tonal-grey items-center justify-center mr-3">
                  <Text className="text-primary text-xl">📄</Text>
                </View>
                <View>
                  <ThemedText className="font-medium text-sm">resume_ansh.pdf</ThemedText>
                  <ThemedText className="text-text-secondary text-xs">Updated 2 days ago</ThemedText>
                </View>
              </View>
              <Text className="text-primary text-xl">✅</Text>
            </View>
            <TouchableOpacity className="w-full bg-primary py-3.5 rounded-full flex-row items-center justify-center gap-2">
              <Text className="text-primary-dark font-bold text-sm">Download Resume</Text>
            </TouchableOpacity>
          </Card>
        </View>

        {/* Professional Experience */}
        <View className="px-6 mb-8">
          <ThemedText className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-3 px-1">
            PROFESSIONAL EXPERIENCE
          </ThemedText>
          <Card className="overflow-hidden">
            <ThemedText className="text-text-secondary leading-6 mb-6">
              Passionate Software Engineer with 5+ years of experience in building scalable mobile and web applications. Dedicated to creating high-fidelity user experiences.
            </ThemedText>
            <View className="h-[1px] bg-divider mb-8 opacity-50" />

            <View className="relative pl-7">
              {/* Timeline Line */}
              <View className="absolute left-[27px] top-[56px] bottom-[-40px] w-[3px] bg-[#388e3c]" />

              {/* Item 1 */}
              <View className="flex-row items-start mb-10 relative -left-7">
                {/* Connector Line hidden for first item visually in design logic, but distinct line usually connects items */}
                 <View className="absolute left-[27px] top-[56px] bottom-[-40px] w-[3px] bg-[#388e3c]" />

                <View className="w-14 h-14 rounded-full bg-white items-center justify-center border-[3px] border-[#388e3c] z-10 shrink-0 overflow-hidden">
                   <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhNl5g811srWqvIRnRs4Am_F_jZSQFqRZgnmlbCOeLXmu7YjKtuvZHTLQb61Goxf0qvl6zqbbVFc8C95f96k89039w9wrN2DVm9W1b3cFzPqYE0iXPx9blZooJLZwXDhlYA50640xpRFqucm99kQaNye9F4zh7lHsL1n2xKdy9TM4cIXSacz4ctBQUwXbcq_AP3mnyO2zl4CwbN-U7s9Q9FN4pkHkv0AwasevgLHlJKmyAAXHFlgR-2ylYMlE1mh7pfFgc7zSVD_c6' }}
                    className="w-full h-full"
                  />
                </View>
                <View className="ml-5 pt-1 flex-1">
                  <ThemedText className="text-lg font-bold leading-tight">Senior Software Engineer</ThemedText>
                  <View className="mt-0.5 mb-2">
                    <Text className="text-primary font-medium text-sm">Google</Text>
                    <Text className="text-text-secondary text-xs uppercase opacity-80 mt-0.5">Jan 2021 — Present</Text>
                  </View>
                  <ThemedText className="text-text-secondary text-sm leading-relaxed">
                    Leading the mobile platform team, improving app performance by 40% and overseeing migration.
                  </ThemedText>
                </View>
              </View>

               {/* Item 2 */}
              <View className="flex-row items-start relative -left-7">
                <View className="w-14 h-14 rounded-full bg-white items-center justify-center border-[3px] border-[#388e3c] z-10 shrink-0 overflow-hidden">
                   <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLiUNikaZPKVn_4eH1yx0loasOhphn0q00nAQDYWyR_pVJ6LwdEUkRqR-fVlj8dEfBeFo24Wm3JvuaTraXX5RhXexkUgCZzMrUrHBsSVbHflKteXLD-ItjaqYyLQxUEI8o9SC9xVS6rZkqQyjMbGRvXjHiX-TbFlInEO30FtA8wPPnSH2T-QCCGro1kSki7Wr6kEFBfhTPOaBUaSIdxtcOtLLnzwzNwAP0U6JzHvUPty9HliOanN7xxfiWDVV6BPvYsRAjZ6rokZEC' }}
                    className="w-full h-full"
                  />
                </View>
                <View className="ml-5 pt-1 flex-1">
                  <ThemedText className="text-lg font-bold leading-tight">Full Stack Developer</ThemedText>
                  <View className="mt-0.5 mb-2">
                    <Text className="text-primary font-medium text-sm">Amazon</Text>
                    <Text className="text-text-secondary text-xs uppercase opacity-80 mt-0.5">Jun 2018 — Dec 2020</Text>
                  </View>
                  <ThemedText className="text-text-secondary text-sm leading-relaxed">
                    Developed and maintained 15+ client projects using React, Node.js, and AWS.
                  </ThemedText>
                </View>
              </View>
            </View>
          </Card>
        </View>

        {/* Skills */}
        <View className="px-6 mb-8">
          <ThemedText className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-3 px-1">
            SKILLS
          </ThemedText>
          <Card className="flex-row flex-wrap gap-2">
            <Chip label="Flutter" variant="tonal" className="bg-tonal-grey border-transparent" textClassName="text-tonal-blue font-medium" />
            <Chip label="React" variant="tonal" className="bg-tonal-grey border-transparent" textClassName="text-tonal-blue font-medium" />
            <Chip label="Python" variant="tonal" className="bg-tonal-grey border-transparent" textClassName="text-tonal-blue font-medium" />
            <Chip label="System Design" variant="tonal" className="bg-tonal-grey border-transparent" textClassName="text-tonal-blue font-medium" />
            <Chip label="AWS" variant="tonal" className="bg-tonal-grey border-transparent" textClassName="text-tonal-blue font-medium" />
          </Card>
        </View>

        {/* Certifications */}
        <View className="px-6 mb-8">
          <ThemedText className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-3 px-1">
            CERTIFICATIONS
          </ThemedText>
          <Card>
            <View className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-lg bg-tonal-grey items-center justify-center mr-3">
                  <Text className="text-primary text-xl">🎖️</Text>
                </View>
                <View>
                  <ThemedText className="font-medium text-sm">AWS Certified Developer</ThemedText>
                  <ThemedText className="text-text-secondary text-xs">Amazon Web Services</ThemedText>
                </View>
              </View>
              <Text className="text-text-secondary text-xl">↗</Text>
            </View>
            <View className="h-[1px] bg-divider my-2 opacity-50" />
            <View className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-lg bg-tonal-grey items-center justify-center mr-3">
                  <Text className="text-primary text-xl">🎖️</Text>
                </View>
                <View>
                  <ThemedText className="font-medium text-sm">Professional Scrum Master I</ThemedText>
                  <ThemedText className="text-text-secondary text-xs">Scrum.org</ThemedText>
                </View>
              </View>
              <Text className="text-text-secondary text-xl">↗</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
