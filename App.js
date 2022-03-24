import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, StatusBar, Image  } from 'react-native';
import SafeViewAndroid from "./components/SafeViewAndroid";
import TopBar from './components/TopBar';
import DonationsList from './components/DonationsList';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import { Card, Title, Paragraph } from 'react-native-paper';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage, CardMedia,  } from 'react-native-material-cards'

const HomeScreen = () => {
  return (
    <View style={homeStyles.container}>      
      
      <StatusBar style="auto" />
     
    <DonationsList />
{/*
      <Card style={{padding: "5%"}}>

        
          <CardImage 
          source={{uri: 'data:image/jpeg;base64,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'}} 
          style={{width: "80%", height: "30%", justifyContent: "center"}}
           />
      
      <CardTitle 
        subtitle="Homelessness"
      />
      </Card>


      <Card style={{padding: "5%"}}>
      <CardImage 
          source={{uri: 'https://www.uptownpsych.com/wp-content/uploads/2020/11/2283238.jpg'}}
          style={{width: "80%", height: "30%"}}
          />
      
      <CardTitle 
        subtitle="Addiction"
      />
      </Card>
  */}
       
    </View>
  );
}
const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});



const Contribute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const Profile = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const stylesLabel = StyleSheet.create({
  activeTabTextColor: {
    color: 'blue'
  },
  tabTextColor: {
    color: '#ccc'
  }
})

renderLabel = ({ route, focused, color }) => {
  return (
    <View>
      <Text
        style={[focused ? stylesLabel.activeTabTextColor : stylesLabel.tabTextColor]}
      >
        {route.title}
      </Text>
    </View>
  )
  }

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'blue'}}
    style={{ backgroundColor: 'white' }}
    renderLabel={renderLabel} 
  />
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  home: HomeScreen,
  contributions: Contribute,
  profile: Profile,
});

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Explore' },
    { key: 'contributions', title: 'Contributions' },
    { key: 'profile', title: 'Profile' },
  ]);

  return (
  <>
    <TopBar style={{height: "Constants.statusBarHeight"}} ></TopBar>
    <TabView
     style={styles.container}
     navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
     
    /> 
        </>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "white",
},
});
