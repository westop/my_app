import React, { useState } from 'react'

function App() {


  const [likes, setlikes] = useState(0)
  const [value, setValue] = useState('input txt(e)')

  function increment() {
    setlikes(likes + 1);
  }

  function decrement() {
    setlikes(likes - 1);
  }





  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={event =>setValue(event.target.value)} 
        />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
