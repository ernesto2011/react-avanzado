import React from 'react'
import SongList from '@/components/SongList'
import SongDetail from '@/components/SongDetail'
import Header from '@/components/Header'
import { SongProvider } from '@/context/SongContext'
import './Home.css'

const Home = () => {
  return (
    <SongProvider>
      <Header />
      <div className='home-container'>

        <div className='izquierdo'>
          <h2>lado izquierdo</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <h2>lado dereho</h2>
          <SongDetail />
        </div>
      </div>
    </SongProvider>
  )
}

export default Home
