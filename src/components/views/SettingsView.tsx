import React, { FC, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';


type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#d1f1c3",
    padding: 10
  }
});

const SettingsView: FC<Props> = (props: Props) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}


export default SettingsView;
