import React from 'react';
import { StyleSheet, Text, ScrollView, Image, TextInput, Button, ToolbarAndroid } from 'react-native';

const onPressLearnMore = () => {
  console.log('pressed!');
}
export default class App extends React.Component {
  render() {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView style={styles.container}>
        <ToolbarAndroid
          title="AwesomeApp"
          actions={[{title: 'Settings', show: 'always'}]}
          onActionSelected={this.onActionSelected} />
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Open up App.js to start working on my app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <TextInput style={styles.input} />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'scroll'
  },
  input: {
    padding: 20,
  }
});
