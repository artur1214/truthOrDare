import * as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenuView from './src/components/views/MainMenuView';
import GameCreateView from './src/components/views/GameCreateView';
import SettingsView from './src/components/views/SettingsView';
import { navigationRef } from './src/rootNavigator';
import { Game } from './src/components/views/Game';


export type RootStackParamList = {
  MainMenu: undefined,
  GameCreate: undefined,
  Settings: undefined,
  Game: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {
  useEffect(() => {
    //setPlayers && setPlayers([]);
  }, []);
  
  return <NavigationContainer ref={ navigationRef }>
    <Stack.Navigator>
      <Stack.Screen
        name={ 'MainMenu' }
        component={ MainMenuView }
        options={ {
          headerShown: false,
        } }
      />
      <Stack.Screen
        name={ 'GameCreate' }
        component={ GameCreateView }
        options={ {
          headerShown: false,
        } }
      />
      <Stack.Screen
        name={ 'Settings' }
        component={ SettingsView }
        options={ {
          headerShown: false,
        } }
      />
      <Stack.Screen
        name={ 'Game' }
        component={ Game }
        options={ {
          headerShown: false,
        } }
      />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default App;
