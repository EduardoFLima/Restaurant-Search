import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import RestaurantThumbnail from './RestaurantThumbnail';

const RestaurantList = ({ title, restaurants }) => {

    if (!restaurants || restaurants.length == 0){
        return null;
    }

    return (
        <View style={styles.main}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) =>
                    <RestaurantThumbnail restaurant={item} />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        marginLeft: 20,
        marginBottom: 10
    },
    title: {
        fontSize: 25,
    }
});

export default RestaurantList;