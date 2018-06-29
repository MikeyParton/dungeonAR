export const SAY = 'SAY'
export const WIN_MORALE = 'WIN_MORALE'
export const LOSE_MORALE = 'LOSE_MORALE'
export const WIN_COIN = 'WIN_COIN'
export const LOSE_COIN = 'LOSE_COIN'

const characters = {
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
            response: "Mike says: I do .... lots of ... things"
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
  jae: {
    model: require('./jae/jae.obj'),
    material: require('./jae/jae.mtl'),
    offset: [0, -10, 0],
    rotationOffset: [270, 0, 0],
    initialScale: [.1, .1, .1],
    clickActions: [
      {
        type: SAY,
        text: "Jae says: I like unicorns",
        options: [
          {
            type: WIN_MORALE,
            text: "Unicorns are cool",
            response: "Jae says: I know right!"
          },
          {
            type: LOSE_MORALE,
            text: "Unicorns are dumb",
            response: "Jae says: You're dumb!"
          },
        ]
      }
    ]
  },
  pat: {
    model: require('./pat/pat.obj'),
    material: require('./pat/pat.mtl'),
    offset: [0, -10, 0],
    rotationOffset: [270, 0, 0],
    initialScale: [.1, .1, .1],
    clickActions: [
      {
        type: SAY,
        text: "Pat says: Have you seen my new Nikes ",
        options: [
          {
            type: WIN_MORALE,
            text: "Yeah, they're fresh to death",
            response: "Pat says: Thanks!"
          },
          {
            type: LOSE_MORALE,
            text: "Aren't you Steve Jobs",
            response: "Pat says: Shutup, I don't look anything like him"
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
  },
  unicorn: {
    model: require('./unicorn/model-triangulated.obj'),
    material: require('./unicorn/materials.mtl'),
    initialScale: [4, 4, 4],
    offset: [0, -2, 0],
    clickActions: [
      {
        type: SAY,
        text: "Unicorn says: What did the Unicorn tell the carrot?",
        options: [
          {
            type: WIN_MORALE,
            text: "I like this joke",
            response: "U-No-Corn!"
          },
          {
            type: LOSE_MORALE,
            text: "No thanks..",
            response: "U-No-Corn!"
          },
        ]
      }
    ]
  },
  poop: {
    model: require('./poop/model-triangulated.obj'),
    material: require('./poop/materials.mtl'),
    initialScale: [2, 2, 2],
    offset: [0, -2, 0],
    clickActions: [
      {
        type: SAY,
        text: "What happens when you eat too much pizza?",
        options: [
          {
            type: WIN_MORALE,
            text: "?!@@$SFAS",
            response: "Poopy Time 💩"
          },
          {
            type: LOSE_MORALE,
            text: "Nothing",
            response: "💩💩💩"
          },
        ]
      }
    ]
  }
};

export default characters
