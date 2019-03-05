import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import rootReducers from './src/store/reducers'

import Home from './src/containers/Home'
import Days from './src/containers/DayListContainer'
import DayContainer from './src/containers/DayContainer'

const store = createStore(rootReducers)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const AppStackNavigator = createStackNavigator(
  {
    Home,
    Days,
    DayContainer
  },
  {
    navigationOptions: {
      headerVisible: false,
      header: null
    }
  }
)

const AppContainer = createAppContainer(AppStackNavigator)
