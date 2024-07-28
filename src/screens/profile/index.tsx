// React Navigation
import { useNavigation } from '@react-navigation/native';
// Components
import { ProfileBox } from '../../components';
// Types
import { INavigationProps } from '../../@types/navigation';
// Style
import * as S from './style';

export const Profile = () => {
  const navigation = useNavigation<INavigationProps>();

  return (
    <S.Container>
      <ProfileBox />
      <S.Button onPress={() => navigation.navigate('Home')}>
        <S.TitleBUtton>Return</S.TitleBUtton>
      </S.Button>
    </S.Container>
  );
};
