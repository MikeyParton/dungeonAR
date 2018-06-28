export const SAY = 'SAY'
export const WIN_MORALE = 'WIN_MORALE'
export const LOSE_MORALE = 'LOSE_MORALE'
export const WIN_COIN = 'WIN_COIN'
export const LOSE_COIN = 'LOSE_COIN'

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
    material: require('./mike/mike.mtl'),
    offset: [0, -10, 0],
    rotationOffset: [270, 0, 0],
    initialScale: [.1, .1, .1],
    clickActions: [
      {
        type: SAY,
        text: "Mike says: 'I go hard in the paint'",
        options: [
          {
            type: LOSE_MORALE,
            text: "Get back to your desk!",
            response: "Mike returns to his desk crying: You're not my real dad!"
          },
          {
            type: WIN_MORALE,
            text: "Wait a sec, I'm Mike",
            response: "Mike says: Well this is awkward ..."
          },
          {
            type: LOSE_MORALE,
            text: "What do you even do here?",
            response: "I do .... lots of ... things"
          }
        ]
      },
      {
        type: SAY,
        text: "Mike says: 'I can go really fast on my skateboard'",
        options: [
          {
            type: WIN_MORALE,
            text: "We're all proud of you son",
            response: "Thanks dad!"
          },
          {
            type: LOSE_MORALE,
            text: "What are you, like 12?",
            response: "A single tear rolls down Mike's cheek"
          },
        ]
      }
    ]
  },
  jonathan: {
    model: require('./jonathan/jonathan.obj'),
    material: require('./jonathan/jonathan.mtl'),
    offset: [0, -10, 0],
    rotationOffset: [270, 0, 0],
    initialScale: [.1, .1, .1],
    clickActions: [
      {
        type: SAY,
        text: 'Jonathan says: Parlez vous Francais?',
        options: [
          {
            type: WIN_MORALE,
            text: "“Où sont les toilettes?",
            response: "Jonathan laughs"
          },
          {
            type: LOSE_COIN,
            text: "Nah mate, I don't speak Italian",
            response: "Jonathan takes your money for being so dumb"
          },
        ]
      },
      {
        type: SAY,
        text: 'Jonathan offers you a tim tam',
        options: [
          {
            type: WIN_MORALE,
            text: "Ooh Thanks!",
            response: "That was delicious"
          },
          {
            type: LOSE_MORALE,
            text: "Sorry I'm actually cutting atm",
            response: "You break Jonathan's generosity and he never offers anyone anything for the rest of his life"
          },
        ]
      }
    ]
  },
  coin: {
    model: require('./coin/coin.obj'),
    material: require('./coin/coin.mtl'),
    initialScale: [.05, .05, .05],
    animation: {
      name:'rotateCoin',
      run: true,
      loop: true
    },
    clickActions: [
      { type: WIN_COIN }
    ]
  }
};

export default characters
