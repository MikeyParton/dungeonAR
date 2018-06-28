import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import { ViroARSceneNavigator } from 'react-viro';
const sharedProps = { apiKey:"DA5E409B-E75D-41EB-9957-FD372A8A6194" }
const InitialARScene = require('./js/HelloWorldSceneAR');

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      play : false,
      sharedProps : sharedProps,
    }

    this.renderMenu = this.renderMenu.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.play = this.play.bind(this);
  }

  render() {
    if (!this.state.play) return this.renderMenu()
    return this.renderScene();
  }

  renderMenu() {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >
          <Text style={localStyles.titleText}>
            Welcome to DungeonFlare 2049
            Are you ready ?
          </Text>
          <TouchableHighlight style={localStyles.buttons}
            onPress={this.play}
            underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>Play</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  play() {
    this.setState({ play: true })
  }

  renderScene() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene, passProps: { lol: this.state.lol, setLol: this.state.setLol }}} />
    );
  }
}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = ViroSample
