import React, { FC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import appStyles from '../appStyles';

export interface RadioButtonValue {
  value: any,
  text?: string
  disabled?: boolean
}

export type RadioButtonProps = {
  values: RadioButtonValue[],
  displayType?: 'inline' | 'block',
  initialValue?: any
  onChange?: (value: any) => void
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
    alignItems: 'center',
    flexDirection: 'row',
    textAlignVertical: 'bottom',
    display: 'flex',
    justifyContent: 'space-around',
  },
  radioText: {
    marginRight: 5,
    fontSize: 28,
    color: appStyles.colors.text,
    fontWeight: '700',
    marginStart: 5,
    textAlignVertical: 'center',
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: appStyles.colors.dark_primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: appStyles.colors.dark_primary,
  }
});


const RadioButton: FC<RadioButtonProps> = (props) => {
  const [currentValue, setCurrentValue] = useState(props.initialValue);
  const renderValues = () => {
    return props.values.map((element) => {
      return (
        <View key={ element.value } style={ {...styles.container} }>
          <Text style={ styles.radioText }>{ element.text }</Text>
          <TouchableOpacity
            style={ styles.radioCircle }
            onPress={ () => {
              setCurrentValue(element.value)
              console.log(props.onChange);
              props.onChange && props.onChange(element.value)
            } }
          >
            { currentValue === element.value && <View style={ styles.selectedRb } /> }
          </TouchableOpacity>
        </View>
      );
    });
  };
  
  return <Text style={ {
    //display: 'flex',
    textAlignVertical: 'center',
    flex: 1,
    flexDirection: (props.displayType && props.displayType === 'inline' ? 'row' : 'column'),
  } }>
    { renderValues() }
  </Text>;
};

export default RadioButton;
