import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.module.scss'
import i18n from './localization/i18n.ts'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage.tsx'
import FaxPage from './pages/FaxPage/FaxPage.tsx'
import MainLayout from './layouts/MainLayout/MainLayout.tsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'faxes',
        element: <FaxPage />
      }
    ]
  },
  {
    path: '*',
    element: <h1>404: Error Page</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={ i18n }>
      <RouterProvider router={ router } />
    </I18nextProvider>
  </React.StrictMode>,
)
