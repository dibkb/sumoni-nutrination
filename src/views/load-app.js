import React from 'react'

import { Helmet } from 'react-helmet'

import './load-app.css'

const LoadApp = (props) => {
  return (
    <div className="load-app-container">
      <Helmet>
        <title>LoadApp - Planical modern template</title>
        <meta
          property="og:title"
          content="LoadApp - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default LoadApp
