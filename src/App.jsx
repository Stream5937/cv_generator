import { useState } from 'react'
import './App.css'
import Page_Container from './components/pageContainer.jsx'

function App() {
  
  const [clearData, setClearData] = useState(false);

  return (
    
    <>
    
    <div className='outer_container'>
      <div className='container'>
        <Page_Container />
        <div className="card">
          <button onClick={() => setClearData((clearData) => alert('confirm clear all input data'))}>
            Clear all
          </button>
        </div>
      </div>
    </div>
    
    
    </>
    
  )

}

export default App
