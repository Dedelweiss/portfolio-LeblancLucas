import { Link } from 'react-router-dom'
import './index.scss'
import ImageHome from '../../assets/images/profilImgHome.jpg'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useTranslation } from 'react-i18next'
import React from 'react'

const Home = () => {
  const { t } = useTranslation()
  const [letterClass, setLetterClass] = useState('text-animate')
  const helloArray = t('hello').split('')
  const iAmArray = t('i_am').split('')
  const surNameArray = t('surName').split(' ')
  const firstNameArray = t('firstName').split(' ')
  const jobArray = t('web_developer').split('')

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
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={helloArray}
              idx={6}
            ></AnimatedLetters>
            <br />
            <div>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={iAmArray}
                idx={6}
              ></AnimatedLetters>
              <div className='w-50'>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={surNameArray}
                  idx={6}
                ></AnimatedLetters>
              </div>
              <div>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={firstNameArray}
                  idx={6}
                ></AnimatedLetters>
              </div>
            </div>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            ></AnimatedLetters>
          </h1>
          <h2>{t('full_stack')}</h2>
          <div className="homeBtns__row">
            <a
              className="download-button homeBtns__col1"
              href={require('../../assets/files/CV_LeblancLucas.pdf')}
              download="CV_LeblancLucas.pdf"
            >
              DOWNLOAD CV
            </a>
            <Link to="/contact" className="contact-button homeBtns__col1">
              {t('contact_me_btn')}
            </Link>
          </div>
        </div>
        <div className="image-zone">
          <img src={ImageHome} alt="Lucas profile" className="profile-img" />
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default Home
