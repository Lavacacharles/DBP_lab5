import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, DrawerLayoutAndroid} from 'react-native';
import CustomSaveImg from './ApiCalls/StorageCustom';
import SearchTeamInterface from './ApiCalls/ChoosedApi';
import ListCustom from './components/ListCostum';


const styless = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2
  },
  scrollView: {
    backgroundColor: 'lightpink',
    marginHorizontal: 30,
    marginBottom: 1,
    padding: 1,
    margin: 10
  },
  text: {
    fontSize: 50
  },
});


const App = () => {

  return (
    <SafeAreaView style={styless.container}>
      <View style = {{marginTop: 50}}>
      <>{CustomSaveImg()}</>
      </View>
      <ScrollView>
        <SearchTeamInterface></SearchTeamInterface>
      </ScrollView>
    </SafeAreaView>
    
  );
};


export default App;