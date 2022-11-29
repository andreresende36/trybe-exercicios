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
    }))
    target.innerHTML = this.state.target.id
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
