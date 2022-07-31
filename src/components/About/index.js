import './index.scss'
// import AnimatedLetters from '../AnimatedLetters'
import Cube from '../Cube'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutArray = 'About me'.split('')
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
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <Cube></Cube>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default About
