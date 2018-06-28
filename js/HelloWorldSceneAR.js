'use strict';

import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Pedometer } from "expo";

import {
  ViroNode,
  ViroARPlane,
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
  state = {
    startDate: null,
    endDate: null,
    numberOfSteps: 0,
    distance: 0,
    floorsAscended: 0,
    floorsDescended: 0,
    currentPace: 0,
    currentCadence: 0,
  };

  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
    } else if (state == ViroConstants.TRACKING_NONE) {
    }
  }

  componentDidMount() {
    // const today = new Date();
    // today.setHours(0,0,0,0);
    //
    // Pedometer.startPedometerUpdatesFromDate(today.toTime(), (motionData) => {
    //   console.log("motionData: " + motionData);
    //   this.setState(motionData);
    // })
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
      <ViroAmbientLight color="#FFFFFF" intensity={400} />
        <ViroARPlane minHeight={.5} minWidth={.5} alignment={"Horizontal"}>
          <ViroBox position={[0, .25, 0]} scale={[.5, .5, .5]} />
        </ViroARPlane>
        {/* <Character name="jonathan" position={[0, 0, -3]} innerRef={(node) => { this.characterRef = node }}/> */}
      </ViroARScene>
    );
  }
}

module.exports = HelloWorldSceneAR;
