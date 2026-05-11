import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import Footer from './Componentes/Footer'
function App() {

  return (
    <div>
      <Cabecalho/>
      <div>
        <Footer/>
      </div>
    </div>
    )
}

export default App
