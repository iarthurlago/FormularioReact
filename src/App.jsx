import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FormularioCadastro from './Componentes/FormularioCadastro'
import Footer from './Componentes/Footer'
import InputField from './Componentes/InputField'
function App() {

  return (
    <div>
      <FormularioCadastro/>
      <div>
        <Footer/>
      </div>
    </div>
    )
}

export default App
