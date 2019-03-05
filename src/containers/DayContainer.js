import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Day} from '../components'

class DayContainer extends Component {
  static navigationOptions = {
    headerVisible: false,
    header: null
  }

  componentDidMount() {
    this.props.navigation.setParams({ otherParam: this.props.daylist.num + 1 })
  }

  render() {
    return (
      <Day daylist={this.props.daylist} navigation={this.props.navigation} />
    )
  }
}

function mapStateToProps(state) {
  return {
    daylist: state.daylist
  }
}

export default connect(mapStateToProps)(DayContainer)
