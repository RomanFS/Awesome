import React, { Component } from 'react'
import { ImageBackground, View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'
import { w, h, bgColor, white, blueText } from '../../constants'

export default class Day extends Component {
  componentDidMount() {
    console.log(this.props.daylist.trainlist[this.props.daylist.num].src)
  }

  getImage(name) {
    switch (name) {
    case 'body': return require('../../Images/b.jpg')
    case 'legs': return require('../../Images/bg.jpg')
    default: return ('require(../../bg.jpg')
    }
  }

  render() {
    const { bgImg, btnText, firstScreen, container, dash, button, h1, h2, h3b, elements } = styles
    const { description, title, subTitle, type } = this.props.daylist.trainlist[this.props.daylist.num]

    return (
      <ScrollView style={container}>
        <ImageBackground source={this.getImage(type)} style={bgImg}>
          <View style={firstScreen}>
            <Text title='day_num' style={h1}>{title}{'\n'}{subTitle}</Text>
            <TouchableHighlight title='СТАРТ' style={button}>
              <View>
                <Text style={btnText}>СТАРТ</Text>
              </View>
            </TouchableHighlight>
            <Text title='scroll' style={[dash, {flex: 1}]}>>></Text>
          </View>
        </ImageBackground>
        <View>
          { description.map(subItem => (
            <TouchableHighlight key={subItem.id} style={elements} >
              <View>
                <Text style={h2}>{subItem.title}</Text>
                <Text style={h3b}>{subItem.subTitle} {subItem.time !== 0 ? (subItem.time, ' минут') : ''}</Text>
                <Text>▼</Text>
              </View>
            </TouchableHighlight>
          ))
          }
        </View>
        <View>
          <Text title='statistic'>Ты Рома</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor
  },
  bgImg: {
    width: w,
    height: h,
    padding: 10
  },
  h1: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 15,
    color: white,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '900'
  },
  h2: {
    color: white,
    fontSize: 18
  },
  h3b: {
    color: blueText
  },
  dash: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 15,
    color: white,
    fontSize: 24,
    fontWeight: '900',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    transform: [{ rotate: '90deg'}]
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: blueText,
    borderRadius: 100,
    /*borderWidth: 3,
    borderColor: blueText,*/
    width: 125,
    height: 125
  },
  btnText: {
    color: white,
    fontSize: 18,
    fontWeight: '900'
  },
  elements: {
    marginVertical: 3,
    borderBottomWidth: 1,
    borderColor: '#fff'
  },
  firstScreen: {
    justifyContent: 'space-between',
    display: 'flex',
    height: h,
    paddingBottom: 150
  }
})

export {Day}
