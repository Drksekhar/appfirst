import React from 'react'
import { About, Contact } from './About'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import States from './States'
import NoPage from './NoPage'
import Waa from './Waa'
import TodoLIstLocal from './TodoLIstLocal'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainMenu />}>
            <Route path='' element={<Waa />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='About' element={<About />} />
            <Route path='TodoLIstLocal' element={<TodoLIstLocal />} />            
            <Route path='States' element={<States />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
function MainMenu() {
  return (
    <div>
      <Link to="/">
        <Button color='blue'> Home </Button>
      </Link >
      <Button as={Link} to="/about" color='blue'>About</Button>
      <Button as={Link} to="/Contact" color='blue'>Contact</Button>
      <Button as={Link} to="/TodoLIstLocal" color='blue'>TodoLIstLocal</Button>
      <Button as={Link} to="States" color='blue'>States</Button>
      <Button as={Link} to="Waa" color='blue'>Waa</Button>

      <hr />
      <div style={{ padding: 0 }}></div>
      <Outlet />
      <hr />
    </div >

  )

}
