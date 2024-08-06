import React from 'react'
import './Barbers.css'
import Worker1 from '../../img/worker1.jpg'
import Worker2 from '../../img/worker2.jpg'
import Worker3 from '../../img/worker3.avif'
import Worker4 from '../../img/worker4.avif'
import Worker5 from '../../img/worker5.avif'
import Worker6 from '../../img/worker6.avif'

const Barbers = () => {
  return (
  <>
      <h1 className='centerTxt barberTxt'>Meet our team</h1>
       <div className='barberBox'>
          <div className="card">
            <img className='cardImg'  src={Worker2} alt="Fabolous"/>
            <h1>Fabolous</h1>
            <p className="barberTitle">CEO & Founder</p>
            <p className="barberTitle">Harvard University</p>
          </div>
        <div className="card">
          <img className='cardImg'  src={Worker1} alt="John"/>
          <h1>Jane Blade</h1>
          <p className="barberTitle">Barber</p>
          <p className="barberTitle">Yale University</p>
      </div>
    </div>
       <div className='barberBox'>
          <div className="card">
            <img className='cardImg'  src={Worker3} alt="John"/>
            <h1>Prince</h1>
            <p className="barberTitle">Barber</p>
            <p className="barberTitle">Boston University</p>
          </div>
        <div className="card">
          <img className='cardImg'  src={Worker4} alt="John"/>
          <h1>Andy</h1>
          <p className="barberTitle">Barber/Bouncer</p>
          <p className="barberTitle">Stanford University</p>
      </div>
    </div>
       <div className='barberBox'>
          <div className="card">
            <img className='cardImg'  src={Worker5} alt="John"/>
            <h1>Luis</h1>
            <p className="barberTitle">Barber</p>
            <p className="barberTitle">Colombia University</p>
          </div>
        <div className="card">
          <img className='cardImg'  src={Worker6} alt="John"/>
          <h1>Angie</h1>
          <p className="barberTitle">Barber</p>
          <p className="barberTitle">Colombia University</p>
      </div>
    </div>
  </>
  )
}

export default Barbers