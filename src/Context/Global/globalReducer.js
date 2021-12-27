import { ADD_STUDNET } from '../types';

const globalReducer = (state, action) => {
    switch (action.type) {
        case ADD_STUDNET:
            return {
                ...state
            }
    
        default:
            return {
                ...state
            };
    }
}