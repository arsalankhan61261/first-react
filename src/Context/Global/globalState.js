import { useReducer } from 'react';
import globalContext from './globalContext';
import globalReducer from './globalReducer';
import { ADD_STUDENT } from '../types';
import { ADD_POSTS } from '../types';

const GlobalState = (props) => {
    // Initial state fro students
    // const initialState = {
    //     students: []
    // }
    const initialState = {
        posts: [],
        page: 1,
    }

    const [state, dispatch] = useReducer(globalReducer, initialState)
    // console.log(useReducer(globalReducer, initialState));

    // Function to add Student
    const addStudent = (newStudent) => dispatch({
        type: ADD_STUDENT,
        payload: newStudent
    })

    return <globalContext.Provider
        value={{
           students: state.students,
           addStudent: addStudent
        }}
    >
        {props.childern}
    </globalContext.Provider>
}

export default GlobalState;