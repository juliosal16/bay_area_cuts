import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from '../About/About'
import FeelYourBest from '../FeelYourBest/FeelYourBest'
import Services from '../Services/Services'
import Quote from '../Quote/Quote'
import Comb from '../../img/combs.jpg'
import './Home.css'


const Home = () => {
  return (
    <div>
      <div className="homeBox">
      <h2 className='centerTxt'>Bay Area Cuts</h2>
      </div>
    <About/>
    <FeelYourBest pic={Comb} mainTxt={'Feel your best!'} infoTxt={'Silverlake Barbershop is fresh new shop built on classic barber tradition. Our experienced staff is here to provide you with top quality service at a time that works best for you.'}/>
    <Services/>
    <Quote/>
    
    </div>
  )
}

export default Home