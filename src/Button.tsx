import React from 'react'

export default function Button(prop: { text: string }) {
  return (
    <div className='rounded-outer bg-pink-200 text-white p-4 w-fit self-center'>
          <a href=''>{prop.text}</a>
    </div>
  )
}
