import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { en } from "./en"

// More about Configuration Options: https://www.i18next.com/overview/configuration-options
void i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en,
    },
    defaultNS: ["common"],
    returnNull: false,
    returnEmptyString: false,
    parseMissingKeyHandler: (key: string) => `No translation found for "${key}"`
  })

export default i18n
