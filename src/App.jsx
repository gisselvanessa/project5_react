// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PokeCard from "./components/Pokedex/PokeCard";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
    // const { nameTrainer } = useSelector((state) => state);
    // console.log({ nameTrainer });

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/pokecard" element={<PokeCard />} /> */}
                <Route element={<ProtectedRoutes />}>
                    <Route path="/pokedex" element={<Pokedex />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
