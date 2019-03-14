import React, { Component } from 'react'
import { connect } from 'react-redux'
import {AgendaScreen} from '../components'
import { getDay } from '../store/daylist/actions'
//import * as daysSelectors from '../store/daylist/reducer'

class Calendar extends Component {
  static navigationOptions = {
    headerVisible: false,
    header: null
  }

  render() {
    const {navigate, setParams} = this.props.navigation
    return (
      <AgendaScreen daylist={this.props.daylist} navigate={navigate} setParams={setParams} getDay={this.props.getDay} />
    )
  }
}
//daylist={this.props.daylist} navigate={navigate} setParams={setParams} getDay={this.props.getDay}
const mapStateToProps = state => {
  return {
    daylist: state.daylist
  }
}

const mapDispatchToProps = {
  getDay
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
