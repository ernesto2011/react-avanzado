import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Portafolio from '../pages/Portafolio'
import Contacto from '../pages/Contacto'
import Error404 from '../pages/Error404'
import PortafolioDetalle from '../pages/PortafolioDetalle'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Portafolio' element={<Portafolio />}>
        <Route path=':pid' element={<PortafolioDetalle />} />
      </Route>
      <Route path='/Contacto' element={<Contacto />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RoutesIndex
