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
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroSpotLight
} from 'react-viro';

import { Consumer } from '../context'

import Character from './components/Character/Character'

export default class HelloWorldSceneAR extends Component {
  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      // Nothing to see here, all is well in the world
    } else if (state == ViroConstants.TRACKING_NONE) {
      Alert.alert('Error, everything is broken')
    }
  }

  render() {
    return (
      <Consumer>
        {({ addCoin }) => {
          return (
          <ViroARScene onTrackingUpdated={this._onInitialized}>
            <ViroAmbientLight color="#FFFFFF" intensity={400} />
            <Character name="jonathan" position={[0, 0, -10]} />
            <Character
              name="coin"
              position={[0, 0, -8]}
              onCoinClick={this.props.onCoinClick}
            />
           </ViroARScene>
          )
        }
        }
      </Consumer>
    );
  }
}

ViroAnimations.registerAnimations({
  rotateCoin:{properties:{rotateY:"+=45"}, duration:250}
})

module.exports = HelloWorldSceneAR;
