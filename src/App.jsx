import React from 'react'
import  {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import Homepage from './components/Homepage';
import Blog from './components/Blog';
import About from './components/About';
import Layout from './components/Layout';
import DoctorsListingPage from './components/DoctorsListingPage';
import Contact from './components/Contact';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path="" element ={<Homepage/>}/>
       <Route path="/doctors" element ={<DoctorsListingPage/>}/>
       <Route path="/blog" element ={<Blog/>}/>
       <Route path="/about" element ={<About/>}/>
       <Route path="/contact" element ={<Contact/>}/>
    </Route>
  )
)
function App() {
  return (
   <>
   <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>   
   </>
  )
}

export default App