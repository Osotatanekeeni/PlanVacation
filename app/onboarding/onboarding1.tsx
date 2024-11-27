import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Onboarding1 = () => {
  return (
    <View style={styles.container}>
      <Text>Onboarding1</Text>
    </View>
  )
}

export default Onboarding1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})