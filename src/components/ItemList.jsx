import React from 'react'
import Item from './Item'

function ItemList({activeBudget}) {
  return (
    <div className='item-list-wrapper'>
        {activeBudget.items?.map((i)=> {
            return (
                <div className='item' key={i.id}>
                    <Item item={i}/>
                </div>
            )
        })}
    </div>
  )
}

export default ItemList