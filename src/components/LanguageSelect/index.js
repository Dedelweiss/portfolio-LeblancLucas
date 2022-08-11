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
        <div className="dropdown dropdown-hover dropdown-end">
          <label tabIndex="0" className="btn w-12 m-1">
            {t('language')}
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-40"
          >
            {Object.keys(lngs).map((lng) => (
              <button
                className="langueBtn"
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                  backgroundColor:
                    i18n.resolvedLanguage === lng ? '#ffeba7' : 'transparent',
                  color: i18n.resolvedLanguage === lng ? 'black' : 'white',
                }}
                type="submit"
                onClick={() => i18n.changeLanguage(lng)}
              >
                {lngs[lng].nativeName}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default LanguageSelect
