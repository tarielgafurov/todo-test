import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Items from './components/Items';

function App() {

  const [state , setState] = useState([])

  const pushDataHandler = (a) => {
      setState((prevstate) => {
        return [...prevstate , a]
      })    
  }

  

  return (
    <div className="App">
      <Todo save={pushDataHandler} />
      {state.map((element) => {
        return (
          <Items key={element.id} items={element.email} />
        )
      })}
    </div>
  );
}

export default App;
