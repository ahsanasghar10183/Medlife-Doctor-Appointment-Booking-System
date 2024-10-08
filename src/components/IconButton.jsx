import React from 'react'

function IconButton({type, style, text, icon}) {
  return (
    <>
    <button className={`${type == "primary" ? " text-white bg-primarycolor hover:bg-lightprimary hover:text-primarycolor border-none shadow" : "  border-none" } rounded-3xl flex flex-row items-center gap-2 ${style}`}><span className='text-sm'>{icon}</span><span>{text}</span></button>
    </>
  )
}

export default IconButton