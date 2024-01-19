import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.module.scss'
import i18n from './localization/i18n.ts'
import { I18nextProvider } from 'react-i18next'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage.tsx'
import FaxPage from './pages/FaxPage/FaxPage.tsx'
import MainLayout from './layouts/MainLayout/MainLayout.tsx'
import { RequireAuth } from './helpers/RequireAuth.tsx'
import AgencyPage from './pages/AgencyPage/AgencyPage.tsx'


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: "faxes",
        element: <FaxPage />,
      },
      {
        path: "agencies",
        element: <h1>Agency List Page</h1>,
      },
      {
        path: "agencies/new",
        element: <AgencyPage agency={null} />,
      },
      {
        path: "agencies/:agencySlug",
        element: <AgencyPage />,
      },

      // При переходе в корень, редиректим на страницу факсов
      {
        index: true,
        element: <Navigate to="/faxes" replace />,
      }
    ],
  },

  // Выводим страницу с ошибкой при любом не зарегистрированном пути
  {
    path: "*",
    element: <h1>404: Error Page</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>,
)
