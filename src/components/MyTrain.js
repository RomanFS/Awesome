import React from 'react'
import { TouchableHighlight, Image, View, Text, StyleSheet, ScrollView } from 'react-native'
import { w } from '../../constants'

const MyTrain = () => {
  const { imageText, h2, subBlue, sub, image } = styles
  return (
    <View style={{}}>
      <Text style={sub}>Мои программы тренировок,
        <Text style={subBlue}> см. все ▼</Text>
      </Text>
      <ScrollView horizontal style={{}}>
        <View style={{paddingLeft: w / 4}} />
        <TouchableHighlight style={{paddingRight: 25}}>
          <View>
            <Image
              style={image}
              source={require('../../Images/a.jpg')}
            />
            <View style={imageText}>
              <Text style={h2}>Сушка</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={{paddingRight: 25}}>
          <View>
            <Image
              style={image}
              source={require('../../Images/b.jpg')}
            />
            <View style={imageText}>
              <Text style={h2}>Масса</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={{paddingRight: 25}}>
          <View>
            <Image
              style={image}
              source={require('../../Images/a.jpg')}
            />
            <View style={imageText}>
              <Text style={h2}>Без напряга</Text>
            </View>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: w / 2.2,
    height: w / 1.7,
    marginVertical: 15
  },
  sub: {
    marginTop: 15,
    color: '#fff'
  },
  subBlue: {
    color: '#2c7bca'
  },
  h2: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff'
  },
  imageText: {
    position: 'absolute',
    top: 0,
    left: 15,
    right: 0,
    bottom: 25,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  }
})

export {MyTrain}
