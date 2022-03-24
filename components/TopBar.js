import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./sopactLogo.png')} style={{ width: 50, height: 60 }} />

        <Text style={{color: "blue", fontWeight: "bold"}}>Sopact                                                                </Text>
        <Image source={require('./hamburger.png')} style={{ width: 28, height: 35 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 45,
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },

});

export default TopBar;