import React, { Component } from 'react'

class Form extends Component {
  state = {}

  render() {
    return (
      <div>
        <select>
          <option>Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
          <option>Opção 4</option>
        </select>
        <input type='text'></input>
        <input type="date"></input>
        <textarea></textarea>
      </div>
    )
  }
}

export default Form