import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Viro3DObject } from 'react-viro';
import characters from './characters';

export default class Character extends Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.character.onClick && this.character.onClick()
  }

  render() {
    this.character = characters[this.props.name];

    const options = characters[this.props.name];

    if (!options.model) return null;

    const offset = options.offset || [0, 0, 0]
    const position = this.props.position || [0, 0, 0]

    const rotationOffset = options.rotationOffset || [0, 0, 0]
    const rotation = this.props.rotation || [0, 0, 0]

    const initialScale = options.initialScale || [1, 1, 1]
    const scale = this.props.scale || [1, 1, 1]

    return (
      <Viro3DObject
        onClick={this.onClick}
        source={options.model}
        resources={[options.material]}
        position={offset.map(function(value, index) {
          return value + position[index]
        })}
        rotation={rotationOffset.map(function(value, index) {
          return value + rotation[index]
        })}
        scale={initialScale.map(function(value, index) {
          return value * scale[index]
        })}
        type="OBJ"
      />
    );
  }
}
