import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";

import { Users } from "../../data/Users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 15 }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storyContainer}
      >
        {Users.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "white" }}>
              {story.user.length > 11
                ? story.user.slice(0, 10) + "..."
                : story.user}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 3,
    borderWidth: 3,
    borderColor: "lightblue",
  },
});
