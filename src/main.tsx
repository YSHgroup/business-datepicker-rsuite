import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import 'rsuite/dist/rsuite.min.css' // or  'rsuite/styles/index.less'
import 'rsuite/styles/index.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>,
)
