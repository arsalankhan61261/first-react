import { useReducer } from 'react';
import globalContext from './globalContext';
import globalReducer from './globalReducer';
import { ADD_STUDENT } from '../types';

const GlobalState = (props) => {
    const initialState = {
        students: []
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