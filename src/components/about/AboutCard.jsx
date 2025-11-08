import React from 'react'
import about from './../img/about2.jpg'
import AWrapper from './AWrapper'
import './About.css'
import {homeAbout} from './../../data'
import Title from './../../components/commen/title/Title'


const AboutCard = () => {

  return (
    <>
    <section className='aboutHome'>
        <div className='container flexSB'>

          <div className=" left row">
            <img src={about} alt=''/>
          </div>

          <div className="right row">
            <Title subtitle='LEARN ANYTHING'  title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val)=> (

                <div className="item flexSB">

                  <div className="img">
                    <img src={val.cover} alt=''/>
                  </div>
                  
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
            
        </div>

    </section>
    <AWrapper/>
    </>
      
    
  )
}

export default AboutCard