import React, { useEffect, useState} from "react";
import { TextInput, View, Button } from "react-native";
import ListCustom from "../components/ListCostum";

const SearchTeamInterface = () => {
  const [deployPlayers, setDeployPlayers] = useState(false);
  const [team, setTeam] = useState('');
  const [ArrPlayers, setArrPlayers] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch('https://www.balldontlie.io/api/v1/players');
      const json = await response.json();
      setArrPlayers(json.data);
      setDeployPlayers(true);
      return ArrPlayers;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <View style={{padding: 10, flex: 1}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here your team"
        onChangeText={textTeam => setTeam(textTeam)}
        defaultValue={team}
      />  
      <Button onPress={ () => fetchData()} title="Ask for players" color="#03fc5e" style={{borderRadius: 10}}/>
      <View>
          {deployPlayers && <ListCustom team = {team} ArrPlayers={ArrPlayers} /> }
      </View>
    </View>

  );
};

export default SearchTeamInterface;