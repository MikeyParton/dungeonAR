import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
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
  state = {
    play: false,
    sharedProps: sharedProps,
    coins: 0,
    hearts: 5
  }

  play = () => {
    this.setState({ play: true })
  }

  playAgain = () => {
    this.setState({ play: true, hearts: 5, coins: 0 })
  }

  winCoin = () => {
    let { coins } = this.state
    coins++
    this.setState({ coins })
  }

  loseCoin = () => {
    let { coins } = this.state
    coins--
    this.setState({ coins })
  }

  winHeart = () => {
    let { hearts } = this.state
    if(hearts <= 15) {
      hearts++
    }
    this.setState({ hearts })
  }

  loseHeart = () => {
    let { hearts } = this.state
    if(hearts >= 0) {
      hearts--
    }
    this.setState({ hearts })
  }

  render() {
    if (!this.state.play) return this.renderMenu()
    if (this.state.hearts === 0) return this.renderGameOver()
    return this.renderScene();
  }

  renderMenu = () => {
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

  renderGameOver = () => {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >
          <Image
            style={{marginBottom: 10}}
            source={require('./js/components/GameInterface/gameOver1.png')}
          />
          <TouchableHighlight style={localStyles.buttons}
            onPress={this.playAgain}
            underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>Play Again?</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  renderScene = () => {
    let hearts = [];
      for(var i=0; i<this.state.hearts; i++){
          hearts.push(
              (<View key={i}>
                <Image
                  style={{width: 16, height: 16 }}
                  source={require('./js/components/GameInterface/heart.png')}
                />
              </View>)
          );
      }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: "black", alignItems: 'center', height:80, padding: 10 }}>
          <Image
            style={{width: "30%", height: "30%", marginBottom: 10}}
            source={require('./js/components/GameInterface/stats1.png')}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
            {hearts}
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              style={{width: 16, height: 16}}
              source={require('./js/components/GameInterface/Gold-Coin.png')}
            />
            <Text style={{ fontSize: 14, color: "yellow", marginLeft:10 }}>{this.state.coins}</Text>
          </View>
        </View>
          <ViroARSceneNavigator {...this.state.sharedProps}
            initialScene={{
              scene: InitialARScene,
              passProps: {
                coins: this.state.coins,
                winCoin: this.winCoin,
                loseCoin: this.loseCoin,
                winHeart: this.winHeart,
                loseHeart: this.loseHeart
              }
            }}
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
