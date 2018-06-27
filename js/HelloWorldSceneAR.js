'use strict';

import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';

import {
  ViroNode,
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight
} from 'react-viro';

import Character from './components/Character/Character'

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super()

    this.state = { text : "Initializing AR..." };

    this._onInitialized = this._onInitialized.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({ text : "Hello World" });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  onClick() {
    Alert.alert('What do you want?')
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
       <ViroAmbientLight color="#FFFFFF" intensity={400} />
         <ViroNode position={[0, 0, -1]} dragType="FixedToWorld" onDrag={() => {}}>
           <Character name={"astroman"} position={[0, 0, -10]} />
         </ViroNode>
      </ViroARScene>
    );
  }
}

module.exports = HelloWorldSceneAR;
