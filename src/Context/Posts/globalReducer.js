import { ADD_POSTS } from '../types'

const globalReducer = (state, action) => {
    switch (action.type) {
        case ADD_POSTS:
            return state;
        default:
            return state;
    }
}

export default globalReducer;