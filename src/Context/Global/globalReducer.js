import { ADD_STUDNET } from '../types';

const globalReducer = (state, action) => {
    switch (action.type) {
        case ADD_STUDNET:
            return {
                ...state,
                students: [...state.students, action.payload] 
            }
    
        default:
            return {
                ...state
            };
    }
}

export default globalReducer;