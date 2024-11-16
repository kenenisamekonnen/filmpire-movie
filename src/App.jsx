import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import FullWeb from './FullWeb'
import SignIn from './componenets/SignIn'
import SignUp from './componenets/SignUp'
import FullHome from './FullHome'
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<FullHome />}>
        <Route index element={<FullWeb />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
