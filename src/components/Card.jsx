import noImage from '../assets/no-image.png'
import './Card.css'

function Card({id, title, genre, year, img, isFavorite, toggleFavorite}) {

    return (
        <li key={id} className='gameCard'>
            <div>
                <div className='cap'>
                    <div className='cercles'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>{title}.exe</p>
                </div>
                <img src={img} alt={title} height={225}/>
                <div className="fav_gen">
                    <div className="genera">
                        <p> {genre} </p>
                    </div>
                    <div className='favbtn' onClick={() => toggleFavorite(id) }>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={isFavorite ? "#ec6a6a" : "#e3e3e3"}>
                            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/>
                        </svg>
                    </div>
                </div>
                <h3 className='gameTitle'> {title} </h3>
                <p className='gameYear'> {year} </p>
            </div>
        </li>
    )
}

export default Card