import React from 'react'
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        textAlign: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: '#888',
        backgroundColor: '#f0f0f0',
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
    }
}) 

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableHighlight>
    )
}