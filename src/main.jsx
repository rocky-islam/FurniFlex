import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './component/Signup/Signup.jsx'
import Root from './component/Root/Root.jsx'
import Signin from './component/Signin/Signin.jsx'
import Store from './component/Store/Store.jsx'
import CartData from './component/CartData/CartData.jsx'
import CartItem from './component/CartItem/CartItem.jsx'
import AuthProvider from './component/AuthProvider/AuthProvider.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    children : [
      {
        path : '/',
        element : <Signup></Signup>
      },
      {
        path : '/signin',
        element : <Signin></Signin>
      },
      {
        path : '/store',
        element : <Store></Store>
      },
      {
        path : '/cart',
        element : <CartItem></CartItem>
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <CartData>
      <RouterProvider router={router}></RouterProvider>
    </CartData>
    </AuthProvider>
    
  </StrictMode>,
)
