import React from 'react';
import {Header} from './Components/Header'
import{Balance} from './Components/Balance'
import {IncomeExpenses} from './Components/IncomeExpenses'
import {TranctionList} from './Components/TranctionList'
import{AddTransaction} from './Components/AddTransaction'
import{GlobalProvider} from './Context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <TranctionList/>
     <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
