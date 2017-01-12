import React from 'react';
import {Motion, spring} from 'react-motion';
import ToDoModule from '../todo/todomodule';

export default class Animadiv extends React.Component {
  render(){
    return (
      <Motion defaultStyle={{x: 0}} style={{x: spring(360)}}>
      {val => {
        let style = {
          width: val.x,
          height: val.x,
          position: 'absolute',
          top: val.x*0.25,
          left: val.x*0.25,
          transform: `rotate(${val.x}deg)`
        }
        return <div style={style}>
                <h2> TO DO LIST </h2>
                <div><ToDoModule/></div>
              </div>
      }}
      </Motion>
    )
  }
}
