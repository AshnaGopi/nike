import React from 'react'
import data from "../../data/data.json";
export default function Shoes() {
  return (
    <div>
        <div className='page-content'>
          <img className='shoe-img' src={data.cards[0].image} />
          <div className='scroll-content'>
            <h4>Air Jordan 1 Mid</h4>
            <h6>Men's Shoes</h6>
            <br />
            <h5>MRP : ₹ 11 495.00</h5>
            <br />
            <h6 style={{ color: "grey" }}>incl. of taxes</h6>
            <h6 style={{ color: "grey" }}>(Also includes all applicable duties)</h6>
            <div style={{ height: "90px", width: "fit-content", padding: "10px", display: "flex", overflowY: "hidden", objectFit: "contain" }}>
              <div className='stamp'><img className='simg' src={data.cards[0].image} /></div>
              <div className='stamp'><img className='simg' src={data.cards[0].image} /></div>
              <div className='stamp'><img className='simg' src={data.cards[0].image} /></div>
              <div className='stamp'><img className='simg' src={data.cards[0].image} /></div>
              <div className='stamp'><img className='simg' src={data.cards[0].image} /></div>
            </div>
            <h5>Select Size<span style={{ marginLeft: "150px", color: "grey" }}>Size Chart</span></h5>
            <div className='chart'>
              <div className='sidek'>
                <div className='size'>UK 9.8</div>
                <div className='size'>UK 8</div>
                <div className='size'>UK 5.7</div>
                <div className='size'>UK 9</div>
                <div className='size'>UK 7</div>
                <div className='size'>UK 6.9</div>
                <div className='size'>UK 8</div>
                <div className='size'>UK 10</div>
                <div className='size'>UK 9.8</div>
                <div className='size'>UK 7</div>
                <div className='size'>UK 6</div>
              </div>
            </div>
            <button className='button-cart add'>Add to Bag</button>
            <button className='button-cart fav'>Favourite</button>
            <p style={{ fontSize: "20px", lineHeight: "30px" }}>Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean,
              classic look that's familiar yet always fresh. With an iconic design that pairs perfectly
              with any 'fit, these kicks ensure you'll always be on point</p>
            <ul>
              <li>Colour Shown: Pink Foam/Black</li>
              <li>Style: DA2778-601</li>
            </ul>
          </div>
        </div>
       
      </div>
  )
}
