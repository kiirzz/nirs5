import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { game } from '../../data/game'

const Games = () => {

    const [quantity, setQuantity] = useState(0);

    const handleClick = event => {
        setQuantity(() => setQuantity(quantity === 0 ? 1:0));
    }

    const reviews = []

    return (
        <div className="game" key={game.id}>
            <div className="game-head-link">
                <Link to={`/`} className="game-head-link-text"><h5>Home</h5></Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" class="arrow"><path fill="currentColor" d="M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8l-4.293 4.293Z"></path></svg>
                <Link to={`/games/${game.id}`} className="game-head-link-text"><h5>{game.name}</h5></Link>
            </div>
            <div className="game-content">
                <div className="game-images">
                    <div className="game-image">
                        <img src={game.image} alt="" className="game-img" />
                    </div>
                </div>
                <div className="game-text">
                    <div className="game-text-header">
                        <div className="game-header">
                            <span className="game-title">
                                <h2 className="game-name">{game.name}</h2>
                            </span>
                        </div>
                        <div>
                            <span className="game-price-title">
                                <h3 className="game-price">${game.price}</h3>
                            </span>
                        </div>
                        <div className="game-sold-box">
                            <span className="game-sold-text">{game.rating}</span>
                            <FontAwesomeIcon icon={icon({name: "star"})} className="game-sold-text pt-1 me-1" />
                            <div className="game-sold-text game-rating">rating</div>
                            <span className="game-sold ms-3 me-1">{game.sold_quantity}</span>
                            <div className="game-sold-text">purchased</div>
                        </div>
                    </div>                  
                    <div className="game-text-info">
                        <div className="game-info">
                            <div className="game-text-info-head">RELEASE DATE</div>
                            <div className="game-text-info-body">{game.released}</div>
                        </div>
                        <div className="game-info">
                            <div className="game-text-info-head">PUBLISHER</div>
                            <div className="game-text-info-body">
                                <Link to={`/publisher/${game.publisher_id.id}`} className="game-publisher-link">{game.publisher_id.name}</Link>
                            </div>
                        </div>
                        <div className="game-info game-category">
                            <div className="game-text-info-head">CATEGORY</div>
                            <div className="game-text-info-body">
                                {game.category_id.map((cate) => (
                                    <span className="game-category-box">
                                        <Link to={`/category/${cate.id}`} className="game-category-link">{cate.name}</Link>
                                    </span>
                                ))}
                            </div>
                        </div>                        
                    </div>
                    <div className="game-button-box">
                        <button className={`game-button ${quantity === 0? "game-button-add" : "game-button-remove"}`} onClick={handleClick}>{quantity === 0 ? "Add to Cart":"Remove from Cart"}</button>
                        <button className="game-button">Buy now!</button>
                    </div>
                </div>
            </div>
            <div className="game-review">
                <h3>Description:</h3>
                <span className="game-description">{game.description}</span>
            </div>
            <div className="game-review-box w-100">
                <h3>Comment:</h3>
                <div className="game-review w-100">
                    {reviews.length === 0 ? (
                        <div className="game-review-none">
                            <span className="game-review-no-cmt">No comment</span>
                        </div>
                    )
                    : <div></div>}
                </div>
            </div>
        </div>
    )
}

export default Games