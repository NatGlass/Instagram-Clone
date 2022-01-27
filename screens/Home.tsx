import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { Posts } from "../data/Posts";

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
