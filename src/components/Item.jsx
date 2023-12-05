import React from 'react'

function Item({item}) {
  return (
    <div className='item-wrapper flex gap-5'>
        <h1>{item.name}</h1>
        <h1>{item.price}</h1>
    </div>
  )
}

export default Item