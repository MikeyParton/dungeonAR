import React, { Component } from 'react';
import { Alert } from 'react-native';

import {
  ViroNode,
  ViroAnimations,
  ViroARImageMarker,
  ViroARTrackingTargets
} from 'react-viro';

import Character from './../Character/Character';

ViroARTrackingTargets.createTargets({
  sticker: {
    orientation: 'Up',
    physicalWidth: 0.07,
    source: require('../../res/ignite.jpg')
  }
});

ViroAnimations.registerAnimations({
  scaleUp: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
    duration: 500,
    easing: 'bounce'
  },
  scaleDown: {
    properties: { scaleX: 0, scaleY: 0, scaleZ: 0 },
    duration: 200,
    easing: 'bounce'
  },
  sticker: [['scaleUp', 'scaleDown']]
});

export default class Sticker extends Component {
  handleAnchorFound = () => {
    // Alert.alert('lol');
  };

  render() {
    return (
      <ViroARImageMarker
        target={'sticker'}
        onAnchorFound={this.handleAnchorFound}
      >
        <Character
          animation={{ name: 'sticker' }}
          position={[1, 1, -10]}
          dismiss={() => {

          }}
          name="jonathan"
        />
      </ViroARImageMarker>
    );
  }
}
