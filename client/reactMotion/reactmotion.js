import React from 'react';
import {Motion, spring} from 'react-motion';
import ToDoModule from '../todo/todomodule';
import NewPaula from '../new-paula';
import {connect} from 'react-redux';
class Animadiv extends React.Component {
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
          transform: `rotate(${val.x}turn)`
        }
        return <div style={style}>
                <img src="chuck.gif"/>
                <h2> Chuck Norris once {this.props.paula}</h2>
                <div><NewPaula/></div>
              </div>
      }}
      </Motion>
    )
  }
}

export default connect((state, props) => ({
  paula: state.paula,
}))(Animadiv);

