import styled from 'styled-components/native';
import { color } from '../../utils';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: 60px;
  margin-top: 26px;
  padding: 7px 10px;
  gap: 14px;
  flex-direction: row;
  background-color: ${color['background-second']};
  border-radius: 10px;
`;

export const Box = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  color: white;
  margin-left: ${Number(width) < 340 ? '60px' : '45px'};
`;

export const Title = styled.Text`
  color: white;
`;

export const P = styled.Text`
  color: white;
`;

export const Button = styled.Pressable`
  width: 90px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${color.primary};
`;

export const TextButton = styled.Text`
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: white;
`;
