import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import {LocaleConfig} from 'react-native-calendars'
import rootReducers from './src/store/reducers'

import Home from './src/containers/Home'
import Days from './src/containers/DayListContainer'
import DayContainer from './src/containers/DayContainer'
import Calendar from './src/containers/Calendar'
import Debug from './src/containers/Debug'
import {Chart} from './src/components'

LocaleConfig.locales.ru = {
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthNamesShort: ['Янв.', 'Февр.', 'Мар.', 'Апр.', 'Май', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.'],
  dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  dayNamesShort: ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.']
}
LocaleConfig.defaultLocale = 'ru'

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
    Debug,
    Days,
    Home,
    Chart,
    Calendar,
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
