import React from 'react'
import Profile from '../../assets/home.jpeg'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
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
       I am a passionate Software Engineer with experience in developing scalable, high-performance applications. Skilled in both front-end and back-end technologies, I focus on delivering efficient and user-centric solutions. Constantly striving for improvement, I enjoy solving complex problems and collaborating within teams to achieve business and technical goals.
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