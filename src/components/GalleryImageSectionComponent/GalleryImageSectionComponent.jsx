import { useDispatch } from 'react-redux';
import './GalleryImageSectionComponent.css'
import { removeFavorite } from '../../features/FavoriteSlice/favoriteSlice';
import { editDescription } from '../../features/FavoriteSlice/favoriteSlice';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let favoriteList = JSON.parse(localStorage.getItem("favoritePhotos"));

export const GalleryImageSection = ({inputData}) => {
    const dispatch = useDispatch()
    const [photoFilter,setPhotoFilter] = useState([]);
    const notify = () => toast("Image erased from favorites");
    
    // BORRAR FOTO AL DESMARCAR COMO FAVORITA
    const [hidden, setHidden] = useState(Array(favoriteList.length).fill(false));
    const toggleImg = (index) => {
        let newHidden = [...hidden];
        newHidden[index] = !newHidden[index];
        setHidden(newHidden);
    }

    // DISPLAY INPUT PARA CAMBIAR DESCRIPCIÓN DE IMAGEN
    const [displayed, setDisplayed] = useState(Array(favoriteList.length).fill(false));
    const toggleDisplay = (index) => {
        let newDisplayed = [...displayed];
        newDisplayed[index] = !newDisplayed[index];
        setDisplayed(newDisplayed);
    }

    // RECOGE EL VALOR DEL INPUT PARA ACTUALIZARLO MÁS TARDE
    const [inputValue, setInputValue] = useState('');
    const updateValue = (e) => {
        setInputValue(e.target.value)
    }

    // COMPRUEBA SI EN LOCALSTORAGE HAY DATOS Y SI LOS HAY, LOS FILTRA
    let exists = localStorage.getItem('favoritePhotos');
    useEffect(() => {
        if (exists) {
            let localData = JSON.parse(exists);
            if (Array.isArray(localData) && localData.length !== 0) {
                let filteredData = favoriteList.filter(photo => photo.description.includes(inputData) );
                setPhotoFilter(filteredData);
            } else {
                console.log('El item es un array vacío en el localStorage');
            }
        } 
    }, [exists, inputData, favoriteList])
   
        const showPic = photoFilter.map((favImg, index) => {
            return (
                <div key={index} className={!hidden[index] ? 'GalleryImageContainer' : 'GalleryImageContainerDisabled'}>
                    <img  className="GalleryImageSectionImg" src={favImg.url}/>
                    <svg className="ImageContainerLike ImageContainerLike--mod" onClick={() => {dispatch(removeFavorite(favImg.url)), notify()}}width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path onClick={() => toggleImg(index)} d="M45.924 13.744C45.2525 6.67485 40.0215 1.54601 33.4749 1.54601C29.1135 1.54601 25.1201 3.79099 22.8731 7.38904C20.6464 3.74445 16.8167 1.54517 12.5251 1.54517C5.9795 1.54517 0.747578 6.674 0.0770007 13.7432C0.0239207 14.0554 -0.193707 15.6988 0.468023 18.3787C1.42169 22.2441 3.62451 25.7601 6.83674 28.5441L22.8625 42.4548L39.1633 28.545C42.3756 25.7601 44.5784 22.245 45.532 18.3787C46.1938 15.6996 45.9761 14.0563 45.924 13.744Z" stroke="black" fill="red"/>
                    </svg>
                    <svg className="ImageContainerDownload ImageContainerDownload--mod" width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0228 3.38182C17.0118 3.44291 17.0008 7.33494 17.0008 12.0248C17.0008 16.7182 16.9971 20.5599 16.9934 20.5635C16.9861 20.5707 15.5908 20.5815 13.8944 20.5923L10.8063 20.6103L16.7988 28.3728C20.0962 32.6421 22.8097 36.1353 22.8317 36.1353C22.8648 36.1353 34.8461 20.6534 34.8461 20.6067C34.8461 20.5995 33.4692 20.5923 31.7874 20.5923C29.4558 20.5923 28.7177 20.5815 28.6847 20.5492C28.6516 20.5168 28.6406 18.5438 28.6406 11.8882V3.27041H22.8427H17.0485L17.0228 3.38182Z" stroke="black" fill="white"/>
                        <path d="M7.92023 37.0768C7.90555 37.0875 7.89453 38.083 7.89453 39.2869V41.4719H23.6836H39.4727V39.2833C39.4727 37.3211 39.4653 37.0947 39.4139 37.0732C39.3331 37.0444 7.94961 37.0444 7.92023 37.0768Z" stroke="black" fill="white"/>
                    </svg>
                    <div className='GalleryImageContainerInfo'>
                        <p className='infoData'>{favImg.description}</p>
                        <p className='infoData'>Width: {favImg.width}px</p>
                        <p className='infoData'>Height: {favImg.height}px</p>
                        <p className='infoData'>Likes: {favImg.likes}</p>
                        <p className='infoData'>Created in {favImg.date}</p>
                        <svg onClick={() => toggleDisplay(index)} enableBackground="new 0 0 64 64" cursor="pointer" height="20px" id="Layer_1" version="1.1" viewBox="0 0 64 64" width="64px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z"/>
                                    <polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  "/>
                                    <polygon points="20.273,37.028 18.642,46.28 27.913,44.654  "/>
                                <path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z"/>
                            </g>
                        </svg>
                        <div className={!displayed[index] ? 'GalleryImageInfoEditor' : 'GalleryImageInfoEditorEnabled'}>
                            <input type="text" placeholder='Type your description...' value={inputValue} onChange={updateValue}/>
                            <svg className="GalleryImageInfoEditorSaveIcon" onClick={() => {toggleDisplay(index), dispatch(editDescription({imgData: favImg, updatedInfo: inputValue}))}} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24">
                            <path d="M20 7.828a2 2 0 0 0-.586-1.414l-1.828-1.828A2 2 0 0 0 16.172 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.828z"/>
                            <path d="M14 4v4H8V4m0 16v-8h8v8"/>
                            </svg>
                        </div>
                    </div>
                </div>
            )
         })
         return (
            <section className="GalleryImageSection">
                {showPic}
                <ToastContainer/>
            </section>
         )
    }
