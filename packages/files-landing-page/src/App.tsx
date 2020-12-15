import React from "react"
import { ThemeProvider, createTheme } from "@chainsafe/common-theme"
import { LanguageProvider } from "./LanguageContext"
import { CssBaseline, Router } from "@chainsafe/common-components"
import Routes from "./Components/Routes"

const theme = createTheme({
  globalStyling: {
    body: {
      color: "#fafafa",
      fontFamily: "'Archivo', sans-serif",
    },
    a: {
      color: "#fafafa",
    },
  },
})

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider availableLanguages={[{ id: "en", label: "English" }]}>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
