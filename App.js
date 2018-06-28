import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Image,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';
import { Provider, Consumer } from './context'

import { ViroARSceneNavigator } from 'react-viro';
const sharedProps = { apiKey:"DA5E409B-E75D-41EB-9957-FD372A8A6194" }
const InitialARScene = require('./js/HelloWorldSceneAR');

export default class ViroSample extends Component {
  constructor() {
    super();
    this.renderMenu = this.renderMenu.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.play = this.play.bind(this);
    this.addCoinPoints = this.addCoinPoints.bind(this);

    this.state = {
      play : false,
      sharedProps : sharedProps,
      coinPoints: 1,
      coin: false,
      onCoinClick: this.addCoinPoints
    }
  }

  render() {
    if (!this.state.play) return this.renderMenu()
    return this.renderScene();
  }

  renderMenu() {
    return (
      <Provider>
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
      </Provider>
    );
  }

  play() {
    this.setState({ play: true })
  }

  addCoinPoints() {
    let coinPoints = this.state.coinPoints;
    coinPoints++
    this.setState({ coinPoints: coinPoints, coin: true })
  }

  renderScene() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: "black", alignItems: 'center', height:80, padding: 10 }}>
          <Text style={{ fontSize: 12, color: "white" }}>Stats:</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              style={{width: 16, height: 16 }}
              source={require('./js/components/GameInterface/heart.png')}
            />
            <View style={{ backgroundColor: "red", height:10, width:'50%', marginLeft:10, margin:2, borderWidth:1, borderColor:'white' }} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              style={{width: 16, height: 16}}
              source={require('./js/components/GameInterface/Gold-Coin.png')}
            />
            <Text style={{ fontSize: 12, color: "yellow", marginLeft:10 }}>{this.state.coinPoints}</Text>
          </View>
        </View>
          <ViroARSceneNavigator {...this.state.sharedProps}
            initialScene={{scene: InitialARScene, passProps: {coin: this.state.coin, onCoinClick: this.state.onCoinClick}}}
          />
      </View>
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
