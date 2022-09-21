import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "../styles/Nav.scss"

const Nav = () => {

    const [show, hadleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                hadleShow(true)
            }else {hadleShow(false)}
        })
   
      }, [])
    
  return (
    <div className={`nav ${show && "nav_black"}`} >
        <img
        className='nav_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
          <img
            className='nav_avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt="Avatar Logo"
          />
    </div>
  )
}

export default Nav