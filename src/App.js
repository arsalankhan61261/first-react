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
    contact: '0900-7x22541'
  },
  {
    name: 'Anonymus',
    email: 'efg@yahoo.com',
    contact: '1245-1247548'
  }
];

let name = 'Arsalan Khan'

const App = () => { 
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
