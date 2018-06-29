'use strict';

import React, { Component } from 'react';
import { StyleSheet, Alert, ActionSheetIOS } from 'react-native';

import {
  ViroNode,
  ViroAnimations,
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight
} from 'react-viro';

import Character from './components/Character/Character';
import characters from './components/Character/characters';
import Sticker from './components/Sticker/Sticker';

let characterNames = Object.keys(characters)

export default class HelloWorldSceneAR extends Component {
  state = {
    characterIndex: 0,
    coins: [
      [0, 0, -8],
      [0, -2, -10],
      [2, -3, -10],
      [-2, 1, -10],
      [-2, 5, -10]
    ]
  }

  removeCoin = (indexToRemove) => {
    const newCoins = this.state.coins.filter((item, index) => index !== indexToRemove)
    this.setState({ coins: newCoins })
  }

  nextCharacter = () => {
    let { characterIndex } = this.state
    characterIndex ++
    if (characterIndex == characterNames.length) {
      characterIndex = 0
    }

    this.setState({ characterIndex })
  }

  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      // Nothing to see here, all is well in the world
    } else if (state == ViroConstants.TRACKING_NONE) {
      Alert.alert('Error, everything is broken')
    }
  }

  render() {
    const characterName = characterNames[this.state.characterIndex]

    if (characterName === "coin" && this.state.coins.length === 0) {
      this.nextCharacter()
    }

    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#FFFFFF" intensity={400} />
        <Sticker />
        {
          characterName === "coin"
            ? this.state.coins.map((pos, index) => (
              <Character
                key={index}
                name={"coin"}
                position={pos}
                winCoin={this.props.winCoin}
                loseCoin={this.props.loseCoin}
                dismiss={this.nextCharacter}
                winHeart={this.props.winHeart}
                loseHeart={this.props.loseHeart}
                hackyAfterClick={() => this.removeCoin(index)}
              />
            ))
            : (
              <React.Fragment>
                <Character
                  name={characterName}
                  position={[0, 0, -8]}
                  winCoin={this.props.winCoin}
                  loseCoin={this.props.loseCoin}
                  dismiss={this.nextCharacter}
                  winHeart={this.props.winHeart}
                  loseHeart={this.props.loseHeart}
                />
              </React.Fragment>
            )
        }
       </ViroARScene>
    )
  }
}

ViroAnimations.registerAnimations({
  rotateCoin:{properties:{rotateY:"+=45"}, duration:250}
})

module.exports = HelloWorldSceneAR;
