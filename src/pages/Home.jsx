import React from 'react'
import Gadgets from '../components/Gadgets'
import TotalBudgetGadget from '../gadgets/TotalBudgetGadget'

function Home({budgetTotal, budgetUsed}) {
  return (
    <div className='home-wrapper'>
        <Gadgets budgetTotal={budgetTotal} budgetUsed={budgetUsed} />
        <TotalBudgetGadget/>
    </div>
  )
}

export default Home