import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoL from '../../assets/images/esr.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'

const Sidebar = () => {
  const { t, i18n } = useTranslation()
  const lngs = {
    fr: { nativeName: t('french') },
    en: { nativeName: t('english') },
  }
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoL} alt="logo"></img>
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <div class="dropdown">
            <button class="dropbtn">{t('language')}</button>
            <div class="dropdown-content">
              {Object.keys(lngs).map((lng) => (
                <button
                  key={lng}
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                  }}
                  type="submit"
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
          </div>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/lucas-leblanc-810457228"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Dedelweiss"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
