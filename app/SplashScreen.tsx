import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
    const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
        router.navigate("/(tabs)");; // Replace 'Home' with your main screen route name
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Logo.png")}  /> 
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0079C1', // Adjust the background color as needed
  },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;