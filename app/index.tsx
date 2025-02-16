import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const router = useRouter();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 10,
        friction: 2,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
        router.replace("/(auth)");
    }, 2000);

    return ()=>clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-[#4CAF50]">
      <Animated.View
        className={`items-center`}
        style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}
      >
        <Ionicons name="medical" size={100} color="white" />
        <Text className="font-bold text-[32px]  text-white mt-5 tracking-[1px]">
          MedRemind
        </Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
