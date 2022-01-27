import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

const BottomNav = ({ icons }: any) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }: any) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{ uri: icon.inactive }} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {icons.map((icon: any, index: any) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  );
};

export default BottomNav;

export const bottomNavIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/50/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/500/ffffff/shopping-bag-full.png",
  },
  {
    name: "profile",
    active: "https://img.icons8.com/color/96/ffffff/user-male-circle--v2.png",
    inactive: "https://img.icons8.com/color/96/ffffff/user-male-circle--v2.png",
  },
];

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  icon: {
    width: 30,
    height: 30,
  },
});
