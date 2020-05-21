import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

export default ({ navigation }) => {
    const id = navigation.getParam('id');

    const [details, setDetails] = useState(null);

    const getRestaurantDetails = async (id) => {
        const results = await yelp.get(`/${id}`);
        setDetails(results.data);
    };
    
    useEffect(() => {
        getRestaurantDetails(id);
    }, []);

    if (!details){
        return null;
    }

    return (
        <>
            <Text style={styles.restaurantTitle} >{details.name}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={details.photos}
                keyExtractor={(item) => item}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}} />
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        margin: 20,
        width: 340, 
        height: 200,
        borderRadius: 6
    },
    restaurantTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 20,
        marginBottom: 10
    }
});

const filterRestaurant = (restaurants, level) => {
    return restaurants.filter((restaurant) => restaurant.price === level);
};