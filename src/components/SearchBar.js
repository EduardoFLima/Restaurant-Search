import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const searchBar = ({ searchTerm, onSearchTermChange, onSearchTerm }) => {
    return (
        <View style={styles.backgroundStyle} >
            <Feather name="search" size={30} color="black" style={styles.searchIcon} />
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search" 
            style={styles.searchInput} 
            value={searchTerm} 
            onChangeText={onSearchTermChange}
            onEndEditing={() => onSearchTerm(searchTerm)}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row'
    },
    searchIcon: {
        alignSelf: 'center',
        marginHorizontal: 10
    },
    searchInput: {
        flex: 1
    }
});

export default searchBar;