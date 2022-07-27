import { Link } from 'react-router-dom'
import './index.scss'
import ImageHome from '../../assets/images/profilImgHome.jpg'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  const [letterClass, setLetterClass] = useState('text-animate')
  const helloArray = t('hello').split('')
  const nameArray = t('i_am').split('')
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
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={6}
            ></AnimatedLetters>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={23}
            ></AnimatedLetters>
          </h1>
          <h2>{t('full_stack')}</h2>
          <Link to="/contact" className="flat-button">
            {t('contact_me_btn')}
          </Link>
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
