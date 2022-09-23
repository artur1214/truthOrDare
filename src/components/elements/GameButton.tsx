import React, { FC } from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import appStyles from '../appStyles';

interface ButtonProps {
  onPress?: ((event:GestureResponderEvent)=>void) | undefined,
  title?: string | undefined,
  color?: string
}

const GameButton: FC<ButtonProps> = (props: ButtonProps) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: props.color || appStyles.colors.accent,
      padding: 5,
      borderRadius: 30,
      textAlignVertical: 'center',

      //marginHorizontal: 30,
      //marginVertical: 10,
    },
    text: {
      color: appStyles.colors.text,
      fontSize: 30
    },
    touchable: {
      borderRadius: 40,
    },
    container: {
      //flex: 1,
      width: '48%',
      justifyContent: "center",
      paddingHorizontal: 10,
      marginHorizontal: 30,
      marginVertical: 10
    },
  });
  
  return (<View style={{ ...styles.container}}>
    <TouchableHighlight style={styles.touchable} onPress={props.onPress}>
      <View style={{...styles.button}}>
        <Text style={{...styles.text}}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  </View>)
  // return <TouchableHighlight
  //     style={{ ...styles.button, ...props.style}}
  //     onPress={props.onPress}
  //   >
  //   <View>
  //     <Text style={props.textStyle}>{props.title}</Text>
  //   </View>
  //   </TouchableHighlight>
}

export default GameButton;
