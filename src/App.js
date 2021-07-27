import React from 'react'
import Covid from './components/covid'
import Header from './components/header'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Covid />
      </div>
    </div>
  )
}

export default App
