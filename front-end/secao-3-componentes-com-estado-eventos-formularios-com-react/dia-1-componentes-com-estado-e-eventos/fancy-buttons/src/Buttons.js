import React from 'react';

class Buttons extends React.Component {
  state = {
    botao1: 0,
    botao2: 0,
    botao3: 0,
  }
  
  counter = ({ target }) => {
    this.setState((prevState) => ({ 
      [target.id]: prevState[target.id] + 1,
    }), () => {
      const buttonTarget = target.id;
      const newNumber = this.state[buttonTarget]
      if (newNumber % 2 === 0){
        target.style.backgroundColor = 'green';
        console.log(target.style.backgroundColor);
      } else {
        target.style.backgroundColor = 'white';
        console.log(target.style.backgroundColor);
      }
    });
  }

  render(){  
    return(
      <>
        <button onClick={this.counter} id='botao1'>{this.state.botao1}</button>
        <button onClick={this.counter} id='botao2'>{this.state.botao2}</button>
        <button onClick={this.counter} id='botao3'>{this.state.botao3}</button>
      </>
    );
  }
}

export default Buttons
