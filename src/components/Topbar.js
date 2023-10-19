import React from 'react'

export default function Topbar(props) {

  return (
    <div>
      <div className='bottom'>
        <p>Shoes / Jordan Editions / Jordan 1</p>
      </div>
      <div style={{ display: "flex",justifyContent:"space-between" }}>

        <h1 style={{ marginLeft: "20px" }}>Men's Jordan 1 Shoes({props.count})</h1>
        <ul className='fi' style={{ display: "flex" }}>
          <li className='fil'>Hide Filters <i class="fas fa-sort-amount-up"></i></li>
          <li className='fil'>Sort By <i class="fas fa-sort-down"></i></li>
        </ul>

      </div>
    </div>
  )
}
