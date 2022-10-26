import React, { FC, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MenuButton from './MenuButton';
import { Gender, Player, usePlayer } from '../../player';
import appStyles from '../appStyles';
import RadioButton, { RadioButtonValue } from './RadioButton';
import { global_navigate } from '../../rootNavigator';


const PlayerTable: FC = () => {
  const styles = StyleSheet.create({
    nameInput: {
      backgroundColor: appStyles.colors.text,
      borderRadius: 20,
      paddingLeft: 14,
      paddingRight: 14,
      minWidth: '54%',
      fontSize: 20,
      fontWeight: 'bold',
      color: appStyles.colors.accent,
      textAlign: 'center',
    },
    genderSelect: {},
    tableRow: {},
    container: {
      marginHorizontal: 20,
      // flexDirection: 'column', // inner items will be added vertically
      // flexGrow: 1,            // all the available vertical space will be occupied by it
      // justifyContent: 'space-between',
    },
    safeArea: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    remove: {
      height: 30,
      width: 30,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: appStyles.colors.dark_primary,
      alignItems: 'center',
      
      flex: 1,
      justifyContent: 'center',
    },
    removeText: {
      paddingTop: 2,
      fontWeight: 'bold',
      textAlignVertical: 'center',
      fontSize: 35,
      flex: 1,
      paddingLeft: 19,
      color: appStyles.colors.dark_primary,
    },
  });
  const genderSelects: RadioButtonValue[] = [{
    value: 'w',
    text: '♀',
  }, {
    value: 'm',
    text: '♂',
  }];
  const [players, setPlayers] = useState<Player[]>([]);
  const [realPlayers, setRealPlayers] = usePlayer();
  useEffect(() => {
    
    setPlayers((prev) => {
      return realPlayers.map(pl => pl);
    });
  }, [realPlayers]);
  useEffect(() => {
    console.log('cuur players: ', players);
  }, [players]);
  const renderPlayers = () => {
    return players.map((value, index) => {
      return <View key={ index } style={ { ...styles.tableRow, flexDirection: 'row', marginVertical: 2 } }>
        <TextInput
          style={ styles.nameInput }
          value={ value.name }
          placeholder={ value.name }
          onChangeText={
            
            (text) => {
              console.log('text changed');
              setPlayers(prevState => {
                return prevState.map((player, ind) => {
                  if (ind === index) {
                    player.name = text;
                  }
                  return player;
                });
              });
            }
          }
        />
        
        <View style={ styles.genderSelect }>
          <RadioButton
            values={ genderSelects }
            initialValue={ value.gender }
            displayType={ 'inline' }
            onChange={ (newVal: Gender) => {
              setPlayers(prev => {
                return prev.map((val, ind) => {
                  if (ind == index) {
                    val.gender = newVal;
                  }
                  return val;
                });
              });
            } }
          />
        </View>
        <View>
          <TouchableWithoutFeedback
            onPress={ () => {
              setPlayers((prev) => {
                return prev.filter((val, ind) => {
                  return ind != index;
                });
              });
            } }
            style={ styles.remove }
          >
            <Text style={ styles.removeText }>⨷</Text>
          </TouchableWithoutFeedback>
        
        </View>
      </View>;
    });
  };
  
  return <SafeAreaView style={styles.safeArea}>
    <ScrollView style={ styles.container }>
      <View style={{display: 'flex'}}>
        { renderPlayers() }
        <MenuButton
          onPress={ () => {
            setPlayers((prev) => [...prev, new Player()]);
          } } title={ 'Добавить игрока' }
        />
      </View>
    </ScrollView>
      <MenuButton title={ 'Начать игру' } onPress={ () => {
        setRealPlayers(players);
        global_navigate('Game');
      } } />

  </SafeAreaView>;
};

export default PlayerTable;
