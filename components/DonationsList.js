import React, { Component } from 'react';
import { Searchbar, Button, Card, Paragraph } from 'react-native-paper';
import { StyleSheet, SafeAreaView, View, ActivityIndicator, StatusBar, TextInput, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

class DonationsList extends Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      menuContainer: {
        // backgroundColor: 'orange',
        borderRadius: 10,
        margin: 10,
        marginTop: 2,
      },
      menuItemHeader: {
        backgroundColor: '#eee',
        borderRadius: 10,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      },
      menuItemHeaderText: {
        marginTop: 5,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
      },
      menuItemHeaderSubText: {
        marginTop: 5,
        fontSize: 15,
        color: '#fff'
      },
      menuItemBody: {
        backgroundColor: '#eee',
        borderWidth: 1,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: 'gray',
        borderTopWidth: 0,
        alignSelf: 'stretch',
      },
      menuItemBodyText: {
        marginTop: 5,
        fontSize: 15,
      },
      description_input: {
        height: 150,
        backgroundColor: 'red',
        alignItems: this.multiline ? 'flex-start' : 'center',
      },
      action_buttons_positioning: {
        alignSelf: 'flex-end',
        backgroundColor: 'green',
      },
      action_buttons: {
        width: 50,
        elevation: 8,
        // backgroundColor: "#D9B611",
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 2,
      },
      action_buttons_text: {
        color: '#fff',
        fontSize: 16,
        padding: 2
      },
      bottomLogoContainer: {
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        height: 100,
        marginBottom: 20,
        zIndex: 0
      },
      bottomLogoImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
      }
    });

    const DATA = [
      {
        donationTitle: "Homelessness",
        image: "https://images.ctfassets.net/81iqaqpfd8fy/43n1LWlPbi64oaeiQeUiQ0/d3d9c4a5582ff7d74899dcbb032af692/Homeless.jpg?h=620&w=1440",
      },
      {
        donationTitle: "Addiction",
        image: "https://www.apa.org/images/title-addictions_tcm7-187799.jpg",
      },      
      {
        donationTitle: "Starvation",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iGaUjvlnTpu-_zvw5Ro6I5mXXbnLXNXx1g&usqp=CAU",
      },     
    ]

    if (false) {
    //if (this.state.loading) {

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>

          <FlatList
            data={DATA}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (

              <Card style={styles.menuContainer}>
                <Card.Title title={item.donationTitle.toString()} style={styles.menuItemHeader} />
                <Card.Cover source={{ uri: item.image}} />

                <Card.Content style={styles.menuItemBody}>
                  <Paragraph style={styles.action_buttons_positioning}>
                    <TouchableOpacity onPress={() => alert('Clicked')}>
                      <View style={styles.action_buttons}>
                        <Text style={styles.action_buttons_text}>View</Text>
                      </View>
                    </TouchableOpacity>
                  </Paragraph>
                </Card.Content>
              </Card>
            )
            }
          />
          {/* <View style={styles.bottomLogoContainer}>
                <Image
                    style={styles.bottomLogoImage}
                    source={require('../../../../src/assets/img/logo_120.png')}
                />
            </View> */}
        </SafeAreaView>
      </>
    )
  }
}

export default DonationsList;