import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer,Header } from './Components'
import { CartPage, CatalogPage, ContactPage, DetailPage, HomePage } from './screens'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/catalogo' element={<CatalogPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
