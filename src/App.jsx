import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Error from './errorPage';

export const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <Error /> },
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
