//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CityLocation = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.cityname}>{props.city}</Text>
      </View>
      <View>
        <Text style={styles.latitudelongitude}>{props.latitude}N  {props.longitude}E</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  cityname: {
    fontSize: 45,
    color: 'white',
    fontWeight: '300',
    paddingTop: 30,
  },
  latitudelongitude: {
    fontSize: 15,
    color: 'white',
  }
});

//make this component available to the app
export default CityLocation;
