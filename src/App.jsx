import './App.css'
import NavBar from './components/Navbar/NavBar'
import LoadingComponent from './components/Loading/Loading'
import HomePage from './pages/Home/Home'

import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { Suspense } from 'react'

function App() {
  return (
    <>
    <BrowserRouter>

<Routes>
  <Route path="/" element={<Suspense fallback={<LoadingComponent/>}><HomePage /></Suspense>} />
  <Route path="/acasa" element={<Suspense fallback={<LoadingComponent/>}><HomePage /></Suspense>}/>
  
</Routes>

<NavBar/>

</BrowserRouter>
    </>

  )
}

export default App
