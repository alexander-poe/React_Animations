import React, { Component } from 'react'
import { Shake } from 'reshake'

class App extends Component {
  render () {
    return (
      <Shake 
        h={36}
        v={5}
        r={3}
        dur={40}
        int={78.4}
        max={100}
        fixed={true}
        fixedStop={false}
        freez={false}>
        <h1>&lt;Shake /&gt;</h1>
      </Shake>
    )
  }
}