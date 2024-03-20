import { useDispatch, useSelector } from 'react-redux';
import './/ImageSectionComponent.css'
import { GetPhotoStatus, getPhoto } from '../../features/SearchSlice/searchSlice';
import { useEffect, useState } from 'react';
import { GetPhotosThunk } from '../../app/searchThunk';
import {  addFavorite } from '../../features/FavoriteSlice/favoriteSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ImageSection = ({ inputData }) => {
    const photoList = useSelector(getPhoto)
    const photoStatus = useSelector(GetPhotoStatus)
    const dispatch = useDispatch()
    const [photoFilter,setPhotoFilter] = useState([]);
    const notify = () => toast("Image added to favorites");

    useEffect(() => {
        if (photoStatus === "idle"){
            dispatch(GetPhotosThunk());
        }
        },[dispatch, photoList, photoStatus])

    useEffect(() => {
        if (photoStatus === "fulfilled") {
            setPhotoFilter(photoList);
        }
    }, [photoStatus, photoList])

    useEffect(() => {
        if (inputData && photoStatus === "fulfilled") {
            const filteredPhotos = photoList.filter(photo => photo.alt_description.includes(inputData));
            setPhotoFilter(filteredPhotos);
        }
    }, [inputData, photoStatus, photoList])

        const [liked, setLiked] = useState(Array(photoList.length).fill(false));
        const toggleLike = (index) => {
            let newLiked = [...liked];
            newLiked[index] = !newLiked[index]
            setLiked(newLiked)
        }
    const pictures = photoFilter.map((imagen, index) => {
        const imageInfo = {
            url: imagen.urls.full,
            width: imagen.width,
            height: imagen.height,
            likes: imagen.likes,
            date: imagen.created_at,
            description: imagen.alt_description
        }
        return (
                <div key={index} className={`ImageContainer ImageContainer-${index + 1}`} >
                        <img className={'ImageSectionImg'} src={imagen.urls.full} alt={imagen.alt_description}/>
                        <svg className="ImageContainerLike" onClick={() => {dispatch(addFavorite(imageInfo)), notify()}} width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={!liked[index] ? 'noLiked' : 'liked'} onClick={() => toggleLike(index)} d="M45.924 13.744C45.2525 6.67485 40.0215 1.54601 33.4749 1.54601C29.1135 1.54601 25.1201 3.79099 22.8731 7.38904C20.6464 3.74445 16.8167 1.54517 12.5251 1.54517C5.9795 1.54517 0.747578 6.674 0.0770007 13.7432C0.0239207 14.0554 -0.193707 15.6988 0.468023 18.3787C1.42169 22.2441 3.62451 25.7601 6.83674 28.5441L22.8625 42.4548L39.1633 28.545C42.3756 25.7601 44.5784 22.245 45.532 18.3787C46.1938 15.6996 45.9761 14.0563 45.924 13.744Z" stroke="black" fill="white"/>
                        </svg>
                            <svg className="ImageContainerDownload" width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0228 3.38182C17.0118 3.44291 17.0008 7.33494 17.0008 12.0248C17.0008 16.7182 16.9971 20.5599 16.9934 20.5635C16.9861 20.5707 15.5908 20.5815 13.8944 20.5923L10.8063 20.6103L16.7988 28.3728C20.0962 32.6421 22.8097 36.1353 22.8317 36.1353C22.8648 36.1353 34.8461 20.6534 34.8461 20.6067C34.8461 20.5995 33.4692 20.5923 31.7874 20.5923C29.4558 20.5923 28.7177 20.5815 28.6847 20.5492C28.6516 20.5168 28.6406 18.5438 28.6406 11.8882V3.27041H22.8427H17.0485L17.0228 3.38182Z" stroke="black" fill="white"/>
                                <path d="M7.92023 37.0768C7.90555 37.0875 7.89453 38.083 7.89453 39.2869V41.4719H23.6836H39.4727V39.2833C39.4727 37.3211 39.4653 37.0947 39.4139 37.0732C39.3331 37.0444 7.94961 37.0444 7.92023 37.0768Z" stroke="black" fill="white"/>
                            </svg>
                </div>
        )
        
    })

    return (
        <section className='ImageSection'>
            {pictures}
            <ToastContainer/>
        </section>
    );
};