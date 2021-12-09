import './App.css';

let obj = [
  {
    name: 'Arsalan',
    email: 'abc@yahoo.com',
    contact: '0343-xx87560'
  },
  {
    name: 'Osama',
    email: 'xyz@gmail.com',
    contact: '0900-7x22541',
    address: 'Karachi.'
  },
  {
    name: 'Anonymus',
    email: 'efg@yahoo.com',
    contact: '1245-1247548'
  }
]

let name = 'Arsalan Khan'

const App = () => { 
  return (
    <div>
      <h1>{name}</h1>
      <h2>Names & Emails</h2>
      {obj?.map((v, i) => {
        return (
          <div key={i}>
            <span>{i + 1}) Name: {v?.name}</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Email: <b>{v?.email}</b></span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Contact: {v?.contact}</span>
            <br />
            {v?.address && <span>&nbsp;&nbsp;&nbsp;&nbsp;Address: <b>{v?.address}</b></span>}
          </div>
        )
      })}
    </div>
  )
};

export default App;
