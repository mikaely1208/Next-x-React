import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profil from './components/Profile/profil'
import PropsExample from './components/PropsExample/PropsExample'

function App() {
  // react nous permet de mettre à jour le state de notre composant avec des outils appeleés hooks
  const [name, setName] = useState('React')
  
  function onClickHandler() {
  setName('Vite');

  //On peut utiliser aussi une fonction pour mettre à jour le state
  //Cette syntaxe est utile si on veut utiliser la valeur précédente du state
  setName((prev) => {
    return prev + "Vite";
    });

}
  
  return (
    <>
     {/* <h1>Vite + React</h1>
     <div className='card'>{name}</div> */}
     {/* <button onClick={onClickHandler}>click me!</button> */}
     <Profil/>
     {/* <PropsExample name={name} childonClickHandler={onClickHandler}/> */}
    </>
  )
}

export default App;