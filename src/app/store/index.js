import { createStore } from 'redux';
import { initialState } from '../../server/initialState';

export const store = createStore(
    function reducer(state = initialState, action){
        return state;
    }
)