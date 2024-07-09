import './index.css'
import { useState, useRef } from 'react'
import Card from '../components/Card'
import DetailPanel from '../components/DetailPanel'
import movieData from '../data.json'

function Home() {

    //const [data] = useState([]);

 /*   useEffect(() => {
        fetch(`http://localhost:8082/MovieMicro/Movies`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    }, []);*/


    const [activeBox, setActiveBox] = useState(null);
    const nowShowingTitleRef = useRef(null);


    const handleCardClick = (movie) => {
        setActiveBox(movie);
        nowShowingTitleRef.current.scrollIntoView({ behavior: 'smooth' });
    }

   
    const renderMovies = () => {
        let movies = [];

        for (const movie of movieData) {
            movies.push(<Card title={movie.name} image={`${movie.id}.jpg`} onClick={() => handleCardClick(movie)}></Card>);
        }
    
        return movies;
    }

    return (
        <>
            <h1>Welcome to MovieMasters</h1>
            {console.log(activeBox)}
            <h2 id='now-showing-title' ref={nowShowingTitleRef}>Now showing</h2>
            { activeBox !== null && (
                <DetailPanel movie={activeBox}></DetailPanel>
            )}
            <div className='cards'>
                {renderMovies()}
            </div>
        </>
    );
}

export default Home