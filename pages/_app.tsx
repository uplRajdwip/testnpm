import { useEffect } from 'react'
import React from "react";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'bn',
    name: 'বাংলা',
    country_code: 'in&bn',
  },
  {
    code: 'hn',
    name: 'हिन्दी',
    country_code: 'in',
  }
]

function MyApp() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('app_title')
  }, [t])

  return (
    <>
      <span className="">{t('language')}</span>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {languages.map(({ code, name, country_code }) => (
          <div key={country_code}>
            <button onClick={() => { i18next.changeLanguage(code) }}>{name}</button>
          </div>
        ))}
      </div>
      <h1 className="">{t('welcome_message')}</h1>
    </>
  )
}

export default MyApp
