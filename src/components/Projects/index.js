import './index.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { SiArduino } from 'react-icons/si'

const Projects = () => {
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
              <h2 className="card-title">Mankyan</h2>
              <h2 className="card-subtitle">Personal Project - Sept. 2021 → Present</h2>
              <p>
                Cette plateforme est née de l'idée de 5 étudiants en ingénierie
                de l'école d'ingénieur CESI. Cette opportunité nous a permis de
                remplacer le stage de 4ème année par un projet entrepreneurial.
                J'ai donc travaillé 4 mois à l'Université de Bucarest sur ce
                projet de plateforme web avec les 4 membres de mon équipe. Cela
                m'a permis de travailler sur mes connaissances dans le domaine
                de l'entrepreneuriat, du développement de projet mais aussi dans
                le contact avec des acteurs externes ou des partenaires
                potentiels lors d'un projet. Ces quelques mois m'ont également
                permis de renforcer mon anglais, tant au sein du groupe qu'avec
                les personnes rencontrées en Roumanie. Cela m'a également permis
                de travailler avec différents partenaires du CESI, tant dans le
                domaine du développement que de l'entrepreneuriat. dans
                l'entreprenariat. Ainsi, aujourd'hui encore, nous recherchons
                des partenaires dans l'édition de mangas.
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
              <h1 className="card-title">Prototype of an autonomous car</h1>
              <h2 className="card-subtitle">School project - June 2019</h2>
              <p>
                Le but de ce projet était de créer un prototype de voiture
                autonome capable de se déplacer dans une ville et de rechercher
                les places de parking disponibles. Pour la réalisation de cette
                voiture nous avons utilisé un arduino qui permettait d'analyser
                les infos des capteurs afin de changer les actions des moteurs.
                Lors de ce projet nous avons également créé une interface en
                Java et Swing pour afficher la position de la voiture et les
                places de parking disponibles en temps réel. En effet, la
                voiture communiquait sa position à l'ordinateur via un émetteur
                radio. Les routes de la ville étaient modélisés par des lignes
                noires et la voiture pouvait les suivre grâce à un capteur noir
                et blanc.Ainsi, le chemin que devait parcourir la voiture était
                désigné manuellement et calculé automatiquement grâce à
                l'algorithme de Dijkstra qui permet de trouver le chemin le plus
                court.
              </p>
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
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default Projects
