import React from 'react'
// import dotenv from 'dotenv'
// dotenv.config();
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApiContextProvider } from './context/contextApi'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
     <ApiContextProvider>
    <App />
</ApiContextProvider>
  </React.StrictMode>,

    
)
