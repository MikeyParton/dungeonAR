import React from 'react'
import { Alert } from 'react-native'

const { Provider: BaseProvider, Consumer } = React.createContext({
  coinsCount: 0,
  addCoin: () => {}
})

class Provider extends React.Component {
  addCoin = () => {
    const { coinsCount } = this.state
    this.setState({ coinsCount: coinsCount + 1 })
  }

  state = {
    coinsCount: 0,
    addCoin: () => Alert.alert("lol")
  }

  render() {
    return (
      <BaseProvider value={this.state}>
        {this.props.children}
      </BaseProvider>
    )
  }
}

export {
  Provider,
  Consumer
}
