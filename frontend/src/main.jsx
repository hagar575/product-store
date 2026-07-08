import { Provider } from "@/components/ui/provider.jsx"
import { Toaster } from "@/components/ui/toaster.jsx"
import { ThemeProvider } from "next-themes"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <App />
          <Toaster />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
