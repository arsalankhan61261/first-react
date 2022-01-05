import { useReducer } from 'react';
import globalReducer from './globalContext';
import globalContext from './globalReducer';
import { ADD_POSTS } from '../types';

const GlobalStatePosts = (props) => {
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

export default GlobalStatePosts;