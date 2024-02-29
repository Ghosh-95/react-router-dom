import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';

export const router = createBrowserRouter([
  { path: '/', element: <Root /> },
])

function App() {

  return (
    <>
      <h1>React Router DOM</h1>
      <p>Inside a component.</p>
    </>
  )
}

export default App
