import AsyncStorage from '@react-native-async-storage/async-storage';
import { Callback, CallbackWithResult } from '@react-native-async-storage/async-storage/lib/typescript/types';
import { Player } from './player';
import { SettingsInterface } from './settingsManager';

// export enum Gender {
//   MAN = 'm',
//   WOMAN = 'w'
// }


interface StorageManagerInterface {
  getItem: Function,
  setItem: Function,
  getPlayers: Function,
  setPlayers: Function,
  addPlayer: Function,
  removePlayer: Function
}

const StorageManager = {
  
  getItem: async (key: string, callback?: CallbackWithResult<string>): Promise<string | null> => {
    return await AsyncStorage.getItem(key, callback);
  },
  setItem: async (key: string, value: string, callback?: Callback): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, value, callback);
      return true;
    } catch (e) {
      return false;
    }
  },
  getPlayers: async (): Promise<Player[] | null> => {
    try {
      const item = await StorageManager.getItem('players');
      return (item && JSON.parse(item));
    } catch (e) {
      return null;
    }
  },
  setPlayers: async (value: string | Array<Player> | null): Promise<boolean> => {
    if (value === null) {
      return false;
    }
    if (typeof value === 'string') {
      return await StorageManager.setItem('players', value);
    } else {
      return await StorageManager.setItem('players', JSON.stringify(value));
    }
  },
  addPlayer: async (player: Player) => {
    let res = await StorageManager.getPlayers() || [];
    res.push(player);
    
    return await StorageManager.setPlayers(res);
  },
  removePlayer: async (id: number): Promise<Player[] | undefined> => {
    let players = await StorageManager.getPlayers();
    return players?.filter(value => value.id != id);
  },
  getSettings: async (): Promise<SettingsInterface> => {
    const item = await StorageManager.getItem('settings');
    let settings = (item && JSON.parse(item));
    if (!settings) {
      settings = ({
        selectedAges: [12, 16],
      } as SettingsInterface);
    }
    return settings;
  },
  setSettings: async (newSettings: SettingsInterface): Promise<boolean> => {
    return await StorageManager.setItem('settings', JSON.stringify(newSettings));
  }
};

export { StorageManager };
