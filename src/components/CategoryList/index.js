import React from 'react' ;
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import category from '../../../assets/data/category' ;

const CategoryList = (props) => {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: 10,
                        paddingBottom: 10,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 18,
                    }}
                    // onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 75,
                            height: 75,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#F6F6F6"
                        }}
                    >
                        <Fontisto
                            name={item.icon}
                            size={30}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: 5,
                            color: "#1E1F20",
                            fontSize: 12, 
                            lineHeight: 22 
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View>
                <FlatList
                    data={category}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: 10, alignItems: 'center', justifyContent: 'space-between' }}
                    numColumns = {3}
                />
            </View>
        )

};

export default CategoryList ;