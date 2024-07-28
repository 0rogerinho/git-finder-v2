import React from 'react';
import { Modal } from 'react-native';
import * as S from './style';
import { useKeys, useStorage } from '../../../hooks';

interface IModalNewFolder {
  showNewFolder: boolean;
  setShowNewFolder: (boolean: boolean) => void;
}

export const ModalNewFolder = (props: IModalNewFolder) => {
  const [nameKey, setNameKey] = React.useState<string>('');

  const { storeData, storeError } = useStorage();
  const { keys, setKeys } = useKeys();

  function handleNewKey() {
    setKeys([...keys, nameKey]);

    if (!storeError) {
      storeData(nameKey, null);
      props.setShowNewFolder(false);
    }
  }

  return (
    <Modal visible={props.showNewFolder} transparent>
      <S.ContainerModal>
        <S.boxModal>
          <S.TitleModal>Folder Name</S.TitleModal>

          <S.TextInput
            value={nameKey}
            onChangeText={(value) => setNameKey(value)}
          />

          <S.BoxRow gap={50}>
            <S.ButtonConf bg="#0C8611" onPress={handleNewKey}>
              <S.TextButton>Yes</S.TextButton>
            </S.ButtonConf>

            <S.ButtonConf
              bg="#D72424"
              onPress={() => props.setShowNewFolder(false)}
            >
              <S.TextButton>No</S.TextButton>
            </S.ButtonConf>
          </S.BoxRow>
        </S.boxModal>
      </S.ContainerModal>
    </Modal>
  );
};
