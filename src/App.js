import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import Header from './components/Header/Header';
import React, { useState } from "react";
import AdminPanel from './components/AdminPanel/AdminPanel';
import { Context } from './context';
import { useEffect } from 'react';

function App() {

  document.querySelector('title').innerHTML = 'Назва сайту'

  const [Reserve, setReserve] = useState()
  const [onTable, setOnTable] = useState()
  const [currentCard, setCurrentCard] = useState()
  const [currentTable, setCurrentTable] = useState()
  console.log(1)
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('Reserve'));
    if (items) {
      setReserve(items);
    }
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('onTable'));
    if (items) {
      setOnTable(items);
    }
  }, []);

  if (!onTable){
    setOnTable([-1, -1, -1, -1])
  }

  if(!Reserve){
    setReserve([])
  }

  useEffect(() => {
    localStorage.setItem('Reserve', JSON.stringify(Reserve));
  }, [Reserve]);

  useEffect(() => {
    localStorage.setItem('onTable', JSON.stringify(onTable));
  }, [onTable]);

  


  function dragStart(e, card){
    //e.preventDefault()
    setCurrentCard(e.target.getAttribute("card-id"))
    e.target.style.opacity = ".2"
  }

  function dragover(e){
    setCurrentTable(e.target.getAttribute("table-id"))
  }

  function dragleave(e){
   // setCurrentTable(null)
   
  }

  function dragEnd(e){
    
    if (currentTable != null){
      
      let arr = []
      
      for(let i = 0; i<onTable.length; i++){
        if(i == currentTable){
          arr.push(currentCard)
        }else{
          arr.push(onTable[i])
        }
      }

      setOnTable(arr)
    }
    
    setCurrentCard(null)
    e.target.style.opacity = '1'

  }

  const [isForm, setIsForm] = useState(false)
  
  return (
      <Context.Provider value={{Reserve, setReserve, 
      onTable, setOnTable, dragStart, dragover, dragEnd, dragleave}}>
      <div className="App">
        <div className='background'>
          <div className='wrapper'>
            {/* className={style.checkbox} */}
            <Header>
            <input type="checkbox" 
              checked={isForm}
              onChange={event => setIsForm(event.target.checked)}
              />
              <p>   (перемикач режимів)</p>
              
            </Header>
            
            {isForm
              ?<LoginForm
                setReserve={setReserve}
              ></LoginForm>
              :<AdminPanel
                Reserve={Reserve}
              ></AdminPanel>
            }
          </div>
        </div>
      </div>
      </Context.Provider>
  );
}

export default App;
