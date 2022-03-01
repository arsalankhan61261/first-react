import { WORDS_COUNT } from '../types'

const countReducer = (state={}, action) => {
    switch (action?.type) {
        case WORDS_COUNT: {
            return {...state, user: action?.count}
        }
        default: {
            return state
        }
    }
}

export default countReducer