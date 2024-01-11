import React from 'react'
import {Link} from 'react-router-dom'
import { lists } from '../../data/list';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Home_client = () => {

    const [quantity, setQuantity] = useState(0);

    const handleClick = event => {
        setQuantity(() => setQuantity(quantity === 0 ? 1:0));
    }

    return (
        <div className="home">
            <div className="home-title"><h2>Home</h2></div>
            <div className="home-content">
                {lists.map((list) => (
                    <div className="home-list" key={list.id}>
                        <div className="home-list-header">
                            <span className="home-list-title">
                                <Link to={`/categories/${list.id}`} className="home-list-title-link">
                                    <h3 className="home-list-title-name">{list.title}</h3>
                                </Link>
                            </span>
                        </div>
                        <div className="home-games">
                            {list.games.map((game) => (
                                <div className="home-game" key={game.id}>
                                    <Link to={`/games/${game.id}`} className="home-game-link">
                                        <img src={game.image} alt="" className="home-game-img" />
                                        <div className="home-game-info">
                                            <div className="home-game-price-box">
                                                <span className="home-game-price">${game.price}</span>
                                            </div>
                                            <div className="home-game-name-box">
                                                <span className="home-game-name">{game.name}</span>
                                            </div>
                                            <div className="home-game-rating">
                                                <span className="home-game-rating-title">{game.rating}</span>
                                                <FontAwesomeIcon icon={icon({name: "star"})} className="home-game-rating-star" />                                           
                                            </div> 
                                        </div>                                                                          
                                    </Link>
                                    <div className="home-game-button-box">
                                        <button className={`home-game-button ${quantity === 0? "home-game-button-add" : "home-game-button-remove"}`} onClick={handleClick}>{quantity === 0 ? "Add to Cart":"Remove"}</button>
                                        <button className="home-game-button">Buy now!</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>                                    
        </div>
    )
}

export default Home_client