import { GalleryHeader } from "../components/GalleryHeaderComponent/GalleryHeaderComponent"
import { NavBar } from "../components/NavBarComponent/NavBarComponent"
import { Footer } from "../components/FooterComponent/FooterComponent";
import '/src/rootDiv.css';
import { GalleryImageSection } from "../components/GalleryImageSectionComponent/GalleryImageSectionComponent";
import { useState } from 'react';

export const GalleryPage = () => {
    const [inputData,setInputData] = useState('')
    return <>
        <div className="rootDiv">
            <NavBar setInputData={setInputData}/>
            <GalleryHeader setInputData={setInputData}/>
            <GalleryImageSection inputData={inputData}/>
            <Footer />
        </div>
    </>
}