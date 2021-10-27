import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class App extends Component {
  render() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <View>
            <Text> This is the Initial Routing Commit </Text>
          </View>
        </NavigationContainer>
      </PaperProvider>
    );
  }
}

export default App;
