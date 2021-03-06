import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const remvoeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

const fetchIngredientFailure = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILURE
    }
}

export const initIngredients = () => {
    return dispatch => {
        // axios.get('https://react-my-burger-1214.firebaseio.com/ingredients.json')
        axios.get('/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            }).catch(error => {
                dispatch(fetchIngredientFailure());
            });
    }
}