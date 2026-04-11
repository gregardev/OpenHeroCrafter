import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CssBaseline, CssVarsProvider } from '@mui/joy'
import { mytheme } from './theme/mytheme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider
      theme={mytheme}
      modeStorageKey="mode-toggle-demo"
      disableNestedContext
    >
      <App />
      <CssBaseline />
    </CssVarsProvider>
  </StrictMode>,
)
