import React from 'react';
// Components
import { FoldersBox, Search } from '../../components';
// Style
import * as S from './style';

export const Home = () => {
  return (
    <S.Container>
      <Search />
      <FoldersBox />
    </S.Container>
  );
};
