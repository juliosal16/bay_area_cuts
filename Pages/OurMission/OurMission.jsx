import React from 'react'
import './OurMission.css'
import FeelYourBest from '../FeelYourBest/FeelYourBest'
import Shop from '../../img/shopp.jpg'
import Sfo from '../../img/sfo.jpg'

const OurMission = () => {
  return (
    <div className='centerTxt sfo'>
      <div className="missionBox">
      <h2 className='centerTxt'>602 N. HOOVER ST.</h2>
      </div>
      <img src={Sfo} alt="Sfo ticket" />
      <div className="missionTxt">
      <p>We are no strangers to the neighborhood. Our roots have always been in the heart of Virgil Village. It was there, at Vinny’s Barbershop, where we met our loyal friends and customers. Since closing its doors we’ve been excited to build upon the great quality and professionalism you’ve come to expect, and you’ll find it here…up on Hoover. </p>
      </div>
      <FeelYourBest pic={Shop} mainTxt={'How To Book'} infoTxt={'We work on an appointment basis using an online reservation system. Walk-ins are welcomed but not always guaranteed. Use the link below to find a time that works best for you'}/>
    </div>
  )
}


export default OurMission