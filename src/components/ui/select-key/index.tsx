import React from 'react';
// React Native
import { ScrollView } from 'react-native-gesture-handler';
// Expo icons
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// Style
import * as S from './style';
import { ISelectErrror } from '../../profile-box';
import { color } from '../../../utils';
import { useKeys, useStorage } from '../../../hooks';
import { ModalNewFolder } from '../modal-new-folder';
import { SheetModal } from '../sheet-modal';

interface ISelect {
  dataItems: string[];
  open: boolean;
  setOpen: () => void;
  onSelect: (selectedValue: string) => void;
  onClose: () => void;
  error: ISelectErrror | null;
}

export const SelectKey = (props: ISelect) => {
  const [showNewFolder, setShowNewFolder] = React.useState<boolean>(false);

  console.log(showNewFolder);

  function handleSelect(value: string) {
    props.onSelect(value);
  }

  return (
    <SheetModal
      open={props.open}
      setOpen={props.setOpen}
      overlayBg="rgba(0,0,0,0.5)"
      frameBg={color['background-third']}
    >
      <ScrollView
        style={{ flex: 1, marginVertical: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {props.dataItems.map((data) => (
          <S.Button
            key={data}
            onPress={() => handleSelect(data)}
            bg={color['background-primary']}
            m="4px 0px"
            p="8px 16px"
            r="10px"
          >
            <S.BoxRow>
              <FontAwesome name="folder-o" size={28} color="white" />
              <S.TextItem>{data}</S.TextItem>
            </S.BoxRow>

            {props.error?.key === data && (
              <S.ErrorMessage>{props.error.error}</S.ErrorMessage>
            )}
          </S.Button>
        ))}
      </ScrollView>
      <S.Button
        onPress={() => setShowNewFolder(true)}
        bg={color['primary']}
        h="50px"
        r="8px"
        jc="center"
        ai="center"
      >
        <S.Text>New Folder</S.Text>
      </S.Button>

      <ModalNewFolder
        showNewFolder={showNewFolder}
        setShowNewFolder={setShowNewFolder}
      />
    </SheetModal>
  );
};
