import React, {useState} from 'react';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import './App.css';
import IncomeExpense from './component/IncomeExpense';
import TransactionList from './component/TransactionList'
import AddTransaction from './component/AddTransaction'


import { GlobalProvider } from './context/GlobalState';

function App() {

const [counter, setCounter] = useState(0)

const increment = () => {
  setCounter(counter + 1);
};

const [inputValue, setInputValue] = useState("pedro");

let onChange = (event) =>{
  const newValue= event.target.value;
  setInputValue(newValue);
};




  return (

    <GlobalProvider >
       <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>

    {/* <div>
      <input placeholder='enter anything'/>
      {inputValue}
    </div> */}


  <Header/>
      <div className= "container">
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
  
      </div>
      </GlobalProvider>
      
    
  );
}

export default App;
