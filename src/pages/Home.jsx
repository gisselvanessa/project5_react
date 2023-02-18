import React from "react";
import "./styles/home.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../store/slices/trainerName.slice";

const Home = () => {

    const dispatch =useDispatch()
    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setNameTrainer(e.target.name.value.trim()));
        e.target.name.value='';
        navigate('/pokedex')
    };

    return (
        <div className="home">
            <img className="home__img" src="images\image 11.png" alt="" />
            <div className="home__text">
                <h1 className="home__subtitle">Hi Trainer!</h1>
                <h3 className="home__description">
                    To start this pokedex give me your name
                </h3>
            </div>

            <form onSubmit={handleSubmit}>
                <input className="home__input" id="name" type="text" placeholder="Your name.." />
                <button className="home__button">Start</button>
            </form>
        </div>
    );
};

export default Home;
