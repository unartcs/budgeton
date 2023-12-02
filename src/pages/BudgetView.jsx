import React from 'react'

function BudgetView({budget}) {
  return (
    <div className='budget-view-wrapper'>
        <h1>{budget.name}</h1>
        <div className='budget-view-items'>
            {budget.items.map((item)=> {
                return (
                    <div className='budget-item' key={item.name}>
                        <h2>{item.name}</h2>
                        <h2>{item.price}</h2>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default BudgetView