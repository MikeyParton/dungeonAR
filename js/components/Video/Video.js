import React, { Component } from 'react';
import { Alert } from 'react-native';

import {
  ViroVideo,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroARImageMarker,
  ViroARTrackingTargets
} from 'react-viro';

ViroARTrackingTargets.createTargets({
  sticker: {
    reset: false,
    orientation: 'Up',
    physicalWidth: 0.07,
    source: require('../../res/ignite.jpg')
  }
});

export default class Sticker extends Component {
  render() {
    return (
      <ViroARImageMarker target={'sticker'}>
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}
        >
          <ViroPortal position={[0.1, 0.1, -1]} scale={[0.1, 0.1, 0.1]}>
            <Viro3DObject
              source={require('./portal_ship.vrx')}
              resources={[
                require('./portal_ship_diffuse.png'),
                require('./portal_ship_normal.png'),
                require('./portal_ship_specular.png')
              ]}
              type="VRX"
            />
          </ViroPortal>
          <ViroVideo
            source={require('./upload.mov')}
            loop={true}
            position={[5, -12, -45]}
            scale={[44, 22, 1]}
          />
        </ViroPortalScene>
      </ViroARImageMarker>
    );
  }
}
