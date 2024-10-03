import React from 'react'
import Profile from '../../assets/home.jpeg'
import { FaArrowRight } from 'react-icons/fa'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home section grid'>
    <img src={Profile} alt=""  className='home__img'/>

    <div className='home__content'>
      <div className='home__data'>
       <h1 className='home__title'>
        <span>
          I'm Nandhini <br />
        </span>
        Software Engineer
       </h1>

       <p className='home__description'>
          Experienced Laravel Developer with 3+ years of hands-on experience in building and maintaining web applications. Collaborative team player adept at gathering requirements, defining project goals and delivering solutions that exceed client expectations. Strong problem-solving abilities with a commitment to writing clean and maintainable code.
        </p>       
       <Link to='/about' className='button'>
        More About Me{''}
        <span className='button__icon'><FaArrowRight/></span>

       </Link>
      </div>
    </div>

    <div className='color__block'>

    </div>
    </section>
                                                                                                                                                                                                                                                                                                                                                                              
  )
}

export default Home