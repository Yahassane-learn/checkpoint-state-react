import React , {Component, useState} from 'react';
import './App.css';
import Profil from './Profil' ;
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Button from 'react-bootstrap/Button';
import TimeInterval from './timeInterval';


class App extends Component {
  render(){
    return (
  <div className= 'App' >
    
    <ButtonShowsProfil />
    <TimeInterval />

  </div>
    )
  }

}
function ButtonShowsProfil() {
  const [show, setShow] = useState(true)
  return(
    <div>
      {
        show?<Profil /> : null
      }
      <Button onClick={() =>setShow(true) }  variant="success">My Profil</Button>
      <Button onClick={() =>setShow(false) } variant="danger"> Hide This </Button>

    </div>
  );

}



export default App;
