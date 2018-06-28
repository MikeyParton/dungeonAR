'use strict';

import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';

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

ViroARTrackingTargets.createTargets({
  ignite: {
    source: require('./res/ignite.jpg'),
    orientation: 'Up',
    physicalWidth: 0.7
  }
});

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
           <ViroARImageMarker
             target={'ignite'}
           >
             <ViroNode position={[0, 0, -1]} dragType="FixedToWorld" onDrag={() => {}}>
              <Character name="jonathan" position={[0, 0, -3]} />
             </ViroNode>
           </ViroARImageMarker>
           <ViroNode position={[0, 0, -10]} dragType="FixedToWorld" onDrag={() => {}}>
             <Character
               name="coin"
               position={[0, 0, -8]}/>
           </ViroNode>
        </ViroARScene>
    );
  }
}

ViroAnimations.registerAnimations({
  rotateCoin:{properties:{rotateY:"+=45"}, duration:250}
})

module.exports = HelloWorldSceneAR;
