import React, {Component} from 'react'
import { TouchableOpacity } from 'react-native'
import data from '../services/trainlist1'

class Debug extends Component {
  static navigationOptions = {
    headerVisible: false,
    header: null
  }

  state = {
    items: {}
  }

  renderItem() {
    const date = Date.now()
    for (let i = 0; i < data.length; i++) { // начало цикла добавления элементов
      const time = date + (i * 24 * 60 * 60 * 1000)
      const strTime = new Date(time).toISOString().split('T')[0] // в строковую дату

      const {name, text} = data[i]
      this.state.items[strTime] = [{name, text}]
    }
    console.log(this.state)
  }

  render() {
    //const data = trainlist.json()
    return (
      <TouchableOpacity
        style={{margin: 100, height: 100, width: 100, backgroundColor: 'black'}}
        onPress={() => {
          //this.renderItem()
          this.props.navigation.navigate('Calendar')
        }}
      />
    )
  }
}

export default Debug
