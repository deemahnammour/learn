import React from 'react'
import './hero.css'
import Title from '../../commen/title/Title'
import './../../about/About.css'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
            <div className="row">
              <Title subtitle='welcome to academia' title='Best online education expertise'/>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="button">
                <button className='primary-btn'> GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i></button>
                <button > VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i></button>
              </div>
            </div>
        </div>
      </section>
      <div className="marigin"></div>
    </>
  )
}

export default Hero
