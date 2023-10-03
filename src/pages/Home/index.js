import React, { useState, useEffect } from 'react'
import Cards from '../../components/Cards';
import data from "../../data/data.json";
import Topbar from '../../components/Topbar';

export default function Land() {
  const [card, setCard] = useState(data.cards)

  const removeShoe = (k) => {
    const newShoe = [...card];
    newShoe.splice(k, 1);
    setCard(newShoe);
  }

  return (
    <div>
      <Topbar />
      <div className='row'>
        <div className='side'>
          <div className='items'>
            <ul className='nav-menu-items'>
              <li>Life Style</li>
              <li>Jordan</li>
              <li>Golf</li>
            </ul>
          </div>
          <div className='items'>

          </div>
        </div>
        <div className='sideb'>
          {
            card.map((itm, k) => {
              return (
                <div>
                  <i key={itm.k} onClick={() => removeShoe(k)} class="fa-solid fa-xmark">
                    <Cards key={itm.k} {...data.cards[k]} />
                  </i>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>

  )
}
