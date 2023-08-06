import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";


function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([]);

    //create an event handler functions use on + handle + eventName
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow key={index}  type={animal} />
    });

    return (
        //pass as a prop to a plain element 
        <div className="app">
            <button onClick={handleClick}>Add Animal </button>
            <div className="animal-list">{renderedAnimals}</div>

        </div>
    );
}
export default App;