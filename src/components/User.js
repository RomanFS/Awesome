import React, {Component} from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'
import {h, w} from '../../constants'

const userdate = {
  name: 'Святослав',
  seName: 'Чаплин',
  email: 'Svyat@awesome.com',
  adress: 'Днепр, Украина',
  status: 'Pro',
  photo: 'https://instagram.fdnk2-1.fna.fbcdn.net/vp/4593c8e83db71a8aca9920c0a79e8b46/5CE744C5/t51.2885-19/s320x320/21690762_471601809868972_5445432732148563968_n.jpg?_nc_ht=instagram.fdnk2-1.fna.fbcdn.net'
}

class User extends Component {
  render() {
    const {name, seName, email, adress, status, photo} = userdate
    const {container, h1, h3, h3b, image} = styles
    return (
      <View style={container}>
        <Image source={{uri: photo}} style={image} />
        <View>
          <Text style={h1}>{name}</Text>
          <Text style={h3}>{seName},
            <Text style={h3b}> {adress}</Text>
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  image: {
    borderColor: '#2c7bca',
    borderWidth: 2,
    borderRadius: h / 16,
    width: w / 7.2,
    height: w / 7.2,
    marginRight: 15
  },
  h1: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '900'
  },
  h3: {
    color: '#fff'
  },
  h3b: {
    color: '#2c7bca'
  }
})

export {User}
