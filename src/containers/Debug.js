import React, {Component} from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import data from '../services/trainlist1'
import { setTrain, getDate } from '../store/calendar/actions'

class Debug extends Component {
  static navigationOptions = {
    headerVisible: false,
    header: null
  }

  renderItem() {
    const items = {}
    const date = Date.now()
    for (let i = 0; i < data.length; i++) { // начало цикла добавления элементов
      const time = date + (i * 24 * 60 * 60 * 1000)
      const strTime = new Date(time).toISOString().split('T')[0] // в строковую дату

      const {name, text} = data[i]
      items[strTime] = [{name, text}]
    }
    return items
  }

  render() {
    return (
      <TouchableOpacity
        style={{margin: 100, height: 100, width: 100, backgroundColor: 'black'}}
        onPress={() => {
          this.props.setTrain()
          console.log(this.props)
          //this.props.navigation.navigate('Calendar')
        }}
      />
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state
  }
}

const mapDispatchToProps = {
  setTrain
}

export default connect(mapStateToProps, mapDispatchToProps)(Debug)
