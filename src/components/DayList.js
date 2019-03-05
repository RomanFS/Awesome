import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native'
import { bgColor } from '../../constants'

export default class DayList extends Component {
  render() {
    const { h1, header, maincontainer, h3b } = styles
    const { navigate } = this.props
    const { trainlist } = this.props.daylist
    return (
      <ScrollView style={maincontainer}>
        { trainlist.map(item => (
          <TouchableHighlight
            key={item.id} style={header}
            onPress={() => {
              navigate('DayContainer')
              this.props.getDay(item.id)
            }}
          >
            <View>
              <Text style={h1}>{item.title}</Text>
              <Text style={h3b}>{item.subTitle}</Text>
            </View>
          </TouchableHighlight>
        ))
        }
      </ScrollView>
    )
  }
}

/*{ trainlist.map(item => (
  <TouchableHighlight
    key={item.title} style={header}
    onPress={() => {
      navigate('DayContainer')
      console.log(this.props)
    }}
  >
    <View>
      <Text style={h1}>{item.title}</Text>
      <Text style={h3b}>{item.subTitle}</Text>
    </View>
  </TouchableHighlight>
))
}*/

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: bgColor
  },
  container: {
    padding: 10,
    marginVertical: 3, // display: 'flex', => dash.top = height/2
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1
  },
  h2: {
    fontSize: 18,
    color: '#fff'
  },
  h3b: {
    color: '#2c7bca'
  },
  dash: {
    position: 'absolute',
    right: 20,
    top: '10%',
    fontSize: 14,
    color: '#2c7bca',
    fontWeight: '900'
  },
  header: {
    padding: 15
  },
  h1: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '900'
  }
})
