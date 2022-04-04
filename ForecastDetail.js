//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import FutureForecast from './FutureForecast'

// create a component
const WeatherItem = ({title, value, unit}) => {
  return (
    <View style={styles.othercontainer}>
      <Text style={styles.textcolor}>{title}</Text>
      <Text style={styles.textcolor}>{value}{unit}</Text>
    </View>
  )
}
const ForecastDetail = (props) => {
  return (
  <View style={styles.container}>
    <View style={{flexDirection: 'row'}}>
      <View style={styles.box}>
        <Image source={require('./src/assets/icon/visibility.png')} style={styles.image}/>
        <WeatherItem title="Visibility" value={props.visible/1000} unit="km"/>
      </View>
      <View style={styles.box}>
        <Image source={require('./src/assets/icon/wind.png')} style={styles.image}/>
        <WeatherItem title="  Wind  " value={props.windspd} unit="m/s"/>
      </View>
      <View style={styles.box}>
        <Image source={require('./src/assets/icon/humidity.png')} style={styles.image}/>
        <WeatherItem title="Humidity" value={props.humidt} unit="%"/>
      </View>
      <View style={styles.box}>
        <Image source={require('./src/assets/icon/barometer.png')} style={styles.image}/>
        <WeatherItem title="Pressure" value={props.pressr} unit="mb"/>
      </View>
    </View>
    {/* <View>
      <FutureForecast/>
    </View> */}
  </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'space-between',
    marginTop: 25,
    backgroundColor: '#18181bcc',
  },
  othercontainer: {
    alignItems: 'center',
    padding: 25,
  },
  textcolor: {
    color: 'white',
  },
  image: {
    alignSelf: 'center',
    marginTop: 25,
  },
});

//make this component available to the app
export default ForecastDetail;
