import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Agenda} from 'react-native-calendars'
import {h} from '../../constants'
import {сurrentDate} from '../../functions'

export default class AgendaScreen extends Component {
  static navigationOptions = {
    headerVisible: false,
    header: null
  }

  constructor(props) {
    super(props)

    this.loadItems = this.loadItems.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.renderEmptyDate = this.renderEmptyDate.bind(this)
    this.rowHasChanged = this.rowHasChanged.bind(this)

    this.state = {
      items: {
        '2019-03-13': [{text: 'item 1 - any js object', name: 'День 1', id: 0}],
        '2019-03-23': [{text: 'item 2 - any js object', name: 'День 2', id: 1}],
        '2019-03-24': [],
        '2019-03-25': [{text: 'item 3 - any js object'}, {text: 'any js object'}]}
    }
  }

  loadItems(day) {
    this.setState({
      items: {
        ...this.state.items,
        [day.dateString]: [{
          text: 'item 1 - any js object',
          name: 'День 1'
        }]
      }
    })
    setTimeout(() => { // ВСЕ: проверяет есть ли элемент, в случае "неудачи" создает новый и записывает его в стейт
      for (let i = -5; i < 5; i++) { // начало цикла добавления элементов
        const time = day.timestamp + (i * 24 * 60 * 60 * 1000) // преобразование каждого элемента
        const strTime = this.timeToString(time) // в строковую дату
        if (!this.state.items[strTime]) { // присутствует ли элемент в items? если нет, то...
          this.state.items[strTime] = [] // создание массива (с ключем элемента)
          const numItems = 1 // количество дочерних элементов
          for (let j = 0; j < numItems; j++) { // заполнение элемента...
            this.state.items[strTime].push({
              name: 'Отдых',
              height: h / 8
            })
          }
        }
      }
    }, 10) // задержка прогрузки
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name
  }

  timeToString(time) {
    const date = new Date(time)
    return date.toISOString().split('T')[0]
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    )
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, {height: item.height}]}
        onPress={() => {
          if (item.id !== undefined) {
            this.props.getDay(item.id)
            this.props.navigate('DayContainer')
          }
        }}
      >
        <View>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Agenda
        current={'2019-03-08'}
        minDate={'2019-03-05'}
        onDayPress={(day) => { console.log('day pressed') }}
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        //selected={'2019-05-16'}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        markedDates={{
          '2019-05-16': {selected: true, marked: true},
          '2019-05-17': {marked: true},
          '2019-05-18': {disabled: true}
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
})

export {AgendaScreen}
