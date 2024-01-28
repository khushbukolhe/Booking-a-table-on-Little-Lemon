import React from 'react'
import  { Link } from 'react-router-dom'
import bannerImg from '../images/restauranfood.jpg'

const Header =()=>{

    return(
        <header className="header" >
            <section>
            <div className="banner">

             <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/Booking">
           <button>Reserve the table</button>
          </Link>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="">
            </img>
          </div>
          </section>
            </header>
    )

}

export default Header;