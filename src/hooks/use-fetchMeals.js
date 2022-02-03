import React from 'react'

export default async function useFetchMeals() {
    const response = await fetch(process.env.API)
    const data = await response.json();
    
    let meals = [];

    for(const key in data) {
        meals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
            src: data[key].src,
        });
    }

    return meals; 
}
