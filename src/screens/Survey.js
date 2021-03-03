import React, { useState } from 'react';
import { Animated, ImageBackground, View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Button from 'react-native-button';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/HelperFunctions'
import CardView from 'react-native-cardview'
import CheckBox from 'react-native-check-box'
import bg from '../Assets/background.gif'
function Surveyscreen({ navigation }) {


  const Symptoms = require('../Assets/symptoms.json')
  const [isChecked, setIsChecked] = useState(false)
  const [symptoms, setSymptoms] = useState([])
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [isDisabled,setIsDisabled] = useState(false)

  const onChecked = (id) => {
    const data = Symptoms
    const index = data.findIndex(x => x.id === id)
    data[index].checked = !data[index].checked
    console.log(data[index].checked)
    setSymptoms([...data])

  }
  const handlePress = () => {
    var sym = symptoms.map((t) => t.key)
    var checks = symptoms.map((t) => t.checked)
    let items = []
    for (let index = 0; index < checks.length; index++) {
      if (checks[index] === true) {
        items.push(sym[index])
      }
    }
    alert(items)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={bg} style={styles.image}>
        <CardView cardElevation={10}
          cornerRadius={8} style={styles.card}>
          <Text style={styles.headerText}> How Are Your Symptoms Today </Text>
          <ScrollView>
            <View style={styles.survey}>
              {Symptoms.map((item, key) => (
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} key={key} onPress={() => onChecked(item.id)}>
                  <CheckBox style={{ flex: 1, padding: 18 }}
                    onClick={() => onChecked(item.id)}
                    isChecked={item.checked}
                    rightText={item.key}></CheckBox>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </CardView>
        <Button
          style={{ fontSize: 18, fontWeight: 'bold' ,color: 'white' }}
          styleDisabled={{ color: 'white' }}
          disabled={isDisabled}
          containerStyle={{ marginBottom: SCREEN_HEIGHT * 0.01, marginLeft: SCREEN_WIDTH * 0.25 ,width: 200, padding: 8, height: 45, overflow: 'hidden', borderRadius: 10, backgroundColor: '#21C885' }}
          disabledContainerStyle={{ backgroundColor: 'lightgreen' }}
          onPress={() => handlePress()}
        >
          Check Symptoms
      </Button>
      </ImageBackground>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 45,
    fontFamily: "Oswald-Bold"
  },
  image: {
    flex: 1,
    resizeMode: "repeat",
    justifyContent: "center"
  },
  card: {
    height: SCREEN_HEIGHT * 0.72,
    width: SCREEN_WIDTH * 0.85,
    marginBottom: SCREEN_HEIGHT * 0.04,
    marginLeft: SCREEN_WIDTH * 0.075
  },
  survey: {
    marginTop: 25
  },
  checkBox: {
    flex: 1,
    padding: 10,
    marginLeft: 25,
    marginTop: 18
  }
})


export default Surveyscreen;