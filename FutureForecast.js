//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment-timezone'

// create a component
const FutureForecast = ({weatherData}) => {
  return (
    <View style={{flexDirection: 'row', backgroundColor: '#18181bcc'}}>
      {
        weatherData && weatherData.length > 0 ?
        weatherData.map((weatherData, idx) => (
          idx !== 0 &&  <FutureForecastItem forecastItem={weatherData}/>
        ))
        : 
        <View/>
      }

    </View>
  )
}

const FutureForecastItem = ({forecastItem}) => {
  const img={uri: 'http://openweathermap.org/img/wn/'+ forecastItem.weather[0].icon +'@2x.png'}
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>{moment(forecastItem.dt * 1000).format('ddd')}</Text>
      <Image source={img} style={styles.image}/>
      <Text style={styles.textstyle}>{forecastItem.temp.max}&#176;C</Text>
      <Text style={styles.weatherDescStyle}>{forecastItem.weather[0].description}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000033',
    borderRadius: 3,
    borderColor: 'white',
    borderWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  textstyle: {
    color: 'white',
    fontSize: 12
  },
  weatherDescStyle: {
    color: 'white',
    fontSize: 8,
  }
});

//make this component available to the app
export default FutureForecast;
