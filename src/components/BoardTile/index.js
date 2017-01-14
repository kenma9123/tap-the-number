/* @flow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { View, Text } from 'react-native-animatable'

import styles from './index.style'

type Props = {
  left: number,
  bottom: number,
  backgroundColor: string,
  text: string | number,
  style?: any
}

export default class BoardTile extends Component<void, Props, void> {
  render () {
    const { left, bottom, backgroundColor, text, style } = this.props
    const computedStyle = {
      left,
      bottom,
      backgroundColor
    }
    const textColor = getContrastYIQ(backgroundColor)
    return (
      <View style={[computedStyle, styles.containerDefault, style]}>
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </View>
    )
  }
}

const getContrastYIQ = (hc) => {
  const [r, g, b] = [1, 3, 5].map(p => parseInt(hc.substr(p, 2), 16))
  return ((r * 299) + (g * 587) + (b * 114)) / 1000 >= 128 ? 'black' : 'white'
}
