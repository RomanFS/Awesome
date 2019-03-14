import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'

const HomeBut = ({data, navigate}) => {
  const {active, deActive, container, h2, h3, dash, viewtext, content} = styles
  const {nav, title, description, act} = data

  return (
    <TouchableHighlight style={[container, act ? active : deActive]} onPress={() => (nav ? navigate('Calendar') : navigate('Chart'))}>
      <View style={content}>
        <View style={viewtext}>
          <Text style={h2}>{title}</Text>
          <Text style={[h3, description === null ? {display: 'none'} : '']}>{description}</Text>
        </View>
        <Text style={[dash, act ? '' : {color: '#2c7bca'}]}>==</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
    borderRadius: 15,
    padding: 15
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewtext: {
    flex: 6
  },
  active: {
    backgroundColor: '#2c7bca'
  },
  deActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  h2: {
    width: '85%',
    fontSize: 18,
    color: '#fff'
    //fontWeight: '600'
  },
  h3: {
    fontSize: 16,
    color: '#fff'
  },
  dash: {
    letterSpacing: -6,
    flex: 1,
    fontSize: 24,
    color: '#fff'
  }
})

export {HomeBut}
