import './App.css'
import NavBar from './components/Navbar/NavBar'
import LoadingComponent from './components/Loading/Loading'
import HomePage from './pages/Home/Home'
import WorkPage from './pages/Work/Work'


import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { Suspense } from 'react'

import { useEffect , useState } from 'react'

function App() {

  const [navStatus , setNavStatus] = useState(true)

  useEffect(()=>{
    console.log(navStatus)
  },[navStatus])

  return (
    <>
    <BrowserRouter>

<Routes>
  <Route path="/" element={<Suspense fallback={<LoadingComponent/>}><HomePage navStatus={navStatus} setNavStatus={setNavStatus} /></Suspense>} />
  <Route path="/acasa" element={<Suspense fallback={<LoadingComponent/>}><HomePage navStatus={navStatus} setNavStatus={setNavStatus} /></Suspense>}/>
  <Route path="/lucrari" element={<Suspense fallback={<LoadingComponent/>}><WorkPage navStatus={navStatus} setNavStatus={setNavStatus} /></Suspense>}/>
  
</Routes>

<NavBar navStatus={navStatus}/>

</BrowserRouter>
    </>

  )
}

export default App
