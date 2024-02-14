import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useCart } from '../context/CartContext';
import { useGame } from '../context/GameContext';
import noImg from '../../img/noimg.jpg'

const Home_client = () => {

    const { games, fetchGames } = useGame();

    useEffect(() => {
        fetchGames();
    }, []);

    const { cart, handleCart } = useCart();

    return (
        <div className="home">
            <div className="home-title"><h2>Home</h2></div>
            <div className="home-content">
                <div className="home-games">
                    {games === undefined ? 
                        <div className="home-no-game"><span className="home-no-game-cmt">No games</span></div>
                        :games.map((game) => (
                            <div className="home-game" key={game.game_id}>
                                <Link to={`/games/${game.game_id}`} className="home-game-link">
                                    {(game.image === null)||(game.image === "") ? 
                                        <img src={noImg} alt="" className="home-game-img home-game-no-img" />
                                        : <img src={game.image} alt="" className="home-game-img" />
                                    }
                                    <div className="home-game-info">
                                        <div className="home-game-price-box">
                                            <span className="home-game-price">${game.price}</span>
                                        </div>
                                        <div className="home-game-name-box">
                                            <span className="home-game-name">{game.game_name}</span>
                                        </div>
                                        <div className="home-game-rating">
                                            <span className="home-game-rating-title">{game.rating}</span>
                                            <FontAwesomeIcon icon={icon({name: "star"})} className="home-game-rating-star" />                                           
                                        </div> 
                                    </div>                                                                          
                                </Link>
                                <div className="home-game-button-box">
                                    <button className={`home-game-button ${cart.includes(game.game_id) ? "home-game-button-remove" : "home-game-button-add"}`} onClick={() => handleCart(game.game_id)}>{cart.includes(game.game_id) ? "Remove":"Add to Cart"}</button>
                                    <button className="home-game-button">Buy now!</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>                                    
        </div>
    )
}

export default Home_client
