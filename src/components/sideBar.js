import React,{useState} from 'react'

function SideBar() {
    const [open, setOpen] = useState(false)
    const [openB, setOpenB] = useState(false)
    const dropdown=()=>{
        setOpen(!open);
    }
    const dropdownB=()=>{
      setOpenB(!openB);
  }
  return (
    
        <div className='items'>
            <ul className='nav-menu-items'>
              <li>Life Style</li>
              <li>Jordan</li>
              <li>Golf</li>
            </ul>
            <hr/>
            <form>
                
            <div style={{display:"flex",justifyContent:"space-between"}}><label> Gender</label> <i onClick={dropdown} class="fas fa-chevron-down"></i></div>
                    {open?
                    <div>
                    <input type="checkbox"/>Men<br/>
                    <input type="checkbox"/>Women<br/>
                    <input type="checkbox"/>Unisex<br/>
                    </div>:""
                    }
                   
                    <hr/> 
                  
                    <div style={{display:"flex",justifyContent:"space-between"}}><label>Shop By Price</label> <i onClick={dropdownB} class="fas fa-chevron-down"></i></div>
                    {openB?
                    <div>
                    <input type="checkbox"/>₹ 7 501.00 - ₹ 12 999.00<br/>
                    <input type="checkbox"/>Over ₹ 13 000.00<br/>
                    </div>:""
                    }
                    
                    <hr/> 
                    
                    <div style={{display:"flex",justifyContent:"space-between"}}><label>Sale & Offers</label> <i onClick={dropdownB} class="fas fa-chevron-down"></i></div> 
                    {openB?
                    <div>
                    <input type="checkbox"/>Sale<br/>
                    </div>:""
                    }
                    
                    <hr/> 
                 
                    <div style={{display:"flex",justifyContent:"space-between"}}><label>Size</label> <i onClick={dropdownB} class="fas fa-chevron-down"></i></div>
                    {openB?
                    <div>
                    <input type="checkbox"/>₹ 7 501.00 - ₹ 12 999.00<br/>
                    <input type="checkbox"/>Over ₹ 13 000.00<br/>
                    </div>:""
                    }
                 
                    <hr/> 
                   
                    <div style={{display:"flex",justifyContent:"space-between"}}><label>Color</label> <i onClick={dropdownB} class="fas fa-chevron-down"></i></div>
                    {openB?
                    <div>
                    <input type="checkbox"/>₹ 7 501.00 - ₹ 12 999.00<br/>
                    <input type="checkbox"/>Over ₹ 13 000.00<br/>
                    </div>:""
                    }
                    <hr/> 
                   
                    <div style={{display:"flex",justifyContent:"space-between"}}><label>Brand</label> <i onClick={dropdownB} class="fas fa-chevron-down"></i></div>
                    {openB?
                    <div>
                    <input type="checkbox"/>₹ 7 501.00 - ₹ 12 999.00<br/>
                    <input type="checkbox"/>Over ₹ 13 000.00<br/>
                    </div>:""
                    }
                    <hr/> 
                  
                    <div style={{display:"flex",justifyContent:"space-between"}}><label> Technology</label> <i onClick={dropdownB} class="fas fa-chevron-down"></i></div>
                    {openB?
                    <div>
                    <input type="checkbox"/>₹ 7 501.00 - ₹ 12 999.00<br/>
                    <input type="checkbox"/>Over ₹ 13 000.00<br/>
                    </div>:""
                    }
                   
                    <hr/> 
                    
                    <div style={{display:"flex",justifyContent:"space-between"}}><label>Shoe Height</label> <i onClick={dropdownB} class="fas fa-chevron-down"></i></div>
                    {openB?
                    <div>
                    <input type="checkbox"/>₹ 7 501.00 - ₹ 12 999.00<br/>
                    <input type="checkbox"/>Over ₹ 13 000.00<br/>
                    </div>:""
                    }
                  
                    <hr/> 
                    
                    <div style={{display:"flex",justifyContent:"space-between"}}><label>Width</label> <i onClick={dropdownB} class="fas fa-chevron-down"></i></div> 
                    {openB?
                    <div>
                    <input type="checkbox"/>₹ 7 501.00 - ₹ 12 999.00<br/>
                    <input type="checkbox"/>Over ₹ 13 000.00<br/>
                    </div>:""
                    }
              
                    <hr/> 
                   
                    <div style={{display:"flex",justifyContent:"space-between"}}><label>Closure Type</label> <i onClick={dropdownB} class="fas fa-chevron-down"></i></div>
                    {openB?
                    <div>
                    <input type="checkbox"/>₹ 7 501.00 - ₹ 12 999.00<br/>
                    <input type="checkbox"/>Over ₹ 13 000.00<br/>
                    </div>:""
                    }
             
                    <hr/> 
              
                    <div style={{display:"flex",justifyContent:"space-between"}}><label>Material</label> <i onClick={dropdownB} class="fas fa-chevron-down"></i></div>
                    {openB?
                    <div>
                    <input type="checkbox"/>₹ 7 501.00 - ₹ 12 999.00<br/>
                    <input type="checkbox"/>Over ₹ 13 000.00<br/>
                    </div>:""
                    }
               
                    <hr/> 
                 
                    <div style={{display:"flex",justifyContent:"space-between"}}><label>Features</label> <i onClick={dropdownB} class="fas fa-chevron-down"></i></div>
                    {openB?
                    <div>
                    <input type="checkbox"/>₹ 7 501.00 - ₹ 12 999.00<br/>
                    <input type="checkbox"/>Over ₹ 13 000.00<br/>
                    </div>:""
                    }
                    
                    <hr/> 
                
                    <div style={{display:"flex",justifyContent:"space-between"}}><label>Benefits</label> <i onClick={dropdown} class="fas fa-chevron-down"></i></div>
                    {openB?
                    <div>
                    <input type="checkbox"/>₹ 7 501.00 - ₹ 12 999.00<br/>
                    <input type="checkbox"/>Over ₹ 13 000.00<br/>
                    </div>:""
                    } 
                   
            </form>
          </div>

  )
}

export default SideBar;