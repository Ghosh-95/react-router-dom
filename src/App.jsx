import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import Contact, { loader as contactLoader } from './routes/contact';
import Error from './errorPage';
import EditContact from './routes/edit';
import { action as editAction } from './routes/edit';
import { action as destroyAction } from './routes/destroy';

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
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
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
