import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import Stories from "../components/home/Stories";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
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
