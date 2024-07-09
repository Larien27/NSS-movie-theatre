import './Card.css'
import defaultImage from '../img/default.jpg'


function Card({ title, image, obj, onClick }) {

    function importAllImages(r) {
        let images = {};
        r.keys().forEach((key) => (images[key] = r(key)));
        return images;
    }
      
    const images = importAllImages(require.context('../img/', false, /\.(png|jpe?g|svg)$/));
    const imageKeys = Object.keys(images);
    const selectedImage = imageKeys.find(key => key.includes(image));

    const imageSource = selectedImage ? images[selectedImage] : defaultImage;

    return (
        <div className='card' onClick={onClick}>
            <img src={imageSource} alt={title + ' poster'}/>
            <div className='image-overlay'>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Card