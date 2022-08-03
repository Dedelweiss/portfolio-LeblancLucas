import './index.scss'
// import AnimatedLetters from '../AnimatedLetters'
import Cube from '../Cube'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutArray = t('aboutPage.about_me').split('')
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
      <div className="container about-page">
        <div className="container__row">
          <div className="text-zone container__col1">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={aboutArray}
                idx={15}
              />
            </h1>
            <p>{t('aboutPage.paragraph1')}</p>
            <p>{t('aboutPage.paragraph2')}</p>
            <h2>{t('aboutPage.hobbies')}</h2>
            <p>{t('aboutPage.paragraph3')}</p>
            <p>{t('aboutPage.paragraph4')}</p>
          </div>
          <Cube></Cube>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default About
