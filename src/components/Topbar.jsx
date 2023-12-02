import React from 'react'

function Topbar() {
  return (
    <div className='topbar-wrapper bg-slate-100 p-5 flex gap-5'>
        <input className='topbar-input bg-slate-100 px-2 rounded-sm border-[0.1rem]' type='text' name='searchbar' placeholder='Search...'/>

    </div>
  )
}

export default Topbar