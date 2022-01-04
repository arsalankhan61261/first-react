// import { ADD_STUDENT } from '../types';
import { ADD_POSTS } from '../types';

const globalReducer = (state, action) => {
    switch (action.type) {
        case ADD_POSTS:
            return {
                ...state,
                students: [...state.students, action.payload] 
            }
        default:
            return {
                ...state
            }
    }
}

export default globalReducer;