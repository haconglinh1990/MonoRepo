/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import style from './style';

const App: () => React$Node = () => {
  return (
      <View style={style.container}>
        <Text style={style.text}>
          Welcome to React Native monorepo !
        </Text>
      </View>
  );
};


export default App;
