import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const getRestaurants = async (term) => {
        try {
            const results = await yelp.get('/search',
                {
                    params: {
                        term,
                        limit: 50,
                        location: 'Sao Paulo'
                    }
                }
            );
            setRestaurants(results.data.businesses);
        } catch (ex) {
            setErrorMessage('Algo deu errado!')
        }
    };

    useEffect(() => {
        getRestaurants('', setRestaurants, setErrorMessage)
    }, []);

    return [restaurants, getRestaurants, errorMessage];
}