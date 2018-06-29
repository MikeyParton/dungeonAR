import React, { Component } from 'react';
import { ActionSheetIOS, Alert } from 'react-native';
import { Viro3DObject } from 'react-viro';
import characters, { SAY, WIN_COIN, LOSE_COIN, WIN_MORALE, LOSE_MORALE } from './characters';
import { randomElement, sumArrays, multiplyArrays, subtractArrays } from 'js/helpers'

const SWIPE_DURATION_THRESHOLD = 250
const SWIPE_DISTANCE_THRESHOLD = 1
const UP = 'UP'
const DOWN = 'DOWN'

export default class Character extends Component {
  state = {
    dragging: false,
    mouseDown: false,
    swipeStartTime: null,
    swipeOrigin: null
  }

  onClick = (stateValue, position, source) =>  {
    let { swipeDirection } = this.state
    const { swipeStartTime, swipeOrigin, mouseDown } = this.state

    // On mouseDown start record time and origin so we can tell if it was a swipe
    if (stateValue === 1 && !mouseDown) {
      const swipeStartTime = new Date()
      this.setState({
        swipeDirection: null,
        swipeStartTime,
        swipeOrigin: position,
        mouseDown: true
      })

      return
    }

    // On mouseUp compare position and time to determine if it was a swipe
    if (stateValue === 2 && mouseDown) {
      const swipeEndTime = new Date()

      const postitionDiff = subtractArrays(position, swipeOrigin)
      const swipeDuration = swipeEndTime - swipeStartTime

      if (swipeDuration < SWIPE_DURATION_THRESHOLD) {
        if (postitionDiff[1] > SWIPE_DISTANCE_THRESHOLD) {
          swipeDirection = UP
        }

        if (postitionDiff[1] < -SWIPE_DISTANCE_THRESHOLD) {
          swipeDirection = DOWN
        }
      }

      this.setState({
        swipeDirection,
        swipeStartTime: null,
        swipeOrigin: null,
        mouseDown: false
      })

      return
    }

    if (swipeDirection == UP) {
      return
    }

    if (swipeDirection == DOWN) {
      this.props.dismiss()
      return
    }

    const availableActions =this.character.clickActions
    if (!availableActions) return

    // Pick a random clickAction
    const { text, type, options } = randomElement(Object.values(availableActions))

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
        this.props.winCoin()
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
        onClickState={this.onClick}
        source={options.model}
        resources={[options.material]}
        position={sumArrays(offset, position)}
        rotation={sumArrays(rotationOffset, rotation)}
        scale={multiplyArrays(initialScale, scale)}
        type="OBJ"
        animation={animation}
      />
    );
  }
}
