import React from 'react';

function silvio() {
  return console.log('Ai ai ai ui ui!')
}

function ratinho() {
  return console.log('Ratinhooooo!')
}

function chaves() {
  return console.log('Ngm tem paciência comigo!')
}

class Buttons extends React.Component {
  render(){
    return(
      <>
        <button onClick={silvio}>Silvio</button>
        <button onClick={ratinho}>Ratinho</button>
        <button onClick={chaves}>Chaves</button>
      </>
    );
  }
}

export default Buttons
