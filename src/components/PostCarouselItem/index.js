import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable } from "react-native";
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {

  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Posts', {postId: post.id});
  }

  return (
    <Pressable onPress={goToPostPage} style={[styles.container, { width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/* Image  */}
        <Image
          style={styles.image}
          source={{uri: post.image}}
        />

        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Bed & Bedroom  */}
          <Text style={styles.bedrooms}>
            {post.hours} hr. {post.activity_n} activity
          </Text>

          {/* Type & Description */}
          <Text style={styles.typetxt} numberOfLines={2}>
            {post.type}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.title}
          </Text>

          {/*  Old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.price}>฿{post.newPrice} </Text>
            / day
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
