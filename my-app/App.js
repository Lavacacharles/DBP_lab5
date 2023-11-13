import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import CustomSaveImg from './ApiCalls/StorageCustom';
import SearchTeamInterface from './components/InputTeam';
import ContentData from './ApiCalls/ChoosedApi';


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
  const [jsonData, setJsonData] = useState([]);
  return (
    <SafeAreaView style={styless.container}>
      <ScrollView>
      <>{CustomSaveImg()}</>
      <ContentData setJsonData={setJsonData}/>
        <ScrollView>
            <SearchTeamInterface jsonData={jsonData}/>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
    
  );
};


export default App;