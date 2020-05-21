import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { withNavigation }  from 'react-navigation'


const RestaurantThumbnail = ({ restaurant, navigation }) => {
    return (
        <View style={styles.thumbnailMain} >
            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', { id: restaurant.id } )  } >
                <Image style={styles.thumbnailImage} source={{uri: restaurant.image_url}} />
            </TouchableOpacity>
            <Text style={styles.textName} >{restaurant.name}</Text>
            <Text style={styles.thumbnailDesc}>Média: {restaurant.rating} / {restaurant.review_count} Avaliações</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    thumbnailMain: {
        marginVertical: 10,
        marginRight: 10,
    },
    thumbnailImage: {
        width: 240,
        height: 120,
        borderRadius: 4
    },
    textName: {
        fontWeight: 'bold'
    },
    thumbnailDesc: {
        flexDirection: 'row'
    },

});

export default withNavigation(RestaurantThumbnail);

const exampleObj = {
    "restaurant": {
      "alias": "moinho-de-pedra-são-paulo",
      "categories": [
        {
          "alias": "vegetarian",
          "title": "Vegetarian",
        },
      ],
      "coordinates": {
        "latitude": -23.6353207,
        "longitude": -46.6961517,
      },
      "display_phone": "+55 11 5181-0581",
      "distance": 11447.261446374838,
      "id": "lLWo0M_QdvLua3WJ34i2BA",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/jB8LemRxUdh5O1md7HMpIg/o.jpg",
      "is_closed": false,
      "location": {
        "address1": "R. Francisco de Morais 227",
        "address2": "",
        "address3": "",
        "city": "São Paulo",
        "country": "BR",
        "display_address": [
          "R. Francisco de Morais 227",
          "São Paulo - SP 04714-010",
          "Brazil",
        ],
        "state": "SP",
        "zip_code": "04714-010",
      },
      "name": "Moinho de Pedra",
      "phone": "+551151810581",
      "price": "$$$",
      "rating": 4.5,
      "review_count": 16,
      "transactions": [],
      "url": "https://www.yelp.com/biz/moinho-de-pedra-s%C3%A3o-paulo?adjust_creative=S_yhiuFeNjNz_IeRET1j5Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=S_yhiuFeNjNz_IeRET1j5Q",
    },
  };
  