import './App.css'
import { useState, useEffect } from 'react';
// import {PropsDemo} from './Components'
import * as Components from './Components'
// import GlobalState from './Context/Global/GlobalState';
// import GlobalState from './Context/Global/GlobalState';
// import Students from './Components/students/Students';

const App = () => {
  // const [key, setKey] = useState('')
  // const [value, setValue] = useState('')
  // const [obj, setObj] = useState({})
  // const [message, setMessage] = useState('Hello i send message to you.')
  const [students, setStudents] = useState([])

  const addStudent = (newStudent)  => setStudents([...students, newStudent])

  // const addKeyValue = () => {
  //   if (obj[key] = value) {
  //     setObj(obj)
  //     // console.log(Object.entries(obj));
  //   } else {
  //     alert('please fill inputs');
  //     setObj({})
  //   }
  //   setKey('')
  //   setValue('')
  // }

  return (
    <div>
      <h1>Context API with axios</h1>
      <Components.Posts />
    </div>
    // <div>
    //   <h1>Axiom Students</h1>
    //   <Components.Form addStudent={addStudent} />
    //   <Components.Students students={students} />
    // </div>
    // <GlobalState>
    //   <div>
    //     <h1>Axiom Students</h1>
    //     <Components.Form addStudent={addStudent} />
    //     <Components.Students students={students} />
    //   </div>
    // </GlobalState>
    // <PropsDemo message={message} />
    // <Count />
    // <div>
    // <Count />
    // <div>
    //   <input name='key' value={key} onChange={e => setKey(e?.target?.value?.replace(' ', '_'))} placeholder='Enter key here..' />
    //   <input name='value' value={value} onChange={e => setValue(e?.target?.value)} placeholder='Enter value here..' />
    //   <button onClick={addKeyValue}>Add</button>
    //   </div>
    //   <div>
    //     {Object.entries(obj)?.map((v, i) => {
    //       return <p key={i}>{`${v[0]?.charAt(0)?.toUpperCase()}${v[0]?.slice(1,)}: ${v[1]}`}</p>
    //     })}
    //     </div>
    // </div>
  )
}

export default App;
