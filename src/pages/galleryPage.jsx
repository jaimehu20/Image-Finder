import { GalleryHeader } from "../components/GalleryHeaderComponent/GalleryHeaderComponent"
import { NavBar } from "../components/NavBarComponent/NavBarComponent"
import { ImageSection } from "../components/ImageSectionComponent/ImageSectionComponent";
import { Footer } from "../components/FooterComponent/FooterComponent";
import '/src/rootDiv.css';
import { GalleryImageSection } from "../components/GalleryImageSectionComponent/GalleryImageSectionComponent";

export const GalleryPage = () => {
    return <>
        <div className="rootDiv">
            <NavBar/>
            <GalleryHeader />
            <GalleryImageSection/>
            <Footer />
        </div>
    </>
}