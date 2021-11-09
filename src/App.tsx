import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Card,
  Title,
  Paragraph,
  List,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';

import React from 'react';
import {PreferencesContext} from './contexts/ThemeContext';
import Header from './components/Header';

const HomeScreen = ({navigation}: any) => (
  <Header>
    <TouchableOpacity
      onPress={() =>
        navigation?.push('Details', {title: 'Test', content: 'jhdfvjhadjh'})
      }>
      <Card>
        <Card.Content>
          <Title>Test</Title>
          <Paragraph>Multiple Test</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  </Header>
);

const DetailsScreen = ({props}: any) => {
  const {title, content} = props?.route?.params;
  return (
    <Header>
      <List.Section>
        <List.Subheader>{title}</List.Subheader>
        <List.Item title={content} />
      </List.Section>
    </Header>
  );
};

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Stack = createStackNavigator();

export default function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDefaultTheme : CombinedDarkTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
