import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CssBaseline, CssVarsProvider } from '@mui/joy'
import { mytheme } from './theme/mytheme.ts'
import ActiveHeroContextProvider from './context/ActiveHeroContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider
      theme={mytheme}
      modeStorageKey="mode-toggle-demo"
      disableNestedContext
    >
      <ActiveHeroContextProvider>
        <App />
      </ActiveHeroContextProvider>
      <CssBaseline />
    </CssVarsProvider>
  </StrictMode>,
)
