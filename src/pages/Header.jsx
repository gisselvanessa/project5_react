import React from 'react'
import './styles/header.css'
const Header = () => {
    return (
        <div className="pokedex__container">
            <span className="red__bg"></span>
            <span className="black__bg"></span>
            <div>
                <div className="pokedex__header">
                    <header>
                        <a href="#/pokedex">
                            <img
                                className="pokedex__img"
                                src="\images\image 11.png"
                                alt=""
                            />
                        </a>

                        <span className="white__ball"></span>
                        <span className="black__ball"></span>
                    </header>
                </div>
            </div>
        </div>
    );
}

export default Header