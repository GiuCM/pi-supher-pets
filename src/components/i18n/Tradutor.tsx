import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import BrazilFlag from '../../assets/brazil.png'
import UsaFlag from '../../assets/usa.png'
import { Flag } from './Flag'

export const Tradutor = () => {
  const { i18n, t } = useTranslation()

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language
  return (
    <div className={`${location.pathname === "/" ? 'lg:fixed lg:top-16' : 'fixed top-16'} bg-yellow-50 p-4 h-fit w-fit shadow-md right-5 flex flex-col`}>
      <Flag
        image={BrazilFlag}
        isSelected={selectedLanguage === 'pt-BR'}
        language={t('buttons.portuguese')}
        onClick={() => handleChangeLanguage('pt-BR')}
      />
      <Flag
        image={UsaFlag}
        isSelected={selectedLanguage === 'en-US'}
        language={t('buttons.english')}
        onClick={() => handleChangeLanguage('en-US')}
      />
    </div>
  )
}