import React from 'react'
import { About, Contact } from './About'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import States from './States'
import NoPage from './NoPage'
import Waa from './Waa'
import TodoLIstLocal from './TodoLIstLocal'
import TodoListLocalPra from './TodoListLocalPra'
import ToDoL from './ToDoL'
import ToDoPra2 from './ToDoPra2'
import ToDoListSemantic from './ToDoListSemantic'
import CatFacts from './api/CatFacts'
import News from './api/News'

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
            <Route path='ToDoL' element={<ToDoL />} />
            <Route path='TodoListLocalPra' element={<TodoListLocalPra />} />
            <Route path='ToDoPra2' element={<ToDoPra2 />} />
            <Route path='ToDoListSemantic' element={<ToDoListSemantic />} />
            <Route path='CatFacts' element={<CatFacts />} />
            <Route path='States' element={<States />} />
            <Route path='News' element={<News />} />
            
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
      <Button as={Link} to="/ToDoL" color='blue'>ToDoL</Button>
      <Button as={Link} to="/TodoListLocalPra" color='blue'>TodoListLocalPra</Button>
      <Button as={Link} to="/ToDoPra2" color='blue'>ToDoPra2</Button>
      <Button as={Link} to="/ToDoListSemantic" color='blue'>ToDoListSemantic</Button>
      <Button as={Link} to="/CatFacts" color='blue'>CatFacts</Button>
      <Button as={Link} to="States" color='blue'>States</Button>
      <Button as={Link} to="News" color='blue'>News</Button>
      <Button as={Link} to="Waa" color='blue'>Waa</Button>

      <hr />
      <div style={{ padding: 0 }}></div>
      <Outlet />
      <hr />
    </div >

  )

}
