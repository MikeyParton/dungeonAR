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

import Video from './components/Video/Video';
import Character from './components/Character/Character';
import characters from './components/Character/characters';
import Sticker from './components/Sticker/Sticker';

let characterNames = Object.keys(characters).filter(c => c !== 'coin')

export default class HelloWorldSceneAR extends Component {
  state = {
    characterIndex: 0
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
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#FFFFFF" intensity={400} />
        <Video />
        {/*<Sticker
          loseCoin={this.props.loseCoin}
          winHeart={this.props.winHeart}
          loseHeart={this.props.loseHeart}
        />*/}
        <Character
          name={characterNames[this.state.characterIndex]}
          position={[0, 0, -10]}
          loseCoin={this.props.loseCoin}
          dismiss={this.nextCharacter}
          winHeart={this.props.winHeart}
          loseHeart={this.props.loseHeart}
        />
        <Character
          name="coin"
          position={[0, 0, -8]}
          winCoin={this.props.winCoin}
          loseCoin={this.props.loseCoin}
        />
       </ViroARScene>
    )
  }
}

ViroAnimations.registerAnimations({
  rotateCoin:{properties:{rotateY:"+=45"}, duration:250}
})

module.exports = HelloWorldSceneAR;
