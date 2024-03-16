import './GalleryImageSectionComponent.css'

const favoritePictures = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export const GalleryImageSection = () => {
     const showPic = favoritePictures.map((favImg, index) => {
        return (
            <div key={index}>
                <img  className="GalleryImageSectionImg" src="src\components\GalleryImageSectionComponent\photo.jpg"/>
            </div>
        )
     })
     return (
        <section className="GalleryImageSection">
            {showPic}
        </section>
     )
     
}
