
import React,{useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import TabNavigation from './screens/tabs';
import SplashScreen from 'react-native-splash-screen'

const App= () => {
  useEffect(()=>{
    SplashScreen.hide();
  })

  return (
   <TabNavigation/>
  );
};



export default App;
