import '../HeaderComponent/HeaderComponent.css';

export const Header = () => {
    return <>
    <header className="header">
        <h1 className="headerTitle">
            Image Finder
        </h1>
        <p className="headerText">
            Discover a world of limitless visual inspiration in our free photo library: where creativity finds its home and images speak for themselves.
        </p>
        <input className="headerSearchBar" type="text" placeholder="Search through our image library..."/>
        <svg className='headerSearchBarIcon' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.4701 0.0103703C4.81537 0.138912 3.30377 0.825552 2.12182 1.98568C0.537855 3.53957 -0.219555 5.71501 0.0554286 7.92463C0.306291 9.94875 1.4207 11.7646 3.10919 12.902C3.41955 13.1119 3.54659 13.1867 3.86499 13.3478C4.59185 13.7171 5.32192 13.9368 6.18868 14.0458C6.52156 14.0865 7.41565 14.0865 7.74853 14.0458C8.3982 13.9645 8.95781 13.8213 9.54155 13.5886C9.94518 13.4291 10.5064 13.1281 10.8586 12.8841L10.9872 12.7962L12.7159 14.5421C18.8829 20.769 18.7784 20.6633 18.8717 20.717C19.1756 20.8878 19.5326 20.839 19.777 20.5917C20.015 20.3509 20.0665 20.0075 19.9121 19.6919C19.8783 19.6219 19.1692 18.8979 16.0012 15.6908C12.4441 12.09 12.1354 11.7727 12.1547 11.7451C12.1676 11.7288 12.219 11.6686 12.2673 11.61C13.4154 10.2498 14.0169 8.47459 13.9252 6.7108C13.8737 5.71827 13.6599 4.86241 13.2498 4.0033C12.978 3.43543 12.7031 3.00262 12.2978 2.50636C12.1274 2.29808 11.6626 1.82785 11.4552 1.65375C10.3504 0.727924 9.10254 0.189352 7.69868 0.0331497C7.41887 0.00223351 6.73704 -0.0107822 6.4701 0.0103703ZM7.72441 1.5545C8.97389 1.74649 10.061 2.30785 10.9116 3.20439C11.7414 4.07652 12.2447 5.14715 12.4072 6.37887C12.4458 6.68152 12.4458 7.38443 12.4072 7.69683C12.3203 8.37371 12.1531 8.93018 11.8572 9.52733C11.3796 10.4922 10.6045 11.3188 9.6702 11.8574C8.12 12.7506 6.20798 12.8173 4.6015 12.0331C3.03361 11.2683 1.92081 9.8137 1.58955 8.09548C1.53005 7.78307 1.50753 7.56992 1.49788 7.19243C1.48824 6.77264 1.50432 6.50416 1.56542 6.13318C1.82433 4.55326 2.75863 3.15394 4.11907 2.31273C4.84754 1.86039 5.62263 1.60656 6.5505 1.51545C6.58588 1.51219 6.81423 1.51056 7.05705 1.51382C7.40601 1.5187 7.54591 1.52683 7.72441 1.5545Z" fill="#727272"/>
        </svg>
        <div className="headerSliderContainer">
            <img className="headerSliderImage" src="../src/photo.jpg"/>
        </div>
    </header>
    </>
}