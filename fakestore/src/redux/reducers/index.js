import {combinedReducers} from 'redux';
import {productReducer} from './productReducer';

const reducers = combinedReducers({
    allProducts:productReducer,
});