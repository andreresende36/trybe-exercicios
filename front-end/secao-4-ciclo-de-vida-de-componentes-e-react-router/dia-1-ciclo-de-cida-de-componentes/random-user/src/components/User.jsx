import React, { Component } from 'react'

export default class User extends Component {
  render() {
    const { user: { results } } = this.props;
    const { 
      name: { title, first, last },
      email,
      dob: { age },
      picture: { large }
  } = results[0];

    return (
      <div>
        <span>{`Nome: ${title} ${first} ${last}`}</span>
        <br />
        <span>{`Email: ${email}`}</span>
        <br />
        <span>{`Idade: ${age}`}</span>
        <br />
        <img src={large} alt={`foto de ${first}`} />
      </div>
    )
  }
}