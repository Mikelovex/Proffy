import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/icons/study.svg'
import giveClassesIcons from '../../assets/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/icons/purple-heart.svg'


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                  <img src={logoImg} alt=""/>
                  <h2>sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcons} alt="Dar aulas"/>
                        Dar aulas
                    </Link>

                </div>

                <span className="total-connections">
                    Total de 200 conexões ja realizadas <img src={purpleHeartIcon} alt="coração roxo"/>
                </span>

            </div>
        </div>
    )
}

export default Landing