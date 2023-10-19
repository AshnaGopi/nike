import React from 'react';
import { useHistory } from 'react-router-dom';

 function Navbar() {

  const history=useHistory();
  const navigateToFav=()=>{
    history.push('/fav');
  }
  const navigateToCart=()=>{
    history.push('/cart');
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-flex">
        <div class="container-fluid">
          <a href="/" class="navbar-brand">Nike</a>
          <div class="navbar-collapse collapse" id="example1">
            <div class="d-flex ms-auto ">
              <ul class="navbar-nav me-auto mb-2 ms-auto p-5">
                <li class="nav-item me-3"><a class="nav-link" href="/">Find a store</a></li>
                <li class="nav-item me-3"><a class="nav-link" href="/help">Help</a></li>
                <li class="nav-item me-3"><a class="nav-link" href="/joinus">Join us</a></li>
                <li class="nav-item me-3"><a class="nav-link" href="/signin">Sign in</a></li>
              </ul>
            </div>
          </div>
        </div>

      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Nike</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 ms-auto mb-lg-0">
              <li class="nav-item me-3">
                <a class="nav-link active" aria-current="page" href="/">New & Featured</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Women</a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link active" aria-current="page" href="/">Kids</a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link active" aria-current="page" href="/">Sale</a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link active" aria-current="page" href="/">SNKRS</a>
              </li>

            </ul>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
           
            <form style={{width:"50%"}}>
              
                <input className='searchbar' style={{ border: "none",width:"100%"}} type="search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              
            </form>
           
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
            <i onClick={navigateToFav} style={{marginRight:"10px"}} class="far fa-heart"></i>
            </div>
            <div>
            <i onClick={navigateToCart}class="fas fa-shopping-bag"></i>
            </div>
            </div>
            </div>
          </div>
        </div>
      </nav>

    </div>



  );
}

export default Navbar;