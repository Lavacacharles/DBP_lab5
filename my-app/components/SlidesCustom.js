import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import PagerView from 'react-native-pager-view';

const styless = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: 'center',
    backgroundColor: '#9ed0e8'
  },
  text: {
    fontSize: 50
  },
});

const SliderCustom = () => {
    
const [NumSlides, setNumSlides] = useState(0);
  return (
      <PagerView 
        style={styless.container} 
        initialPage={0} 
        scrollEnabled = {true} 
        pageMargin={100}
      >
        <View key="1">
        <Text>hola1</Text>
        </View >
        <View key="2">
        <Text>hola2</Text>
        </View>
        <View key="3">
        <Text>hola3</Text>
        </View>
      </PagerView>
    
  );
};


export default SliderCustom;