import { View, Text, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";

const placeholderImg = "https://img.icons8.com/ios-filled/100/ffffff/image.png";

const PostUploader = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>formic</Text>
      <FormikPostUploader />
    </View>
  );
};

const uploadPostSchema = yup.object().shape({
  imageUrl: yup.string().url().required("A URL is required"),
  caption: yup.string().max(2200, "Caption has reached the character limit"),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(placeholderImg);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={{ uri: thumbnailUrl ? thumbnailUrl : placeholderImg }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 15, marginTop: 10 }}>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="Write a caption"
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <TextInput
              onChange={event => setThumbnailUrl(event.nativeEvent.text)}
            style={{ color: "white", fontSize: 18 }}
            placeholder="Enter image url"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button
            onPress={() => handleSubmit}
            title="Share"
            disabled={!isValid}
          >
            Share
          </Button>
        </>
      )}
    </Formik>
  );
};

export default PostUploader;
