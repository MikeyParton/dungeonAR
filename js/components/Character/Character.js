import React, { Component } from 'react';
import { ActionSheetIOS, Alert } from 'react-native';
import { Viro3DObject } from 'react-viro';
import characters, { SAY, WIN_COIN, LOSE_COIN, WIN_MORALE, LOSE_MORALE } from './characters';
import { randomElement } from 'js/helpers'

export default class Character extends Component {
  onClick = () =>  {

    // Pick a random clickAction
    const actions = Object.values(this.character.clickActions)
    const { text, type, options } = randomElement(actions)

    switch (type) {
      case SAY:
        const optionLabels = options.map(option => option.text)
        ActionSheetIOS.showActionSheetWithOptions({
          title: text,
          options: ['Cancel', ...optionLabels],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex > 0) {
            const selectedOption = options[buttonIndex - 1]

            // Show the option's response
            selectedOption.response && Alert.alert(selectedOption.response)
          }
        })
        break;
      case WIN_COIN:
        this.props.onCoinClick()
        break;
      default:
    }
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

    const initialAnimation = options.animation || {}
    const animation = this.props.animation || {}

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
        animation={initialAnimation}
      />
    );
  }
}
