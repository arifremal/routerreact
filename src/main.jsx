import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter,createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'

import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
// const router = createBrowserRouter([
//   {path: '/',

//     element: <Route></Route>,
//     children:[
//       {
//         path:"",
//         element:<Home></Home>
//       },
//       {path:"about",
//         element:<About></About>
//       },
//       {path:"contact",
//         element:<Contact></Contact>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
    <Route path=''element={<Home></Home>}></Route>
    <Route path='/about'element={<About></About>}></Route>
    <Route path='contact'element={<Contact></Contact>}></Route>
    <Route path='user/:userId'element={<User></User>}></Route>
    <Route path='github'element={<Github></Github>}></Route>
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
