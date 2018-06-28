import { Alert } from 'react-native'

const characters = {
  astroman: {
    model: require('./astroman/astroman.obj'),
    material: require('./astroman/astroman.mtl'),
    offset: [0, -5, 0],
    rotationOffset: [270, 0, 0],
    initialScale: [.05, .05, .05]
  },
  mike: {
    model: require('./mike/mike.obj'),
    material: require('./mike/mike.mtl')
  },
  jonathan: {
    model: require('./jonathan/jonathan.obj'),
    material: require('./jonathan/jonathan.mtl'),
    offset: [0, -10, 0],
    rotationOffset: [270, 0, 0],
    initialScale: [.1, .1, .1],
    onClick: function() {
      Alert.alert("Parlez vous Francais?")
    }
  },
  coin: {
    model: require('./coin/coin.obj'),
    material: require('./coin/coin.mtl'),
    initialScale: [.05, .05, .05],
    animation: {
      name:'rotateCoin',
      run: true,
      loop: true
    }
  }
};

export default characters
