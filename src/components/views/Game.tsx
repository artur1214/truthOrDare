import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { StyleSheet, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import GameButton from '../elements/GameButton';
import { useGame } from '../../gameLogic';
import { Player, usePlayer } from '../../player';
import { TaskModal } from '../elements/TaskModal';
import { getRandom, getRandomExclude } from '../../utils';


type Props = NativeStackScreenProps<RootStackParamList, 'Game'>;

const styles = StyleSheet.create({
  truth_action: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-around',
  },
  container_view: {},
});

export const Game: FC<Props> = (props) => {
  const [players, setPlayers] = usePlayer();
  const [currentPlayer, setCurrentPlayer] = useState<Player>();
  const [game, updateGamePlayers] = useGame(players);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  useEffect(() => {
    updateGamePlayers(players);
    if (!(currentPlayer && players.includes(currentPlayer))) {
      setCurrentPlayer(getRandom(players));
    }
  }, [players]);
  return (
    <View style={ styles.container_view }>
      <View>
        <View style={ styles.truth_action }>
          <GameButton title={ 'Правда' } onPress={ () => {
            setModalText(game.truth(players[0]));
            setCurrentPlayer(getRandomExclude(players, currentPlayer));
            setModalVisible(true);
          } } />
          
          <GameButton title={ 'Действие' } />
        </View>
        <View style={ { justifyContent: 'center', alignItems: 'center' } }>
          <GameButton title={ 'Случайно' } onPress={ () => {
          
          } } />
        </View>
      </View>
      <TaskModal
        visible={ modalVisible }
        text={ modalText }
        playerName={ currentPlayer?.name }
        onSetVisible={ () => {
          
          setModalVisible(false);
        } }
      />
    </View>);
};
