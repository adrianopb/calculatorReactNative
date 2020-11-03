import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Button from './src/components/Button'

export default () => {
  return (
    <View style={styles.container}>
      <Button onClick={() => console.warn('a')} label='1'/>
      <Button onClick={() => console.warn('a')} label='2'/>
      <Button onClick={() => console.warn('a')} label='3'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  
})
