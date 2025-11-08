import React from 'react'
import './contact.css'
import Back from '../commen/back/Back'

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sus!4v1718283371610!5m2!1sar!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

  
  return (
    <>
    <Back title='Contact Us' subtitle='contact'/>
    <section className='contact padding'>
        <div className="container shadow flexSB">
            <div className="left row">
                <iframe src={map} title='map'></iframe>
            </div>
            <div className="right row">
              <h1>Contact us</h1>
              <p> Ullam sit neque atque vitae molestais placeat?</p>

              <div className="items grid2">
                <div className="box">
                  <h4>ADDRESS: </h4>
                  <p>198 west 21st street, suite 751 New York NY 10016</p>
                </div>
                <div className="box">
                  <h4>EMAIL: </h4>
                  <p>info@yoursite.com</p>
                </div>
                <div className="box">
                  <h4>PHONE: </h4>
                  <p>+ 1235 2355 98</p>
                </div>
              </div>
              <form action=''>
                <div className="flexSB">
                  <input type='text' placeholder='Name'/>
                  <input type='email' placeholder='Email'/>
                </div>
                <input type='text' placeholder='Subject'/>
                <textarea cols='30' rows='10'>
                  Create a message here...
                </textarea>
                <button className='primary-btn'>Send Message</button>
              </form>

              <h3>Follow Us Here</h3>
              <span> FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
        </div>
    </section>
   
      
    </>
  )
}

export default Contact
