import { Modal, StatusBar } from 'react-native';
import * as S from './styles';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

interface ISeetmModal {
  open: boolean;
  setOpen: (boolean: boolean) => void;
  frameBg: string;
  overlayBg?: string;
  h?: string;
  back?: boolean;
  children: React.ReactNode;
}

export const SheetModal = ({
  open,
  setOpen,
  back = true,
  overlayBg,
  h,
  frameBg,
  children,
  ...rest
}: ISeetmModal) => {
  return (
    <Modal visible={open} transparent animationType="slide" {...rest}>
      <S.Container>
        <S.Overlay
          overlayBg={open ? overlayBg : 'transparent'}
          onPress={() => setOpen(false)}
        ></S.Overlay>

        <S.Frame h={h} frameBg={frameBg}>
          {back && (
            <S.Box fd="row" ai="center" jc={'space-between'}>
              <AntDesign
                onPress={() => setOpen(false)}
                name="left"
                size={24}
                color="white"
              />
              <S.Text>Sheet Modal</S.Text>
              <S.Box w="0px" h="5px" />
            </S.Box>
          )}

          {!back && (
            <S.Box fd="row" ai="center" jc="center">
              <S.Text>Sheet Modal</S.Text>
            </S.Box>
          )}
          {children}
        </S.Frame>
      </S.Container>

      <StatusBar backgroundColor={overlayBg} />
    </Modal>
  );
};
