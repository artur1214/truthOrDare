import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { StyleSheet, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import GameButton from '../elements/GameButton';
import { GameInstance, useGame } from '../../gameLogic';
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
  container_view: {
    // display: 'flex',
    // textAlignVertical: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
    // alignItems: 'center'
  },
  container_inner: {
    // alignItems: 'center'
  },
  arrow: {
  }, arrow_container: {},
  
});

export const Game: FC<Props> = (props) => {
  const [players, setPlayers] = usePlayer();
  const [currentPlayer, setCurrentPlayer] = useState<Player>();
  const [game, updateGamePlayers] = useGame(players);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const [modalTitle, setModalTitle] = useState<string>('');
  useEffect(() => {
    updateGamePlayers(players);
    if (!(currentPlayer && players.includes(currentPlayer))) {
      setCurrentPlayer(getRandom(players));
    }
  }, [players]);
  return (
    <View style={ styles.container_view }>
      <View style={ styles.container_inner }>
        <View style={ styles.truth_action }>
          <GameButton title={ 'Правда' } onPress={ () => {
            console.log(currentPlayer);
            currentPlayer && setModalText(game.truth(currentPlayer));
            currentPlayer && setModalTitle(currentPlayer.name);
            setCurrentPlayer(getRandomExclude(players, currentPlayer));
            setModalVisible(true);
          } } />
          
          <GameButton title={ 'Действие' } onPress={ () => {
            console.log('1', currentPlayer);
            console.log('2', players);
            currentPlayer && setModalText(game.dare(currentPlayer));
            currentPlayer && setModalTitle(currentPlayer.name);
            const p = getRandomExclude(players, currentPlayer);
            console.log(3, p);
            setCurrentPlayer(p);
            setModalVisible(true);
          } } />
        </View>
        <View style={ { justifyContent: 'center', alignItems: 'center' } }>
          <GameButton title={ 'Случайно' } onPress={ () => {
            const taskType = (getRandom(['dare', 'truth'])) as keyof GameInstance;
            currentPlayer && setModalText((game[taskType])(currentPlayer));
            //currentPlayer && setModalText(game.dare(currentPlayer));
            currentPlayer && setModalTitle(currentPlayer.name);
            const p = getRandomExclude(players, currentPlayer);
            console.log(3, p);
            setCurrentPlayer(p);
            setModalVisible(true);
          } } />
        </View>
      </View>
      <TaskModal
        visible={ modalVisible }
        text={ modalText }
        playerName={ modalTitle }
        onSetVisible={ () => {
          
          setModalVisible(false);
        } }
      />
    </View>);
};
