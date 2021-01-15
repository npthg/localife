import React , {useEffect, useState} from "react";
import { View, Text, FlatList } from "react-native";
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/native';

import { API, graphqlOperation} from 'aws-amplify';
import { getPost } from '../../../graphql/queries';



const PostScreen = (props) => {
   const route = useRoute();
   const [posts, setPosts] = useState([]);
   const { postId } = route.params ;
   
   useEffect(() => {
     const fetchPost = async () => {
        try{
            const postResult = await API.graphql(
              graphqlOperation(getPost, {id: postId})
            )
   
            setPosts(postResult.data.getPost) ; 
        }catch(e){
          console.log(e)
        }
     }
   
     fetchPost();
   }, [])
   
  return (
    <View>
      <DetailedPost post={posts} />
    </View>
  );
};

export default PostScreen;