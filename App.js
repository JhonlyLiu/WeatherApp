import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground,
} from 'react-native';
import GetLocation from 'react-native-get-location';
import CityLocation from './CityLocation'
import ForecastPart from './ForecastPart'
import ForecastDetail from './ForecastDetail'
import FutureForecast from './FutureForecast'
import { logIfNoNativeHook } from 'react-native/Libraries/Utilities/RCTLog';
// import axios from 'axios';


const App = () => {
  const [data, setData] = useState({})

  const [state, setState] = useState({
    location: null,
    loading: false,
  })

  const _requestLocation = (teste = '') => {
    setState({ loading: true, location: null });

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(location => {
        setState({
          location,
          loading: false,
        });
      })
      .catch(ex => {
        const { code, message } = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
        setState({
          location: null,
          loading: false,
        });
      });
  };

  // const getAPI = () => {
  //   if (location != null) {
  //     const lat = JSON.stringify(location.latitude)
  //     const lon = JSON.stringify(location.longitude)
  //     axios.get('https://api.openweathermap.org/data/2.5/weather', {
  //       params: {
  //         lat: lat,
  //         lon: lon,
  //         appid: '35b6c8522103375c5102fa4511819391',
  //       }
  //     })
  //       .then(function (response) {
  //         // console.log(response);
  //         // setData(response)
          
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //     console.log(location.latitude)
  //     console.log(location.longitude)
  //   }
  // }

  const getAPI = () => {
    if (location != null) {
      const lat = JSON.stringify(location.latitude)
      const lon = JSON.stringify(location.longitude)
      
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=35b6c8522103375c5102fa4511819391`).then(res => res.json()).then(data => {
        // console.log(data)
        // setData(data)
      })
    }
  }

  const { location, loading } = state;

  useEffect(() => {
    _requestLocation()

  }, [])

  if (location != null && loading != true) {
    getAPI();
  }

//  console.log(location)
  return (
    <View style={styles.container}>
      {
        location != null && data != null ?
        <ImageBackground source={require('./src/assets/image/Background4.jpg')} style={styles.image}>
          <CityLocation city={data.timezone} latitude={data.lat} longitude={data.lon} />
          <ForecastPart iconWeather={data.current.weather[0].icon} currentTemp={data.current.temp} weatherDesc={data.current.weather[0].description}/>
          <ForecastDetail visible={data.current.visibility} humidt={data.current.humidity} pressr={data.current.pressure} windspd={data.current.wind_speed}/>
          <FutureForecast weatherData={data.daily}/>
        </ImageBackground>:
          null
      }
    </View>
  );


}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})