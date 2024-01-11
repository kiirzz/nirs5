import React from 'react'
import {Link} from 'react-router-dom'
import { publisher } from '../../data/publisher';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Publisher = () => {

    const [quantity, setQuantity] = useState(0);

    const handleClick = event => {
        setQuantity(() => setQuantity(quantity === 0 ? 1:0));
    }

    return (
        <div className="publisher">
            <div className="publisher-list" key={publisher.id}>
                <div className="publisher-list-header">
                    <span className="publisher-list-title">
                        <Link to={`/categories/${publisher.id}`} className="publisher-list-title-link">
                            <h2 className="publisher-list-title-name">{publisher.name}</h2>
                        </Link>
                    </span>
                </div>
                <div className="publisher-games">
                    {publisher.game_list.map((game) => (
                        <div className="publisher-game" key={game.id}>
                            <Link to={`/games/${game.id}`} className="publisher-game-link">
                                <img src={game.image} alt="" className="publisher-game-img" />
                                <div className="publisher-game-info">
                                    <div className="publisher-game-price-box">
                                        <span className="publisher-game-price">${game.price}</span>
                                    </div>
                                    <div className="publisher-game-name-box">
                                        <span className="publisher-game-name">{game.name}</span>
                                    </div>
                                    <div className="publisher-game-rating">
                                        <span className="publisher-game-rating-title">{game.rating}</span>
                                        <FontAwesomeIcon icon={icon({name: "star"})} className="publisher-game-rating-star" />                                           
                                    </div> 
                                </div>                                                                          
                            </Link>
                            <div className="publisher-game-button-box">
                                <button className={`publisher-game-button ${quantity === 0? "publisher-game-button-add" : "publisher-game-button-remove"}`} onClick={handleClick}>{quantity === 0 ? "Add to Cart":"Remove"}</button>
                                <button className="publisher-game-button">Buy now!</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Publisher