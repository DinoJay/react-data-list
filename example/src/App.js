import React, { Component } from 'react'

import ExampleComponent from 'react-data-list'

const values = Array.from(new Array(30), (_, i) => i)

export default class App extends Component {
  render () {
    return (
      <div style={{overflow:'hidden'}}>
        <div style={{width: '18rem', height:'18rem', border: '2px solid black', overflow:'hidden'}}>
          <ExampleComponent listStyle={{border: '2px solid black', width: '100%'}}>
            {values.map(d => <div>{d}</div>)}
          </ExampleComponent>
        </div>
      </div>
    )
  }
}
