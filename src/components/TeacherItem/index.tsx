import React from 'react'

import whatsappIcon from '../../assets/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/27930968?s=460&u=7655d99cccb0a829d93c883c32975976d157e470&v=4" alt="michael"/>
            <div>
                <strong>Michael</strong>
                <span>Historia</span>
            </div>
        </header>
        
        <p>
            O professor sábio sabe que cinquenta e cinco minutos de trabalho mais cinco minutos de risada valem o dobro do que sessenta minutos de trabalho invariável.
        </p>
        
        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem