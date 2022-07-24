import './index.scss'
// import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faVuejs,
  faCss3,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  // const aboutArray = 'About me'.split('')

  return (
    <>
      <div className="container about-page">
       <div className='container__row'>
       <div className="text-zone container__col1">
          <h1>
            {/* <AnimatedLetters strArray={aboutArray} idx={15}></AnimatedLetters> */}
            About me
          </h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="stage-cube-cont container__col2">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faVuejs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
            </div>
          </div>
        </div>
       </div>

      </div>
      <Loader type='line-scale-pulse-out-rapid' />
    </>
  )
}

export default About
