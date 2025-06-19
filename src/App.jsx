import { useState } from 'react'
import './App.css'
import Page_Container from './components/pageContainer.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [clearData, setClearData] = useState(false);

  return (
    
    <>
    
    <div className='outer_container'>
      <h1>C V Generator</h1>
      <div className='container'>
        <Page_Container />
        <div className="card">
          <button onClick={() => setClearData((clearData) => alert('confirm clear all input data'))}>
            Clear all
          </button>
        </div>
        <div className='display'>
          
        </div>
      </div>
    </div>
    
    
    </>
    
  )

}

export default App
