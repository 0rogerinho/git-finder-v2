import React from 'react';
// React native
import { ScrollView } from 'react-native-gesture-handler';
// Hookes
import { useKeys, useStorage } from '../../hooks';
// ui
import { FolderCard } from '../ui/folder-card';
// Expo icons
import { AntDesign } from '@expo/vector-icons';
// Style
import * as S from './style';
import { ModalNewFolder } from '../ui';
import { SheetModal } from '../ui/sheet-modal';

export const FoldersBox = () => {
  const [showNewFolder, setShowNewFolder] = React.useState<boolean>(false);

  const { getAllKeys } = useStorage();
  const { keys, setKeys } = useKeys();

  React.useEffect(() => {
    async function getKeys() {
      const allKeys = await getAllKeys();
      const newAllKeys = allKeys && [...allKeys];
      newAllKeys && setKeys(newAllKeys);
    }
    getKeys();
  }, []);

  return (
    <S.Container>
      <S.BoxRow justify="space-between" align="center">
        <S.Title>Folders</S.Title>

        <S.Button onPress={() => setShowNewFolder(true)}>
          <AntDesign name="addfolder" size={20} color="white" />
        </S.Button>
      </S.BoxRow>

      <ScrollView>
        {keys.map((key) => (
          <FolderCard key={key} title={key} />
        ))}
      </ScrollView>

      <ModalNewFolder
        showNewFolder={showNewFolder}
        setShowNewFolder={() => setShowNewFolder(!showNewFolder)}
      />
    </S.Container>
  );
};
