import React from 'react'

export default function Topbar() {
  return (
    <div>
      <div className='bottom'>
        <p>Shoes / Jordan Editions / Jordan 1</p>
      </div>
      <div style={{ display: "flex" }}>

        <h1 style={{ marginLeft: "20px" }}>Men's Jordan 1 Shoes(20)</h1>
        <ul className='fi' style={{ display: "flex", float: "right" }}>
          <li className='fil'>Hide Filters <i class="fas fa-sort-amount-up"></i></li>
          <li className='fil'>Sort By <i class="fal fa-sort-down"></i></li>
        </ul>

      </div>
    </div>
  )
}
