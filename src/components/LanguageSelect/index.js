import './index.scss'
import { useTranslation } from 'react-i18next'

const LanguageSelect = () => {
  const { t, i18n } = useTranslation()
  const lngs = {
    fr: { nativeName: t('french') },
    en: { nativeName: t('english') },
  }
  return (
    <>
      <div className="sec-center">
        <input
          className="dropdown"
          type="checkbox"
          id="dropdown"
          name="dropdown"
        />
        <label className="for-dropdown" htmlFor="dropdown">
          {t('language')}
        </label>
        <div className="section-dropdown">
          {Object.keys(lngs).map((lng) => (
            <button
              className="langueBtn"
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                backgroundColor:
                  i18n.resolvedLanguage === lng ? '#ffeba7' : 'transparent',
                  color: 
                  i18n.resolvedLanguage === lng ? 'black' : 'white'
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default LanguageSelect
