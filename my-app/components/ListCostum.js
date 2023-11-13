import {React, useState, useEffect} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

export default function ListCustom({team, ContentData}){
  const [arrPlayersInTeam, setArrPlayersInTeam] = useState([]);
  
  useEffect( () => {
    let FilterPlayers = [];
    for(let i = 0; i < ContentData.length; i++){
      if(ContentData[i].team["name"] === team){
        FilterPlayers.push('' + ContentData[i]["first_name"] + ContentData[i]["last_name"])
      }
    }
    setArrPlayersInTeam(FilterPlayers);
  }, [team,ContentData]);

  return (
    <View style = {styles.container}>

      <Text>Your selected team is {team}!</Text>
      <Text>Here are your players</Text>{
      <SectionList
        sections={arrPlayersInTeam}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}  
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#6a35d4',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#942adb',
  },
  title: {
    fontSize: 24,
  },
});