import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SimpleButton from './src/components/SimpleButton'

export default () => {
  return (
    <View style={styles.container}>
      <SimpleButton onClick={() => console.warn('a')} label='1'/>
      <SimpleButton onClick={() => console.warn('a')} label='2'/>
      <SimpleButton onClick={() => console.warn('a')} label='3'/>
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
