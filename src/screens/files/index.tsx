import React from 'react';
// React Native
import { ScrollView } from 'react-native-gesture-handler';
// React Navigate
import { useNavigation } from '@react-navigation/native';
// Hooks
import { useStorage, useKeys } from '../../hooks';
// Components
import { ProfileCard } from '../../components';
// Expo icons
import { MaterialIcons } from '@expo/vector-icons';
// Types
import { INavigationProps, IUser } from '../../@types';
// Style
import * as S from './style';

export const Files = () => {
  const [data, setData] = React.useState<IUser[] | null>(null);

  const { keys } = useKeys();
  const { getItem } = useStorage();
  const navigation = useNavigation<INavigationProps>();

  React.useEffect(() => {
    async function handleGetData() {
      const currentData = await getItem(keys[0]);
      setData(currentData);
    }
    handleGetData();
  }, []);

  return (
    <S.Container>
      <S.BoxRow justify="space-between">
        <S.button onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </S.button>
        <S.Title>{keys[0]}</S.Title>
      </S.BoxRow>
      <ScrollView>
        {data?.map((data) => (
          <ProfileCard key={data.id} data={data} />
        ))}
      </ScrollView>
    </S.Container>
  );
};
