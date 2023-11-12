import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";



const InfoAccount = () => {

    const [jsonInfoAccount, setjsonInfoAccount] = useState({});
    useEffect(() => {
        fetch('https://api-v2.ddownload.com/api/account/info?key=370653qju4ourdszvutlst')
          .then((response) => response.json())
          .then((json) => {
            setjsonInfoAccount(json);
          })
          .catch((error) => console.error(error));
        });
    return (
        <Text>{JSON.stringify(jsonInfoAccount)}</Text>
        
    )
}
export default InfoAccount;
