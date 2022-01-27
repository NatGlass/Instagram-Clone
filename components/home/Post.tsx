import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Post = ({ post }: any) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
          {post.user}
        </Text>
      </View>

      <Text
        style={{
          color: "white",
          fontWeight: "900",
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        ...
      </Text>
    </View>
  );
};

const PostImage = ({ post }: any) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "32%",
      }}
    >
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }: any) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }: any) => (
  <View style={{ flexDirection: "row", marginTop: 5 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }: any) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "700", marginRight: 5 }}>{post.user}</Text>
      <Text style={{ fontSize: 13 }}> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({ post }: any) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "coment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }: any) => (
  <>
    {post.comments.map((comment: any, index: any) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "700", marginRight: 5 }}>
            {comment.user}
          </Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/60/ffffff/external-like-instagram-flatart-icons-outline-flatarticons.png",
    LikedImageUrl: "https://img.icons8.com/color/48/fa314a/like--v3.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/material-outlined/60/ffffff/filled-topic.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/60/ffffff/external-send-email-flatart-icons-outline-flatarticons.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/60/ffffff/external-bookmark-instagram-flatart-icons-outline-flatarticons.png",
  },
];

export default Post;

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: "white",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
});
