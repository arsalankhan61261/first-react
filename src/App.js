import './App.css'
import Count from './Count';
import { useState } from 'react';

const App = () => {
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')
  const [obj, setObj] = useState({})

  const addKeyValue = () => {
    if (obj[key] = value) {
      setObj(obj)
      // console.log(Object.entries(obj));
    } else {
      alert('please fill inputs');
      setObj({})
    }
    setKey('')
    setValue('')
  }

  return (
    <div>
      {/* <Count /> */}
      <div>
        <input name='key' value={key} onChange={e => setKey(e?.target?.value?.replace(' ', '_'))} placeholder='Enter key here..' />
        <input name='value' value={value} onChange={e => setValue(e?.target?.value)} placeholder='Enter value here..' />
        <button onClick={addKeyValue}>Add</button>
      </div>
      <div>
        {Object.entries(obj)?.map((v, i) => {
          return <p key={i}>{`${v[0]?.charAt(0)?.toUpperCase()}${v[0]?.slice(1,)}: ${v[1]}`}</p>
        })}
      </div>
    </div>
  )
};

export default App;
