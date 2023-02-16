import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import './App.css'

const languages = [
  {
    code: 'en',
    name: 'English'
  },
  {
    code: 'ar',
    name: 'Arabic'
  },
  {
    code: 'hn',
    name: 'Hindi'
  },
  {
    code: 'fr',
    name: 'French'
  },
]
function App() {



  const { t } = useTranslation();

  return (
    <>

      {/* <p>{t('days_since_release',{number_of_days:10})}</p> */}

      <ul className="border flex">
        {
          languages.map(({ code, name }) => (

            <li key={code}>
              <button
                onClick={() => i18next.changeLanguage(code)}
                className="flex border m-2 p-2 rounded bg-blue-400 text-white">
                {name}
              </button>
            </li>
          ))
        }
      </ul>

      <h2 className="m-10">{t('welcome_message')}</h2>
      <p>{t('content')}</p>
    </>
  )


}

export default App;