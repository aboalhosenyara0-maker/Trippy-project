import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'

const routes = createBrowserRouter([
  {
    path : "/",
    element : <Root/>,
    children:[
      {
        path :"",
        element:<Home/>
      },
      {
        path :"about",
        element:<About/>
      },
      {
        path :"service",
        element:<Service/>
      },
      {
        path :"contact",
        element:<Contact/>
      }
    ]
  }
],{
  basename : "/Trippy-project"
}
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
