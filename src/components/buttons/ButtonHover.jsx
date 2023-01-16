import React from 'react'
import './button.css'

function ButtonHover({tittle}) {


  return (
    <>
        <button className="ButtonHoverPrimary">
            {tittle}
        </button>
    </>
  )
}

export default ButtonHover