import React, {Component} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import { connect } from 'react-redux'
import {HomeBut, MyTrain, User} from '../components'
import homeData from '../services/homeData'
import { bgColor } from '../../constants'

export default class Home extends Component {
  static navigationOptions = {
    headerVisible: false,
    header: null
  }

  state = {
    data: []
  }

  componentDidMount() {
    this.setState({data: homeData})
    /*const date = new Date().getDate()
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    console.log(`${date}.${month}.${year}`)*/
  }

  render() {
    const {navigate} = this.props.navigation
    const {data} = this.state
    return (
      <ScrollView style={styles.container}>
        <User />
        <MyTrain />
        <View style={{marginBottom: 20}}>
          { data.map(item => (
            <HomeBut key={item.id} data={item} navigate={navigate} />
          ))
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: bgColor
  },
  defaultLarge: {
    flex: 4
  },
  default: {
    justifyContent: 'center',
    flex: 1
  }
})
