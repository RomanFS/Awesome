import Svg, {
  Circle,
  G,
  Text,
  Rect,
  Use,
  Defs
} from 'react-native-svg'

import React from 'react'
import { View, StyleSheet} from 'react-native'

export default class Chart extends React.Component {
  state = {
    h: 80
  }

  componentDidMount() {
  }

  render() {
    const h = this.state.h * 2
    const w = 40
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' }
        ]}
      >
        <Svg height="70%" width="90%" viewBox="0 0 400 400">
          <Defs>
            <G id="elem">
              <Circle
                cx={(w / 2)}
                cy={h}
                r={w / 2}
                fill="blue"
              />
              <Circle
                cx={(w / 2)}
                cy="0"
                r={w / 2}
                fill="blue"
              />
              <Rect
                x="0"
                y="0"
                width={w}
                height={h}
                fill="blue"
              />
              <Text
                textAnchor="middle"
                fill="white"
                fontSize="20"
                x={w / 2}
                y={h / 2}
              >{this.state.h}</Text>
            </G>
          </Defs>
          <Use href="#elem" x="0" y="0" />
          <Use href="#elem" x="100" y="0" />
          <Use href="#elem" x="200" y="0" />
          {/*<Defs>
            <G id="shape">
              <G>
                <Circle cx="50" cy="50" r="50" />
                <Rect x="50" y="50" width="50" height="50" />
                <Circle cx="50" cy="50" r="5" fill="blue" />
              </G>
            </G>
          </Defs>
          <Use href="#shape" x="20" y="0" />
          <Use href="#shape" x="170"y="0" />*/}
        </Svg>
      </View>
    )
  }
}

export {Chart}
