import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import AddEvent from './components/AddEvent'
import Events from './components/Events'
import Login from './components/Login'

function App() {
 return (
  <div className="App">
   <Header />
   <Routes>
    <Route path="/" element={<Events />} />
    <Route path="/add-event" element={<AddEvent />} />
    <Route path="/login" element={<Login />} />
    <Route path="/:id">
     <Route index element={<h1>Show specific element</h1>} />
     <Route path="edit" element={<h1>Show specific element</h1>} />
    </Route>
    <Route path="*" element={<Navigate to={'/'} />} />
   </Routes>
  </div>
 )
}

export default App
