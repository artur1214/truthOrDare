import React, { FC } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import appStyles from '../appStyles';

type TaskModalProps = {
  visible?: boolean,
  onSetVisible?: () => void,
  text: string
  playerName?: string
}

const TaskModal: FC<TaskModalProps> = (props) => {
  //const [modalVisible, setModalVisible] = useState(false);
  return <Modal
    animationType="slide"
    transparent={ true }
    visible={ props.visible }
    onRequestClose={ () => {
      props.onSetVisible?.();
    } }
  >
    <View style={ styles.centeredView }>
      <View style={ styles.modalView }>
        <Text style={ styles.title }>{ props.playerName || '' }</Text>
        <Text style={ styles.modalText }>{ props.text }</Text>
        <Pressable
          style={ [styles.button, styles.buttonClose] }
          onPress={ props.onSetVisible }
          //onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={ styles.textStyle }>Закрыть</Text>
        </Pressable>
      </View>
    </View>
  </Modal>;
  
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  title: {
    textAlign: 'left',
    fontSize: 24,
    color: appStyles.colors.primary_text,
  },
});
export { TaskModal };
export type { TaskModalProps };
