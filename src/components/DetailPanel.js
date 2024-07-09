import './DetailPanel.css'
import defaultImage from '../img/default.jpg'
import ScreeningTime from './ScreeningTime'


function DetailPanel({movie}) {

    const image = movie.id + '.jpg';
    console.log("M" + movie + ", " + movie.id);
    
    function importAllImages(r) {
        let images = {};
        r.keys().forEach((key) => (images[key] = r(key)));
        return images;
    }

    const renderScreeningTimes = () => {
        let screenings = [];

        console.log("Movie.screenings: " + movie.screenings);
        if (Array.isArray(movie.screenings)) {
            for (const screening of movie.screenings) {
                console.log(screening);
                screenings.push(<ScreeningTime date={screening.date} time={screening.time} movie={movie.id} screening={screening}></ScreeningTime>)
            }
        }
        return screenings.length ? screenings : <div>No screenings available</div>;
    }
      
    const images = importAllImages(require.context('../img/', false, /\.(png|jpe?g|svg)$/));
    const imageKeys = Object.keys(images);
    const selectedImage = imageKeys.find(key => key.includes(image));

    const imageSource = selectedImage ? images[selectedImage] : defaultImage;


    return (
        <div className="detail-panel">
            <img src={imageSource} alt={movie.id + ' poster'}/>
            <div className='info-box'>
                <h3>{movie.name}</h3>
                <p>{movie.description}</p>
            </div>
            <div className='schedule-box'>
                {renderScreeningTimes()}
            </div>
        </div>
    )
}

export default DetailPanel