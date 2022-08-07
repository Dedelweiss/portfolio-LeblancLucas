import './index.scss'
// import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faJira,
  faSass,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBriefcase,
  faTerminal,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

const Career = () => {
  const toggleInternship = (event) => {
    //Try all the elements with the id 'internshipCard' and catch the error
    try {
      const internshipCard = document.querySelectorAll('.internshipCard')
      const internshipBtn = document.querySelectorAll('.internshipBtn')
      internshipCard.forEach((el) => {
        el.classList.toggle('hidden')
      })
      internshipBtn.forEach((el) => {
        el.classList.toggle('bg-[#2196F3]')
        el.classList.toggle('bg-white')
      })
    } catch (error) {
      console.log(error)
    }
  }
  const toggleSeasonal = (event) => {
    //Try all the elements with the id 'seasonalCard' and catch the error
    try {
      const seasonalCard = document.querySelectorAll('.seasonalCard')
      const seasonalBtn = document.querySelectorAll('.seasonalBtn')
      seasonalCard.forEach((el) => {
        el.classList.toggle('hidden')
      })
      seasonalBtn.forEach((el) => {
        el.classList.toggle('bg-[#ff8320]')
        el.classList.toggle('bg-white')
      })
    } catch (error) {
      console.log(error)
    }
  }
  const toggleAll = (event) => {
    //Try all the elements with the id 'allCard' and catch the error
    try {
      const internshipCard = document.querySelectorAll('.internshipCard')
      const internshipBtn = document.querySelectorAll('.internshipBtn')
      const seasonalCard = document.querySelectorAll('.seasonalCard')
      const seasonalBtn = document.querySelectorAll('.seasonalBtn')
      internshipCard.forEach((el) => {
        if (el.classList.contains('hidden')) {
          el.classList.toggle('hidden')
        }
      })
      internshipBtn.forEach((el) => {
        if (el.classList.contains('bg-white')) {
          el.classList.toggle('bg-white')
          el.classList.add('bg-[#2196F3]')
        }
      })
      seasonalCard.forEach((el) => {
        if (el.classList.contains('hidden')) {
          el.classList.toggle('hidden')
        }
      })
      seasonalBtn.forEach((el) => {
        if (el.classList.contains('bg-white')) {
          el.classList.toggle('bg-white')
          el.classList.add('bg-[#ff8320]')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  const { t } = useTranslation()
  const [letterClass, setLetterClass] = useState('text-animate')
  const careerArray = t('careerPage.career').split('')

  useEffect(() => {
    async function changeClass() {
      await setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
    changeClass()
  }, [])

  const activeModal = (event) => {
    window.scroll({ top: 0, left: 0 })
  }

  return (
    <>
      <div className="container career-page pt-8">
        <div className="btns sm:flex  space-x-4 lg:justify-center pb-8">
          <button
            onClick={toggleAll}
            className="allBtn btn border-none text-black bg-white hover:text-white btn-xs sm:btn-sm md:btn-md"
          >
            {t('careerPage.all')}
          </button>
          <button
            onClick={toggleInternship}
            className="internshipBtn btn border-none text-black hover:text-white bg-[#2196F3] btn-xs sm:btn-sm md:btn-md"
          >
            {t('careerPage.internship')}
          </button>
          <button
            onClick={toggleSeasonal}
            className="seasonalBtn btn border-none text-black hover:text-white bg-[#ff8320] btn-xs sm:btn-sm md:btn-md"
          >
            {t('careerPage.seasonal_job')}
          </button>
        </div>

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={careerArray}
              idx={15}
            />
          </h1>
        </div>

        <div className="career-timeline">
          <VerticalTimeline>
            <VerticalTimelineElement
              id="internshipCards"
              className="internshipCard vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(33, 150, 243)',
                color: '#fff',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)',
              }}
              date="Septembre 2021 - Février 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />}
            >
              <h2 className="vertical-timeline-element-title">
                {t('careerPage.internship')}
              </h2>
              <h3 className="vertical-timeline-element-title">
                Co-fondateur et Développeur
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Université de Bucarest - Roumanie
              </h4>
              <p className="vertical-timeline-text">
                Plateforme née de l'idée de 5 étudiants en ingénierie de l'école
                d'ingénieur CESI, dont moi-même. Cette opportunité nous a permis
                de remplacer le stage de 4ème année par un projet
                entrepreneurial. J'ai donc travaillé 4 mois à l'Université de
                Bucarest sur ce projet de plateforme web avec les 4 membres de
                mon équipe. Cela m'a permis de travailler sur mes connaissances
                dans le domaine de l'entrepreneuriat, du développement de projet
                mais aussi dans le contact avec des acteurs externes ou des
                partenaires potentiels lors d'un projet. Ces quelques mois m'ont
                également permis de renforcer mon anglais, tant au sein du
                groupe qu'avec les personnes rencontrées en Roumanie. Cela m'a
                également permis de travailler avec différents partenaires du
                CESI, tant dans le domaine du développement que de
                l'entrepreneuriat. dans l'entreprenariat.
              </p>
              <div className="pt-4">
                <label
                  onClick={activeModal}
                  htmlFor="my-modal-6"
                  id="btn"
                  className="btn modal-button"
                >
                  Voir plus
                </label>
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">
                      Congratulations random Internet user!
                    </h3>
                    <p className="py-4">
                      You've been selected for a chance to get one year of
                      subscription to use Wikipedia for free!
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn">
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <p className="vertical-timeline-technos">
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faReact}
                  color="#61dbfb"
                />
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faHtml5}
                  color="#f25320"
                />
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faNodeJs}
                  color="#7cc327"
                />
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faJsSquare}
                  color="#ead41c"
                />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="seasonalCard vertical-timeline-element--work"
              contentStyle={{
                background: '#ff8320',
                color: '#fff',
              }}
              contentArrowStyle={{
                borderRight: '7px solid #ff8320',
              }}
              date="Août 2021"
              iconStyle={{ background: '#ff8320', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faSun} color="#4d4d4e" />}
            >
              <h2 className="vertical-timeline-element-title">
                {t('careerPage.seasonal_job')}
              </h2>
              <h3 className="vertical-timeline-element-title">
                Technicien informatique
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Direction générale des Finances publiques - La Rochelle - France
              </h4>
              <p>
                Emploi à la direction générale des finances publiques.
                Manipulation de différentes maintenances et travail au service
                "poste" et "CID".
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="internshipCard vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(33, 150, 243)',
                color: '#fff',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)',
              }}
              date="Janvier 2021 - Avril 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />}
            >
              <h2 className="vertical-timeline-element-title">
                {t('careerPage.internship')}
              </h2>
              <h3 className="vertical-timeline-element-title">
                Assistant chef de projet et développeur
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                AM Créations - La Rochelle - France
              </h4>
              <p>
                Pilotage du projet d'une association avec réalisation de
                certaines briques de développement.
              </p>
              <p>
                <label
                  htmlFor="my-modal-6"
                  id="btn"
                  className="btn modal-button"
                  onClick={activeModal}
                >
                  Voir plus
                </label>
              </p>
              <p className="vertical-timeline-technos">
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faSass}
                  color="#c36192"
                />
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faVuejs}
                  color="#3eaf7c"
                />
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faJira}
                  color="#247df2"
                />
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faJsSquare}
                  color="#ead41c"
                />
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faTerminal} color="#4d4d4e" />}
            />
          </VerticalTimeline>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default Career
