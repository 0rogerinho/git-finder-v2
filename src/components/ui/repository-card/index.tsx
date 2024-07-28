import React from 'react';
// Utils
import { formatDate } from '../../../utils';
// Style
import * as S from './style';

interface IRepositoryCard {
  Title: string;
  language: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const RepositoryCard = (props: IRepositoryCard) => {
  return (
    <S.container>
      <S.BoxRow justify="space-between">
        <S.Title width={150} ellipsizeMode="tail" numberOfLines={1}>
          {props.Title}
        </S.Title>
        <S.BoxRow align="center" gap={6}>
          <S.Circle />
          <S.Title>{props.language ?? 'No Language'}</S.Title>
        </S.BoxRow>
      </S.BoxRow>

      <S.Content ellipsizeMode="tail" numberOfLines={5}>
        {props.description ?? 'No Description'}
      </S.Content>

      <S.BoxRow justify="space-between">
        <S.BoxRow align="center" gap={6}>
          <S.Circle bg="#DADADA" />
          <S.Text>Created {formatDate(props.created_at)}</S.Text>
        </S.BoxRow>

        <S.BoxRow align="center" gap={6}>
          <S.Circle bg="#00FF38" />
          <S.Text>Updated {formatDate(props.updated_at)}</S.Text>
        </S.BoxRow>
      </S.BoxRow>
    </S.container>
  );
};
