import { useState } from 'react'
import  Comp_Container from './componentContainer.jsx'
import '../styles/page_container.css'

function Page_Container () {


    return (
        <div class='page_container'>
            Page Container
            <Comp_Container />
            <Comp_Container />
            <Comp_Container />  
        </div>
    )
}

export default Page_Container