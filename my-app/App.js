import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
import Cafe from './components/Cat'
import SectionListBasics from './components/practice'
import BarTop from './components/BarTop';
import InfoAccount from './ApiCalls/StorageCustom';


const styless = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: StatusBar.currentHeight
  },
  scrollView: {
    backgroundColor: 'lightpink',
    marginHorizontal: 30,
    height: 0
  },
  text: {
    fontSize: 50,
  }
});


const App = () => {
  return (
    <SafeAreaView style={styless.container}>

      <BarTop ></BarTop>
      
      <InfoAccount></InfoAccount>
  
      <ScrollView style = {styless.scrollView}>
        <Text style = {{paddingTop: 1}}> Hola simios </Text>
        <Cafe></Cafe>
      </ScrollView>

      <SectionListBasics>
      </SectionListBasics>
        
    </SafeAreaView>
    
  );
};


export default App;