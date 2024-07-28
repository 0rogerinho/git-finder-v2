import React from 'react';
// Style
import * as S from './style';

interface IConfirm {
  title: string;
  buttonYes: () => void;
  buttonNo: () => void;
  text: string;
}

export const Confirm = (props: IConfirm) => {
  return (
    <S.container>
      <S.Box>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>

        <S.BoxRow>
          <S.Button bg="#0C8611" onPress={props.buttonYes}>
            <S.TextButton>Yes</S.TextButton>
          </S.Button>
          <S.Button bg="#D72424" onPress={props.buttonNo}>
            <S.TextButton>No</S.TextButton>
          </S.Button>
        </S.BoxRow>
      </S.Box>
    </S.container>
  );
};
