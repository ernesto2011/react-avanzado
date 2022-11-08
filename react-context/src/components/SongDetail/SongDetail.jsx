import React from 'react'
import { useSongContext } from '@/context/SongContext'
import './songDetail.css'

const SongDetail = () => {
  const context = useSongContext()
  return (
    <>
      {context.selectedSong.title
        ? <div>
          <img src={`https://picsum.photos/seed/${context.selectedSong.id}/400/400`} alt='portada del disco' />
          <h1>{context.selectedSong.title}</h1>
          <h4>{context.selectedSong.artist}</h4>
          <h6>{context.selectedSong.year}</h6>
          </div>
        : <h1>seleccione una canción</h1>}
    </>
  )
}

export default SongDetail
