import styled from 'styled-components/native';
import { color } from '../../../utils';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.Pressable`
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding: 18px 21px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${color['background-second']};
  border-radius: 10px;
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

export const Text = styled.Text`
  font-size: 10px;
  max-width: 81px;
  color: white;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

export const Name = styled.Text`
  max-width: 88px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0px;
  color: white;
`;

export const Login = styled.Text`
  font-size: 10px;
  max-width: 120px;
  font-weight: 600;
  color: ${color.primary};
`;
