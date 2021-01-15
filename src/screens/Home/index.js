import React, {useEffect, useState, useRef} from 'react';
import {View, ImageBackground, Text, Pressable, FlatList, useWindowDimensions, ScrollView, Animated} from 'react-native';
import styles from './styles';

import PostCarouselItem from '../../components/PostCarouselItem';
import CategoryList from '../../components/CategoryList';

import Fontisto from 'react-native-vector-icons/Fontisto';

import {useNavigation} from '@react-navigation/native';

import { API, graphqlOperation} from 'aws-amplify';
import { listPosts } from '../../../graphql/queries';

const HomeScreen = (props) => {
   const navigation = useNavigation();

   const [posts, setPosts] = useState([]);

   const scrollView = useRef() ;

   const width = useWindowDimensions().width;
   const height = useWindowDimensions().height;

   useEffect(() => {
     const fetchPost = async () => {
        try{
            const postResult = await API.graphql(
              graphqlOperation(listPosts)
            )

            setPosts(postResult.data.listPosts.items) ; 
        }catch(e){
          console.log(e)
        }
     }

     fetchPost();
   }, [])

  return (
    <ScrollView style={styles.container}
      ref={scrollView}
      >

      {/* Search bar Section */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={20} color={'#B03A2E'} />
        <Text style={styles.searchButtonText}> Find your interested</Text>
      </Pressable>

      {/* Header Section */}
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Localife</Text>
        <Pressable
          style={styles.button}
          onPress={ () => scrollView.current.scrollTo({x: 0, y: height, animated: true}) } 
          >
          <Text style={styles.buttonText}>Explore new experience</Text>
        </Pressable>
      </ImageBackground>

      {/* Trending */}
      <Text style={styles.trendtxt}>Trending</Text>
      <FlatList
          // ref={flatlist}
          data={posts}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
        /> 

      {/* Best around you Section */}
      <Text style={styles.bestarutxt}>Best Around You</Text>
         <FlatList
          data={posts}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
        /> 

      {/* Category Section */}
      <Text style={styles.categorytxt}>Category</Text>
      <CategoryList />
    </ScrollView>
    
  );
};


export default HomeScreen;
