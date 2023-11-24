import React from 'react'
import './govtDashboard.css'
import GovtCard from './cards/govtCard'

function GovtDashboard() {
    const govtCards = [];

  for (let i = 1; i <= 2; i++) {
    govtCards.push(<GovtCard key={i} text='cardText'/>);
  }
  return (
    <div className='dashboard'>
        <div className='navbar'>GOVERNMENT DASHBOARD</div>
        <h1 className="ml-3 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl mt-4">Pending Approvals</h1>
        {govtCards}
        
</div>
  )
}

export default GovtDashboard