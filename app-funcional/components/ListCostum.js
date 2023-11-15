
import React, { useState, useEffect} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const ListCustom = ({team, ArrPlayers}) => {
  const [ArrPlayersByTeam, setArrPlayersByTeam] = useState([]);

  useEffect( () => {
    let Filter = [{
      title: 'Players',
      data: []
    }];
    for(let i = 0; i < ArrPlayers.length; i++){
      if(ArrPlayers[i].team["name"] === team){
        Filter[0].data.push('' + ArrPlayers[i]["first_name"] + ArrPlayers[i]["last_name"])
      }
    }
    setArrPlayersByTeam(Filter);
  }, [team, ArrPlayers])

    
  return (
    <View style = {styles.container}>

      <Text>Your selected team is {team}!</Text>
      <Text>Here are your players</Text>
      <SectionList
        sections={ArrPlayersByTeam}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}  
        
        />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    margin: 20
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

export default ListCustom;



/*
  useEffect( () => {
    let FilterPlayers = [];
    for(let i = 0; i < ArrPlayers.length; i++){
      if(ArrPlayers[i].team["name"] === team){
        FilterPlayers.push('' + ArrPlayers[i]["first_name"] + ArrPlayers[i]["last_name"])
      }
    }
    setArrPlayersByTeam(FilterPlayers);
  }, [team, ArrPlayers]);
*/
/*
    let filterPlayers = ArrPlayers.filter(player => player.team["name"] === team);
    setArrPlayersByTeam([{ title: 'Players', data: filterPlayers }]);
    */