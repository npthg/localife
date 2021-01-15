import React  from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import styles from './styles.js';
import ActivityList from '../ActivityList'

const Post = (props) => {

  const post = props.post;

  return (
     <ScrollView>
      <View style={styles.container}>
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
        <Text style={styles.description}>
          {post.title}
        </Text>

        {/*  Old price & new price */}
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>฿{post.oldPrice}</Text>
          <Text style={styles.price}>  ฿{post.newPrice} </Text>
          / day
        </Text>

        {/*  Total price */}
        {/* <Text style={styles.totalPrice}>${post.totalPrice} total</Text> */}

        <Text style={styles.longDescription}>
          {post.description}
        </Text>
        <Text style={styles.longDescription}>
          Activity : 
        </Text>
        <FlatList
        data={post.activity}
        renderItem={({item}) => <ActivityList act={item} />}
      />
          
      </View>
     </ScrollView>

     
  );
};

export default Post;
