import React, { useRef } from 'react'

const ReactDom = () => {
  const inputRef = useRef()

  return (
    <div>
      <input ref={inputRef} type='text' />

    </div>
  )
}

export default ReactDom
