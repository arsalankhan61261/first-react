import { useReducer } from 'react';
import globalReducer from '../Posts/globalContext';
import globalContext from '../Posts/globalReducer';
import { ADD_POSTS } from '../types';

const GlobalState = (props) => {
    const initialState = {
        posts: [],
        page: 1
    }

    const [state, dispatch] = useReducer(globalReducer, initialState)

    return <globalContext.Provider
            value={{
                posts: state.posts
            }}
    >
        {props.children}
    </globalContext.Provider>
}

export default GlobalState;