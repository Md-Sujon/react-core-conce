import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {
const friend = ['sujon','smita','rakib','mamun','twfiq'] ;
const person =[
  {name: 'John', age: 28, id:1},
  {name: 'sujon', age: 29, id:2},
  {name: 'bilkish', age: 22, id:3},
  {name: 'Abir', age: 21, id:4},
  {name: 'Cokina', age: 30, id:5}
]



  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
       <ul>
       {
          friend.map(friendName => <li>{friendName}</li>)
          
        }
        {
          person.map(personName => <li>{personName.name}</li>)
        }
       </ul>

       {
         person.map(pd => <Person pd={pd}></Person>)
       }
      
      </header>
    </div>
  );
}

function User(){
const [user,setUser] = useState([]);
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data =>setUser(data))
}, [])

return (
  <div>
    <h1>Daynamic User: {user.length}</h1>
    <ul>
      {user.map(user =><li>{user.name}</li>)}
    </ul>
  </div>
)
}


function Counter(){
  const [count, setCount] = useState(0);
     return (
      <div>
      <h1>Count: {count}</h1>
      <button onClick={() =>setCount(count+15)}>Click me +</button>
      <button onClick={() =>setCount(count-5)}>Click me -</button>
 
    </div>
     )
}

function Person (props){

 const {name,age,id} = props.pd
 console.log(props.pd);

  const personStyle = {
    color: 'red',
    border: '2px solid gold',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px', 
    backgroundColor: 'lightGray'
  }
  return (
    <div style={personStyle}>
    <h1>Name: {name}</h1>
    <h5>Age: {age}</h5>
    <h5>Address: {id}</h5>
    <button>Buy now</button>
  </div>
  )
}

export default App;
