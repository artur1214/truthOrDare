import React, { FC, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { useSettings } from '../../settingsManager';
import { packsAges } from '../../gameLogic';
import { AgeToggleButton } from '../elements/AgeToggleButton';


type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#d1f1c3',
    padding: 10,
  },
  agesList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const SettingsView: FC<Props> = (props: Props) => {
  
  const ages = [...packsAges];
  const [settings, setSettings] = useSettings();
  useEffect(() => {
    console.log('settings', settings);
    //setSettings({selectedAges: [12,16,18]})
  }, []);
  const renderAges = () => {
    
    return ages.map((value, index) => {
      return (
        <AgeToggleButton
          key={ index }
          enabled={ settings.selectedAges.includes(value) }
          onPress={ () => {
            if (settings.selectedAges.includes(value)) {
              const newAges = settings.selectedAges.filter(age => age !== value);
              setSettings({ ...settings, ...{ selectedAges: newAges } });
            } else {
              const newAges = [...settings.selectedAges, value];
              setSettings({ ...settings, ...{ selectedAges: newAges } });
            }
          } }
        >
          { value.toString() }
        </AgeToggleButton>
      );
    });
  };
  return (
    
    <View style={ styles.container }>
      <View>
        <Text>Возрастные ограниченя.</Text>
        <View style={ styles.agesList }>
          { renderAges() }
        </View>
      </View>
    </View>
  );
};


export default SettingsView;
