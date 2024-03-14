import './/ImageSectionComponent.css'

export const ImageSection = () => {
    const elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const elementosDiv = elementos.map((elemento, index) => (
        <div key={index} className={`ImageContainer-${index + 1}`}>
            <img className={'ImageSectionImg'} src="../src/photo.jpg"/>
        </div>
    ));

    return (
        <section className='ImageSection'>
            {elementosDiv}
        </section>
    );
};