import { StyleSheet, StatusBar } from 'react-native';
import { Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <StatusBar /> */}
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F6FF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
