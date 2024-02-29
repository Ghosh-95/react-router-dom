import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Error from './errorPage';
import Contact from './routes/contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />
      }
    ],
    errorElement: <Error />,
  },

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
