import React, { useEffect } from 'react';
// React Naitve
import { Linking, Modal, ScrollView } from 'react-native';
// Hooks
import { useIsSearch, useKeys, useStorage, useUser } from '../../hooks';
// Utils
import { color } from '../../utils';
// Ui
import { Confirm, RepositoryCard, SelectKey } from '../ui';
// expo icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// Style
import * as S from './style';
import { SheetModal } from '../ui/sheet-modal';

interface IRepo {
  repoName: string;
  linkRepo: string;
}

export interface ISelectErrror {
  key: string;
  error: string;
}

export const ProfileBox = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  const [selectError, setSelectError] = React.useState<ISelectErrror | null>(
    null,
  );
  const [modalRepo, setModalRepo] = React.useState<IRepo>({
    repoName: 'My-first-job',
    linkRepo: '',
  });

  const { user } = useUser();
  const { isSearch } = useIsSearch();
  const { setItem } = useStorage();
  const { keys } = useKeys();

  function handleRepo({ repoName, linkRepo }: IRepo) {
    setShowModal(true);
    setModalRepo({ linkRepo, repoName });
  }

  async function handleSave(value: string) {
    if (user) {
      const itemResponse = await setItem(value, user);

      if (itemResponse.status !== 200) {
        return setSelectError({ key: value, error: 'existing user' });
      }
    }
    return setShowOptions(false);
  }

  function handleCloseSelect() {
    setShowOptions(false);
    setSelectError(null);
  }

  return (
    <S.Container>
      <S.ContainerUser>
        <S.BoxRow width="100%" justify="space-between">
          <S.BoxRow gap={4}>
            <S.Title>User:</S.Title>
            <S.TextUser>{user?.id}</S.TextUser>
          </S.BoxRow>

          <S.Button onPress={() => setShowOptions(true)}>
            {isSearch ? (
              <MaterialIcons name="data-saver-on" size={24} color="#00FF38" />
            ) : (
              <Feather name="more-vertical" size={24} color="white" />
            )}
          </S.Button>
        </S.BoxRow>
      </S.ContainerUser>

      <S.ContainerProfile>
        <S.ContainerInfoProfile gap={10}>
          <S.Avatar source={{ uri: user?.avatar_url }} />
          <S.Name ellipsizeMode="tail" numberOfLines={2}>
            {user?.name}
          </S.Name>

          <S.BoxColumn align="start" justify="start" gap={3}>
            <S.TextLogin>@{user?.login}</S.TextLogin>

            <S.BoxLocation>
              <Entypo name="location-pin" size={20} color="white" />
              <S.TextLocation ellipsizeMode="tail" numberOfLines={1}>
                {user?.location ?? 'No location'}
              </S.TextLocation>
            </S.BoxLocation>
          </S.BoxColumn>
        </S.ContainerInfoProfile>

        <S.ContainerLevel>
          <S.BoxColumn>
            <S.LevelTitle>Repositories</S.LevelTitle>
            <S.LevelText>{user?.public_repos}</S.LevelText>
          </S.BoxColumn>

          <S.BoxColumn>
            <S.LevelTitle>Followers </S.LevelTitle>
            <S.LevelText>{user?.followers}</S.LevelText>
          </S.BoxColumn>

          <S.BoxColumn>
            <S.LevelTitle>Following</S.LevelTitle>
            <S.LevelText>{user?.following}</S.LevelText>
          </S.BoxColumn>
        </S.ContainerLevel>

        <S.ContainerRepositories>
          <S.BoxRow width="100%" gap={8} align="start" justify="start">
            <FontAwesome name="book" size={20} color={color.primary} />
            <S.TitleRepositories>Repositories</S.TitleRepositories>
          </S.BoxRow>

          <ScrollView bounces={false} style={{ width: '100%' }}>
            <S.BoxColumn gap={14}>
              {user?.repos.map((data) => (
                <S.Button
                  width="100%"
                  key={data.name}
                  onPress={() =>
                    handleRepo({ repoName: data.name, linkRepo: data.html_url })
                  }
                >
                  <RepositoryCard
                    Title={data.name}
                    language={data.language}
                    description={data.description}
                    created_at={data.created_at}
                    updated_at={data.updated_at}
                  />
                </S.Button>
              ))}
            </S.BoxColumn>
          </ScrollView>
        </S.ContainerRepositories>
      </S.ContainerProfile>

      <Modal visible={showModal} transparent>
        <Confirm
          title="Access the repository"
          text={modalRepo.repoName}
          buttonYes={() => Linking.openURL(modalRepo.linkRepo)}
          buttonNo={() => setShowModal(false)}
        />
      </Modal>

      <SelectKey
        open={showOptions}
        setOpen={() => setShowOptions(!showOptions)}
        dataItems={keys}
        onSelect={(value) => handleSave(value)}
        onClose={() => handleCloseSelect()}
        error={selectError}
      />
    </S.Container>
  );
};
