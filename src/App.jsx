

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import Layout from './components/root/Layout'
import ServicePage from './pages/ServicePage'

import BlogPage from './pages/BlogPage'
import WorkPage from './pages/WorkPage'



function App() {

  let router = createBrowserRouter (
    createRoutesFromElements (
     <Route path="/"element={<Layout/>}>
   <Route index  element= {<Home /> } /> 
   <Route path="/about"  element= {<About /> } /> 
   <Route path="/service"element= {<ServicePage />}/> 
   <Route path="/work" element= {<WorkPage/>}/>
   <Route path="/blog"  element= {<BlogPage /> } /> 
     </Route>
   
    )

)
  return (
    <>
  <RouterProvider 
  
  router={router}
  />
    </>
  )
}

export default App
