import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import Contact, { loader as contactLoader } from './routes/contact';
import Error from './errorPage';
import EditContact from './routes/edit';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
      },
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
