import React, { useEffect, useState } from 'react'
import api from '@omnirepo/axios-config'

// import { Container } from './styles';

const App: React.FC = () => {
  const [msg, setMsg] = useState('')
  useEffect(() => {
    api.get('/').then(response => {
      setMsg(response.data.message)
    })
  }, [])

  return <h1>{msg}</h1>
}

export default App
