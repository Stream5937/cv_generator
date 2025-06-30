//import { useState } from 'react'
import { Comp_Container_gen,
         Comp_Container_edu,
         Comp_Container_exp
} from './componentContainer.jsx'
import '../styles/page_container.css'

function Page_Container () {


    return (
        <div className='page_container'>
            <h2>Data Input</h2>
            <Comp_Container_gen />
            <Comp_Container_edu />
            <Comp_Container_exp />  
        </div>
    )
}

export default Page_Container