import React from 'react';
// React Native
import { ActivityIndicator } from 'react-native';
// React Navigate
import { useNavigation } from '@react-navigation/native';
// Services
import { getRepoUser, getUser } from '../../services';
// Hookes
import { useUser } from '../../hooks';
// Expo icons
import { Feather } from '@expo/vector-icons';
// Types
import { INavigationProps } from '../../@types';
// Style
import * as S from './style';
import { useIsSearch } from '../../hooks/useIsSearch';

export const Search = () => {
  const [value, setValue] = React.useState<string>('');
  const [load, setLoad] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const { setUser } = useUser();
  const { setIsSearch } = useIsSearch();
  const navigation = useNavigation<INavigationProps>();

  async function handleSearch() {
    setLoad(true);
    try {
      const searchUser = await getUser(value);
      const searchRepoUser = await getRepoUser(searchUser.repos_url);
      const newUser = { ...searchUser, repos: searchRepoUser };
      setUser(newUser);
      setIsSearch(true);
      navigation.navigate('Profile');
    } finally {
      setLoad(false);
    }
  }

  return (
    <S.Container>
      <S.Box>
        <Feather
          style={{ position: 'absolute', left: 0 }}
          name="search"
          size={30}
          color="white"
        />
        <S.TextInput
          value={value}
          onChangeText={setValue}
          placeholder="Search Username..."
          placeholderTextColor="#BBC3D8"
        />
      </S.Box>

      <S.Button onPress={handleSearch}>
        <S.TextButton>
          {load ? <ActivityIndicator size="small" /> : 'SEND'}
        </S.TextButton>
      </S.Button>
    </S.Container>
  );
};
