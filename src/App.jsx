import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './layout/Root'
import Home from './Pages/Home'
import Enquiry from './Pages/Enquiry'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'

function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route path='menu' element={<Menu />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='enquiry' element={<Enquiry />}></Route>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
