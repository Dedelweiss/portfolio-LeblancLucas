import './index.scss'
// import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faVuejs,
  faCss3,
} from '@fortawesome/free-brands-svg-icons'

const Cube = () => {
  // const aboutArray = 'About me'.split('')

  return (
    <>
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
    </>
  )
}

export default Cube
