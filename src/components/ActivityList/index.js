import React from 'react' ;
import {View, Text, Image, Pressable} from 'react-native';

const ActivityList = (props) => {
    const activity = props.act ;

return(
    <Text>
        {activity}
    </Text>
);

};

export default ActivityList ;