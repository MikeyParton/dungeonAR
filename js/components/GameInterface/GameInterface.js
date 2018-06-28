'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class GameInterface extends Component {
  constructor() {
    super()
    this.state = {
      points: 0
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    Alert.alert('What do you want?')
  }

  render() {
    return (
      <View style={localStyles.interface} >
      </View>
    );
  }
}


var localStyles = StyleSheet.create({
  interface :{
    flex : 1,
    backgroundColor:'#68a0cf',
    height: 80
  }
});

module.exports = GameInterface;
