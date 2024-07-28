import React from 'react';
// React Native
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../../@types';

export function useStorage() {
  const [storeError, setStoreError] = React.useState<boolean>(false);

  const storeData = async (keyName: string, value: object | null) => {
    try {
      await AsyncStorage.setItem(keyName, JSON.stringify(value));
      setStoreError(false);
    } catch (e) {
      // console.error(e);
      setStoreError(true);
    }
  };

  const getData = async (keyName: string) => {
    try {
      const value = await AsyncStorage.getItem(keyName);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getAllKeys = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();

      return keys;
    } catch (e) {
      console.error(e);
    }
  };

  const getItem = async (keyName: string): Promise<IUser[] | null> => {
    try {
      const keys = await AsyncStorage.getItem(keyName);
      return JSON.parse(keys ?? '');
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const setItem = async (key: string, user: IUser) => {
    const currentData = await getItem(key);
    const existingUser = currentData?.find(({ id }) => id === user.id);

    if (existingUser) {
      return { status: 409, message: 'existing user', key: key };
    }

    if (currentData === null) {
      await AsyncStorage.setItem(key, JSON.stringify([user]));
    } else {
      await AsyncStorage.setItem(key, JSON.stringify([user, ...currentData]));
    }

    return { status: 200, message: 'not error', key: key };
  };

  const removeKey = async (nameKey: string) => {
    try {
      await AsyncStorage.removeItem(nameKey);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    storeData,
    getData,
    getAllKeys,
    removeKey,
    setItem,
    getItem,
    storeError,
  };
}
