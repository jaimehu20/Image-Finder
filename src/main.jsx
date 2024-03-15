import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import { IndexPage } from './pages/indexPage.jsx'
import { GalleryPage } from './pages/galleryPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<IndexPage/>}/>
        <Route path='/MyGallery' element={<GalleryPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


 