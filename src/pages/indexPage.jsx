import { Footer } from "../components/FooterComponent/FooterComponent";
import { Header } from "../components/HeaderComponent/HeaderComponent"
import { ImageSection } from "../components/ImageSectionComponent/ImageSectionComponent";
import { NavBar } from "../components/NavBarComponent/NavBarComponent"
import { useState } from 'react';
import '../rootDiv.css';


export const IndexPage = () => {
    const [inputData,setInputData] = useState('')
    return <>
    <div className="rootDiv">
        <NavBar setInputData={setInputData}/>
        <Header setInputData={setInputData}/>
        <ImageSection inputData={inputData}/>
        <Footer/>
    </div>
    </>
}