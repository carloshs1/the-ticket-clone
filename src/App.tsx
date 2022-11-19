import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import AddOrEditEvent from './components/AddOrEditEvent'
import Events from './components/Events'
import Login from './components/Login'
import EventDetails from './components/EventDetails'
import Footer from './components/Footer'

function App() {
 return (
  <div className="App">
   <Header />
   <Routes>
    <Route path="/" element={<Events />} />
    <Route path="/add-event" element={<AddOrEditEvent />} />
    <Route path="/login" element={<Login />} />
    <Route path="/event/:id">
     <Route index element={<EventDetails />} />
     <Route path="edit" element={<AddOrEditEvent />} />
    </Route>
    <Route path="*" element={<Navigate to={'/'} />} />
   </Routes>
   <Footer />
  </div>
 )
}

export default App
