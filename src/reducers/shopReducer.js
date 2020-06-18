import {
    // SET_SHOP_CATEGORIES
    SET_SHOP_PRODUCTS
} from '../actions/type';

const INITIAL_STATE = {
    categories: [],
    selectedCategoryId: 0,
    productSelected: [],
    products[]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SHOP_PRODUCTS:
            return {
                ...set,
                products: action.payload
            }
    
        default: return state;
    }
} 