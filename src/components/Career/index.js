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
} from '@fortawesome/free-brands-svg-icons'

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
        el.classList.toggle('bg-[#ffeba7]')
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
        el.classList.toggle('bg-[#ffeba7]')
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
        if(el.classList.contains('hidden')){
          el.classList.toggle('hidden')
        }
      })
      internshipBtn.forEach((el) => {
        if(el.classList.contains('bg-white')){
          el.classList.toggle('bg-white')
          el.classList.add('bg-[#ffeba7]')
        }
      })
      seasonalCard.forEach((el) => {
        if(el.classList.contains('hidden')){
          el.classList.toggle('hidden')
        }
      })
      seasonalBtn.forEach((el) => {
        if(el.classList.contains('bg-white')){
          el.classList.toggle('bg-white')
          el.classList.add('bg-[#ffeba7]')
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

  return (
    <>
      <div className="container career-page pt-8">
        <div className="flex space-x-4 lg:justify-center pb-8">
        <button
            onClick={toggleAll}
            className="allBtn btn border-none text-black bg-white hover:text-white btn-xs sm:btn-sm md:btn-md"
          >
            {t('careerPage.all')}
          </button>
          <button
            onClick={toggleInternship}
            className="internshipBtn btn border-none text-black hover:text-white bg-[#ffeba7] btn-xs sm:btn-sm md:btn-md"
          >
            {t('careerPage.internship')}
          </button>
          <button
            onClick={toggleSeasonal}
            className="seasonalBtn btn border-none text-black hover:text-white bg-[#ffeba7] btn-xs sm:btn-sm md:btn-md"
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
              icon={<faHome />}
            >
              <h2 className="vertical-timeline-element-title">
                {t('careerPage.internship')}
              </h2>
              <h3 className="vertical-timeline-element-title">
                Co-fondateur et Développeur
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Roumanie</h4>
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
              <p className="vertical-timeline-technos">
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faReact}
                  color="#5ED4F4"
                />
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faHtml5}
                  color="#5ED4F4"
                />
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faNodeJs}
                  color="#5ED4F4"
                />
                <FontAwesomeIcon
                  className="technologiesIcons"
                  icon={faJsSquare}
                  color="#5ED4F4"
                />
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
              icon={<faHome />}
            >
              <h2 className="vertical-timeline-element-title">Stage</h2>
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="seasonalCard vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<faHome />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="seasonalCard vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<faHome />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<faHome />}
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<faHome />}
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<faHome />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<faHome />}
            />
          </VerticalTimeline>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default Career
