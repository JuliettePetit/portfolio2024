import React from 'react'

export default function Switch(props:{onclick:React.MouseEventHandler}) {
  return (
    <div className='w-fit'>
        <label htmlFor="one">
          <input id="one" onClick={props.onclick} type="checkbox"/>
      </label>
    </div>
  )
}