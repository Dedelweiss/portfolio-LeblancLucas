import './index.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJava,
  faReact,
  faSass,
  faJs,
  faDev,
  faAngular
} from '@fortawesome/free-brands-svg-icons'
import { SiArduino, SiTailwindcss } from 'react-icons/si'
import { useTranslation } from 'react-i18next'
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="container projects-page pt-8 pb-8 px-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="card rounded-3xl overflow-hidden image-full shadow-2xl">
            <figure>
              <img
                src={require('../../assets/images/projects/Roumanie.png')}
                alt="Romania"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h1 className="card-title">Mankyan</h1>
                <div
                  className="tooltip tooltip-left"
                  data-tip="Research and development"
                >
                  <FontAwesomeIcon
                    className="technologiesIcons"
                    icon={faDev}
                    color="white"
                  />
                </div>
              </div>
              <h2 className="card-subtitle">
                Personal Project - Sept. 2021 → Present
              </h2>
              <p>
                {t('projectsPage.mankyan_project')}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Demo</button>
                <a
                  href="https://la-rochelle.cesi.fr/direction-la-roumanie-pour-5-eleves-entrepreneurs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Article
                </a>
              </div>
            </div>
          </div>
          
          <div className="card rounded-3xl overflow-hidden image-full shadow-2xl">
            <figure>
              <img
                src={require('../../assets/images/projects/voitureAutonome.jpg')}
                alt="Romania"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h1 className="card-title">Prototype of an autonomous car</h1>
                <div className="tooltip tooltip-left" data-tip="Finished">
                  <FontAwesomeIcon
                    className="technologiesIcons"
                    icon={faFlagCheckered}
                    color="white"
                  />
                </div>
              </div>
              <h2 className="card-subtitle">School project - June 2019</h2>
              <p>{t('projectsPage.carProject')}</p>
              <h2 className="card-subtitle">Technologies used</h2>
              <div className="flex space-x-4">
                <div className="tooltip" data-tip="Java">
                  <FontAwesomeIcon
                    className="technologiesIcons"
                    icon={faJava}
                    color="#0074bd"
                  />
                </div>
                <div className="tooltip" data-tip="Arduino">
                  <SiArduino className="technologiesIcons" color="#009da2" />
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Demo</button>
                <a
                  href="https://la-rochelle.cesi.fr/projet-etudiant-construire-une-voiture-autonome/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Article
                </a>
              </div>
            </div>
          </div>
          <div className="card rounded-3xl overflow-hidden image-full shadow-2xl">
            <figure>
              <img
                src={require('../../assets/images/esr.webp')}
                alt="Romania"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h1 className="card-title">Portfolio</h1>
                <div
                  className="tooltip tooltip-left"
                  data-tip="Research and development"
                >
                  <FontAwesomeIcon
                    className="technologiesIcons"
                    icon={faDev}
                    color="white"
                  />
                </div>
              </div>
              <h2 className="card-subtitle">
                Personal project - July 2022 → Present
              </h2>
              <p>{t('projectsPage.carProject')}</p>
              <h2 className="card-subtitle">Technologies used</h2>
              <div className="flex space-x-4">
                <div className="tooltip" data-tip="React">
                  <FontAwesomeIcon
                    className="technologiesIcons"
                    icon={faReact}
                    color="#5ccfee"
                  />
                </div>
                <div className="tooltip" data-tip="Javascript">
                  <FontAwesomeIcon
                    className="technologiesIcons"
                    icon={faJs}
                    color="#f7c327"
                  />
                </div>
                <div className="tooltip" data-tip="Sass">
                  <FontAwesomeIcon
                    className="technologiesIcons"
                    icon={faSass}
                    color="#ce679a"
                  />
                </div>
                <div className="tooltip" data-tip="TailwindCss">
                  <SiTailwindcss
                    className="technologiesIcons"
                    color="#07adca"
                  />
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Github</button>
              </div>
            </div>
          </div>
          <div className="card rounded-3xl overflow-hidden image-full shadow-2xl">
            <figure>
              <img
                src={require('../../assets/images/projects/winniz.png')}
                alt="Winniz's temporary logo"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h1 className="card-title">Winniz</h1>
                <div
                  className="tooltip tooltip-left"
                  data-tip="Research and development"
                >
                  <FontAwesomeIcon
                    className="technologiesIcons"
                    icon={faDev}
                    color="white"
                  />
                </div>
              </div>
              <h2 className="card-subtitle">
                Personal project - June 2022 → Present
              </h2>
              <p className='flex flex-col md:flex-row'>
                {t('projectsPage.not_available')}
                <iframe
                  title="Geam"
                  width={'100%'}
                  height={'100%'}
                  src="https://giphy.com/embed/l3q2KRkOVYvi8WfU4"
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>
              </p>
              <h2 className="card-subtitle">Technologies used</h2>
              <div className="flex space-x-4">
                <div className="tooltip" data-tip="React">
                  <FontAwesomeIcon
                    className="technologiesIcons"
                    icon={faAngular}
                    color="#bd002e"
                  />
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Github</button>
              </div>
            </div>
          </div>
          <div className="card rounded-3xl overflow-hidden image-full shadow-2xl">
            <figure>
              <img
                className=""
                src={require('../../assets/images/projects/geam.png')}
                alt="Geam's temporary logo"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h1 className="card-title">Geam</h1>
                <div
                  className="tooltip tooltip-left"
                  data-tip="Research and development"
                >
                  <FontAwesomeIcon
                    className="technologiesIcons"
                    icon={faDev}
                    color="white"
                  />
                </div>
              </div>
              <h2 className="card-subtitle">
                Personal project - Aug. 2022 → Present
              </h2>
              <p className='flex flex-col md:flex-row'>
                {t('projectsPage.not_available')}
                <iframe
                  title="Geam"
                  width={'100%'}
                  height={'100%'}
                  src="https://giphy.com/embed/bGgsc5mWoryfgKBx1u"
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>
              </p>
              <h2 className="card-subtitle">Technologies used</h2>
              <div className="flex space-x-4">
                <div className="tooltip" data-tip="React">
                  <FontAwesomeIcon
                    className="technologiesIcons"
                    icon={faReact}
                    color="#5ccfee"
                  />
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Github</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default Projects
