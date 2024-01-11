import React from 'react'
import {Link} from 'react-router-dom'
import { category } from '../../data/category';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Category = () => {

    const [quantity, setQuantity] = useState(0);

    const handleClick = event => {
        setQuantity(() => setQuantity(quantity === 0 ? 1:0));
    }

    return (
        <div className="category">
            <div className="category-list" key={category.id}>
                <div className="category-list-header">
                    <span className="category-list-title">
                        <Link to={`/categories/${category.id}`} className="category-list-title-link">
                            <h2 className="category-list-title-name">{category.name} List:</h2>
                        </Link>
                    </span>
                </div>
                <div className="category-games">
                    {category.game_list.map((game) => (
                        <div className="category-game" key={game.id}>
                            <Link to={`/games/${game.id}`} className="category-game-link">
                                <img src={game.image} alt="" className="category-game-img" />
                                <div className="category-game-info">
                                    <div className="category-game-price-box">
                                        <span className="category-game-price">${game.price}</span>
                                    </div>
                                    <div className="category-game-name-box">
                                        <span className="category-game-name">{game.name}</span>
                                    </div>
                                    <div className="category-game-rating">
                                        <span className="category-game-rating-title">{game.rating}</span>
                                        <FontAwesomeIcon icon={icon({name: "star"})} className="category-game-rating-star" />                                           
                                    </div> 
                                </div>                                                                          
                            </Link>
                            <div className="category-game-button-box">
                                <button className={`category-game-button ${quantity === 0? "category-game-button-add" : "category-game-button-remove"}`} onClick={handleClick}>{quantity === 0 ? "Add to Cart":"Remove"}</button>
                                <button className="category-game-button">Buy now!</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category