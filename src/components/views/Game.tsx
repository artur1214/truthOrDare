import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import GameButton from '../elements/GameButton';


type Props = NativeStackScreenProps<RootStackParamList, 'Game'>;

const styles = StyleSheet.create({
  truth_action: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-around'
  },
  container_view: {
  
  }
})

export const Game: FC<Props> = (props) => {
  
  return (
    <View style={styles.container_view}>
      <View>
        <View style={styles.truth_action}>
          <GameButton title={'Правда'} />
          
          <GameButton title={'Действие'} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <GameButton title={'Случайно'} />
        </View>
      </View>
    </View>);
};
