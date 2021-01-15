import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const days = 7;

const Post = (props) => {

  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Posts', {postId: post.id});
 }

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{uri: post.image}}
      />

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
        <Text style={styles.oldPrice}>฿{post.oldPrice}</Text>
        <Text style={styles.price}>  ฿{post.newPrice} </Text>
        / day
      </Text>

      {/*  Total price */}
      {/* <Text style={styles.totalPrice}>฿{post.newPrice * days} total</Text> */}
    </Pressable>
  );
};

export default Post;
