import React from 'react'

function Button({text, type, style, onclick_fun}) {
  return (
    <>
    <button onClick={()=>{
      onclick_fun}} className={`${style} rounded-3xl shadow   ${type == "primary" ? " text-white bg-primarycolor hover:bg-lightprimary hover:text-primarycolor border-none shadow" : "bg-transparent border-2 border-primarycolor text-primarycolor"}`}>
        {text}
    </button>
    
    </>
  )
}

export default Button