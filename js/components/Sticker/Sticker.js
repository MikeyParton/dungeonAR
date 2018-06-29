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
    reset: false,
    orientation: 'Up',
    physicalWidth: 0.07,
    source: require('../../res/ignite.jpg')
  }
});

ViroAnimations.registerAnimations({
  scaleUp: {
    properties: { scaleX: 0.1, scaleY: 0.1, scaleZ: 0.1 },
    duration: 500,
    easing: 'bounce'
  },
  scaleDown: {
    properties: { scaleX: 0, scaleY: 0, scaleZ: 0 },
    duration: 200,
    easing: 'bounce'
  }
});

export default class Sticker extends Component {
  state = {
    name: ['jonathan', 'mike', 'jae'][
      Math.floor(Math.random() * Math.floor(2))
    ],
    visible: false,
    animate: false
  };

  handleAnchorFound = () => {
    this.setState({ visible: true, animate: true });
  };

  handleDismiss = () => {
    this.setState({ visible: false, animate: true });
  };

  handleFinish = () => {
    this.setState({ animate: false });
  };

  render() {
    return (
      <ViroARImageMarker
        target={'sticker'}
        onAnchorFound={this.handleAnchorFound}
      >
        <Character
          animation={{
            name: this.state.visible ? 'scaleUp' : 'scaleDown',
            onFinish: this.handleFinish,
            run: this.state.animate
          }}
          dismiss={this.handleDismiss}
          position={[1, 1, -10]}
          name={this.state.name}
        />
      </ViroARImageMarker>
    );
  }
}
