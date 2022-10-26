import React, { FC, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import appStyles from '../appStyles';
import PlayerTable from '../elements/PlayerTable';

type Props = NativeStackScreenProps<RootStackParamList, 'GameCreate'>;


const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center',
    color: appStyles.colors.text,
  },
  mainContainer: {
    backgroundColor: appStyles.colors.primary,
    color: appStyles.colors.text,
    height: Platform.OS === 'web' ? '100vh' : '100%',
  },
});

const GameCreateView: FC<Props> = (props: Props) => {
  useEffect(() => {
  
  }, []);
  
  return <View style={ styles.mainContainer }>
    <View>
      <Text style={ styles.header }>Создать игру</Text>
    </View>
    <View>
      <View style={{height: Platform.OS === 'web' ? '95vh' : '95%'}}>
        <PlayerTable />
      </View>
    </View>
  </View>;
};

export default GameCreateView;
