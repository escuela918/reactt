import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
 const [count, setCount] = useState(0);
// const[?, set?]= useState("valor inicial");
//useState 
//primera letra siempre en mayuscula  

//como hacer una funcion 
//useEffect(function())

 // el estado tiene tres partes
 const [variable, setVariable] = useState("valor inicial");


 const [personajes, setPersonajes] = useState([]);


 useEffect(() => {
   fetch("https://rickandmortyapi.com/api/character")
     .then((res) => res.json())
     .then((result) => setPersonajes(result.results));
 }, []);
// {!personajes?}( es como un if - ! es diferente 
//{personajes.map((personaje) => ( es como un else if - 

 return (
   <>
 
     {!personajes ? (
       <div>cargando...</div>
     ) : (
       <ul>
         {personajes.map((personaje,index) => (
           <li key={personaje.id}>
             <h3>{personaje.name}</h3>
             <img src={personaje.image} alt="" />
           </li>
         ))}
       </ul>
     )}
   </>
 );
}

//tambien se puede usar 
//    <li key={index}>
export default App;