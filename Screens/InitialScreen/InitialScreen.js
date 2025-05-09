import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { WelcomeImg } from '../../theme/Images'
import { styles } from './Style/InitialScreenStyle'

export default function InitialScreen({navigation}) {
  const gotToLogin = () => {
    navigation.navigate("Login")
  } 
  return (
    <>
    <StatusBar backgroundColor="#536dfe"/>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
            <View>
              <Image source={WelcomeImg}  style={styles.img} />
            <View>
                <Text style={styles.text}>A Task Management App You Can Trust !</Text>
                <Text style={styles.textSub}>A vibrant workspace for a community of over 20 million influencers across the globe.</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={gotToLogin}>
              <Text style={styles.btnText}>Explore More</Text>
            </TouchableOpacity>
        </View>
    </View>
    </>
  )
}