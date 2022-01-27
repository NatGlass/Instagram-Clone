import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import BottomNav from "../components/home/BottomNav";
import { Posts } from "../data/Posts";
import { bottomNavIcons } from "../components/home/BottomNav";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {Posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomNav icons={bottomNavIcons} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
