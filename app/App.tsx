import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View>
          <Text> This is the Initial Routing Commit </Text>
        </View>
      </NavigationContainer>
    );
  }
}

export default App;
