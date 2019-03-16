import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayList from '../components/DayList'
import { getDay } from '../store/daylist/actions'
//import * as daysSelectors from '../store/daylist/reducer'

class Days extends Component {
  static navigationOptions = {
    headerVisible: false,
    header: null
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const {navigate, setParams} = this.props.navigation
    return (
      <DayList daylist={this.props.daylist} navigate={navigate} setParams={setParams} getDay={this.props.getDay} />
    )
  }
}

const mapStateToProps = state => {
  return {
    daylist: state.daylist
  }
}

const mapDispatchToProps = {
  getDay
}

export default connect(mapStateToProps, mapDispatchToProps)(Days)
