import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import 'fontsource-roboto/300-normal.css'
import 'fontsource-roboto/400-normal.css'
import 'fontsource-roboto/500-normal.css'
import 'fontsource-roboto/700-normal.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
