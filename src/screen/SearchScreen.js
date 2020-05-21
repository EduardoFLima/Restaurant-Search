import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

export default () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [restaurants, getRestaurants, errorMessage] = useRestaurants();

    return (
        <>
            <View style={styles.searchbarView}>
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchTermChange={setSearchTerm}
                    onSearchTerm={() => getRestaurants(searchTerm)}
                />
                {!!errorMessage ? <Text style={{ color: 'red', fontStyle: 'bold' }} >{errorMessage}</Text> : null}
                <Text>Foram encontrados {restaurants.length} restaurante(s)!</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <RestaurantList title="Baratex" restaurants={filterRestaurant(restaurants, "$")} />
                <RestaurantList title="Preco medio" restaurants={filterRestaurant(restaurants, "$$")} />
                <RestaurantList title="#caropacarai" restaurants={filterRestaurant(restaurants, "$$$")} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    searchbarView: {
        margin: 20,
    }
});

const filterRestaurant = (restaurants, level) => {
    return restaurants.filter((restaurant) => restaurant.price === level);
};