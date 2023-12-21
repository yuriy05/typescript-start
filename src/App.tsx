import React from 'react';
import './App.css';

function App() {

  //My first object type written in TypeScript
  const list: {name: string; age: number; isAdmin?: boolean} = {
    name: "Lolita",
    age: 25,
    isAdmin: true,
  }

  //My first array type written in TypeScript
  const array: (string)[] = ["John", "Paul", "Armin"]

  //My first set type written in TypeScript
  const set: Set<string> = new Set()
  set.add("Paul")
  
  //My first function written in TypeScript
  function writeIntoTheConsole(message: {}):void {
    console.log(message)
  }
  writeIntoTheConsole(list)

  return (
    <div className="App">
      <header className="App-header">
        <p>{list.name}</p>
        <p>{array.sort().join(" ")}</p>  
        <p>{set}</p>
      </header>
    </div>
  );
}

export default App;
