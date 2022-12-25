import React, { FC } from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native';
import appStyles from '../appStyles';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#111',
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    
  },
  text: {
    color: '#fff',
    
  },
  
});

interface AgeToggleButtonProps {
  text?: string,
  children?: string,
  enabled: boolean,
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined
}

export const AgeToggleButton: FC<AgeToggleButtonProps> = (props) => {
  return (
    <Pressable style={ {
      ...styles.container,
      ...{ backgroundColor: props.enabled ? appStyles.colors.primary : appStyles.colors.secondary_text },
    } } onPress={ (event)=> {
      props.onPress?.(event)
    }}>
      <Text style={ styles.text }>
        { props.text || props.children }
      </Text>
    </Pressable>
  );
};