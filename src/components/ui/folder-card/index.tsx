import React from 'react';
// React Native
import { Modal } from 'react-native';
// React Navigate
import { useNavigation } from '@react-navigation/native';
// Hooks
import { useStorage, useKeys } from '../../../hooks';
// Expo icons
import { Feather } from '@expo/vector-icons';
// Ui
import { Confirm } from '../confirm';
// types
import { INavigationProps } from '../../../@types';
// Style
import * as S from './style';

interface IFolderCard {
  title: string;
}

export const FolderCard = ({ title }: IFolderCard) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const { removeKey } = useStorage();
  const { keys, setKeys } = useKeys();

  const navigation = useNavigation<INavigationProps>();

  function handlePressYes() {
    removeKey(title);
    const allKeys = keys.filter((key) => key !== title);
    setKeys([...allKeys]);
    setShowModal(false);
  }
  function handleCurrentKey() {
    const allKeys = keys.filter((key) => key !== title);
    allKeys.unshift(title);
    setKeys([...allKeys]);
    navigation.navigate('Files');
  }

  return (
    <S.BoxRow justify="space-between" align="center">
      <S.ButtonBox onPress={handleCurrentKey}>
        <S.BoxRow gap={10} align="center">
          <Feather name="folder" size={20} color="white" />
          <S.Title>{title}</S.Title>
        </S.BoxRow>
      </S.ButtonBox>

      <S.Button onPress={() => setShowModal(true)}>
        <Feather name="trash" size={18} color="white" />
      </S.Button>

      <Modal visible={showModal} transparent>
        <Confirm
          buttonYes={handlePressYes}
          buttonNo={() => setShowModal(false)}
          title={'Delete folder ?'}
          text="Warning: When you delete this folder, all the files in it will be permanently deleted. Make sure you no longer need these files before proceeding with the deletion."
        />
      </Modal>
    </S.BoxRow>
  );
};
