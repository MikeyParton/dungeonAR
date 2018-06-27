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
           <Viro3DObject
             onClick={this.onClick}
             source={require('./res/astroman.obj')}
             resources={[require('./res/astroman.mtl')]}
             position={[0, -5, -10]}
             scale={[.05, .05, .05]}
             rotation={[270, 0, 0]}
             type="OBJ"
           />
         </ViroNode>
      </ViroARScene>
    );
  }
}

module.exports = HelloWorldSceneAR;
