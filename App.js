import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/index';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainPage from './components/MainPage';
import ImagePage from './components/ImagePage.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Photos" component={MainPage} />
          <Stack.Screen name="PhotoPage" component={ImagePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
