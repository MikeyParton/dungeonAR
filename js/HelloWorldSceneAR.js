'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight
} from 'react-viro';

ViroMaterials.createMaterials({
  wood: {
    diffuseTexture: require('./res/wood.jpg'),
  },
});

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super()

    this.state = { text : "Initializing AR..." };

    this._onInitialized = this._onInitialized.bind(this);
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({ text : "Hello World" });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  render() {
    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        onCameraARHitTest={this.onMove}
        >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
         <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["wood"]} />
         <ViroAmbientLight color="#FFFFFF" intensity={400} />
         <Viro3DObject
            source={require('./res/astroman.obj')}
            resources={[require('./res/astroman.mtl')]}
            position={[5, 5.5, 1.15]}
            scale={[.1, .1, .1]}
            rotation={[90, 90, 0]}
            type="OBJ"
          />
      </ViroARScene>
    );
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
