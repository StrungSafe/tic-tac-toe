import { useEffect, useState } from 'react';
import * as bootstrap from 'react-bootstrap';

import Address from './Address';

import './App.css';

//check for address
//    create address
//    import address
//check for games
//    if existing game let user play existing or start a new one
//    if no games then start a new game
//start new game
//    choose opponent, need address
//    how to cordinate x/y player?
//finish game
//game timeout
//settings
//    network: mainnet or chipnet

function App() {
  const [address, setAddress] = useState(undefined)
  useEffect(() => {
    if(address) {
      //check for existing games
      //start new game/select from existing games
    }
    //go to get address route?
  }, [address]);
  return (
    <div className="app">
      { !address && <Address setAddress={setAddress} />}
    </div>
  );
}

export default App;
