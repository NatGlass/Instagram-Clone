import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import PostUploader from "./PostUploader";

const AddNewPost = () => (
  <View style={{ marginHorizontal: 10, marginTop: 20 }}>
    <Header />
    <PostUploader />
  </View>
);

const Header = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <TouchableOpacity>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text
      style={{
        color: "white",
        fontWeight: "700",
        fontSize: 20,
        marginRight: 25,
      }}
    >
      NEW POST
    </Text>
    <Text></Text>
  </View>
);

export default AddNewPost;
