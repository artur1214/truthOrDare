import { useEffect, useState } from 'react';
import { StorageManager } from './storage';
import { PacksType } from './gameLogic';

export interface SettingsInterface {
  selectedAges: (keyof PacksType & number)[];
}

export function useSettings(): [SettingsInterface, ((_newSettings: SettingsInterface) => void)] {
  const [update, setUpdate] = useState<boolean>(false);
  const [settings, setSettings] = useState<SettingsInterface>({ selectedAges: [] });
  useEffect(() => {
    StorageManager.getSettings().then((res) => {
      console.log('getting settings');
      setSettings(res);
    });
    return () => {
      console.log('cleaned UP');
    };
  }, [update]);
  
  function settingsSetter(newSettings: SettingsInterface) {
    StorageManager.setSettings(newSettings).then(() => {
      setUpdate(!update);
    });
  }
  
  return [settings, settingsSetter];
}