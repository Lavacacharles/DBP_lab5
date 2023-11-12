import React, {useState} from 'react';
import {Text, View, Image, Button, TextInput} from 'react-native';

/*
<Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
*/

const Cat = props => {
    const [isHungry, setisHungry] = useState(true);
    const [text, setText] = useState('');
  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat!</Text>

      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>

      <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
      <Button onPress={() => {
        setisHungry(false);
        setText('hola');
      }}
        disabled = {!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank ' + text + ' you!'}
      />
    </View>
  );
};
/*
const SecctionCafe = () => {
  <View style = {style.container}>
    <SectionList
      sections = {[]}
    >

    </SectionList>
  </View>

}
*/
const Cafe = () => {
    return (
      <>
        <Cat name="Munkustrap" />
      </>
    );
  };
export default Cafe;