import React, { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const submittedData = JSON.stringify({ email, password })
    console.log(submittedData)
  }
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' />
        <form>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@correo.com' id='email' onChange={(event) => { setEmail(event.target.value) }} />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='contraseña' id='password' onChange={(event) => { setPassword(event.target.value) }} />
          <button onClick={handleSubmit}>Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

export default SimpleForm
