import React, { FC } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import MenuButton from '../elements/MenuButton';
import { RootStackParamList } from '../../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import appStyles from '../appStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    margin: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    
    //backgroundColor: '#000000c0',
    
  },
});

const buttonsStyle = StyleSheet.create({
  button: {
    //margin: 145,
    marginLeft: 30,
    marginRight: 30,
    marginVertical: 20,
    //padding: 15,
    //backgroundColor: '#f194ff',
    
  },
  text: {
    color: appStyles.colors.text,
    fontSize: 36,
  },
  
});

const MainMenuView: FC<Props> = (props: Props) => {
  return (
    <View style={ styles.container }>
      <ImageBackground style={ styles.image } source={ require('../../static/main_activity_bg.jpg') }>
        <View style={ styles.content }>
          <MenuButton
            style={ buttonsStyle.button }
            textStyle={ buttonsStyle.text }
            color={ '#f194ff' }
            title="Новая игра"
            onPress={ () => {
              props.navigation.navigate('GameCreate');
            } }
          />
          <MenuButton
            style={ buttonsStyle.button }
            textStyle={ buttonsStyle.text }
            title="Настройки"
            onPress={ () => {
              props.navigation.navigate('Settings');
            } }
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MainMenuView;
