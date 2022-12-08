import './App.css';
import React from 'react';
import User from './components/User';

class App extends React.Component {
  state = {
    loading: true,
    user: {},
  }

   fetchUser = async () => {
    const response = await fetch('https://api.randomuser.me')
    const data = await response.json();
    this.setState({ user: data }, () => {
      this.setState({loading: false})
    })
    console.log(data);
  }

  componentDidMount(){
    this.fetchUser();
  }

  render() {
    const { loading, user } = this.state;
    return (
      <div className="App">
        { loading ? 'Carregando...' : (<User user={user} />) }
        <button type='button' onClick={this.fetchUser}>
          Trocar
        </button>
      </div>
    );
  }
}

export default App;
