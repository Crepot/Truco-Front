import React from 'react';
import carta1 from '../img/back.png';
import mazo from '../img/back.png';
import { useParams } from 'react-router';
import '../css/App.css';
import '../css/Mazo.css';
import '../css/Tablero.css';
import NavBar from '../components/NavBar/NavBar';
import Mazo from '../components/mazo/mazo';
import carta2 from '../img/Espada/01.png';
import carta3 from '../img/Espada/18.png';
// import CartaJugada from '../components/cards/cartaJugada';

const App = () => {
  const trucoId = useParams();
  console.log('Este es el id del truco => ',trucoId)


  const handleCklick  =  () => {
    console.log('HANDLE CLICK')
}

  return (
    <div>
      <div className='navbar'>
        <NavBar></NavBar>
      </div>
      <div className="App">
        <div className="Tablero">
          {/* TODO: Ver quién es el mano para dejar el mazo en su lugar  */}

            <div className='tablero'>

            <div onClick={() => handleCklick()}>
            <Mazo value={''} key={''} onClick={()=> handleCklick} turn={1} visible={false} src={''}/>
            </div>

              {/* <CartaJugada/> */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
