import { useState, React } from "react";
import { TextInput, View, Button } from "react-native";
import ListCustom from "./ListCostum";

const SearchTeamInterface = ({jsonData}) => {
    const [deployPlayers, setDeployPlayers] = useState(false);
    const [team, setTeam] = useState('');

    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here your team"
          onChangeText={newText => setTeam(newText)}
          defaultValue={team}
        />
        {<Button onPress={() => setDeployPlayers(true)} title="Ask for players" color="#03fc5e"/>}
        <View>
            {deployPlayers && <>{ListCustom(team,jsonData)}</>}
    </View>
      </View>

    );
  };

export default SearchTeamInterface;