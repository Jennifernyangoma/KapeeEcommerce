import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import LayoutHandling from './Layout/Layout'
import Home from './components/Home'
 
import Aftersell from './components/Aftersell'
import FeaturedProducts from './components/Featureproduct'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutHandling/>}>
        <Route index element={<Home/>} />
        <Route path='home' element={<Home/>} />
        
        <Route path='aftersell' element={<Aftersell/>} />
       
        <Route path='featureproduct' element={<FeaturedProducts/>}/>
      </Route>
</Routes>
      
    </BrowserRouter>
  )
}

export default App