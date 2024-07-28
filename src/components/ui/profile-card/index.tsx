import React from 'react';
// React Navigate
import { useNavigation } from '@react-navigation/native';
// Hooks
import { useIsSearch, useUser } from '../../../hooks';
// Expo icons
import { FontAwesome6 } from '@expo/vector-icons';
// Types
import { INavigationProps, IUser } from '../../../@types';
// Style
import * as S from './style';

interface IProfileCard {
  data: IUser;
}

export const ProfileCard = ({ data }: IProfileCard) => {
  const { setUser } = useUser();
  const { setIsSearch } = useIsSearch();

  const navigation = useNavigation<INavigationProps>();

  function handlePress() {
    setUser(data);
    setIsSearch(false);
    navigation.navigate('Profile');
  }

  return (
    <S.Container onPress={handlePress}>
      <S.Avatar source={{ uri: data.avatar_url }} />
      <S.Name ellipsizeMode="tail" numberOfLines={2}>
        {data.name}
      </S.Name>
      <S.Login ellipsizeMode="tail" numberOfLines={1}>
        @{data.login}
      </S.Login>

      <S.Box>
        <FontAwesome6 name="location-dot" size={15} color="white" />
        <S.Text>{data.location ?? 'No Location'}</S.Text>
      </S.Box>
    </S.Container>
  );
};
