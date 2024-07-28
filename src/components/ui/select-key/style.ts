import styled from 'styled-components/native';
// React Native
import { Dimensions } from 'react-native';
import { color } from '../../../utils';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 14px;
  border-radius: 6px;
  background-color: rgba(20, 29, 47, 0.5);
`;

export const ButtonBackground = styled.Pressable`
  position: absolute;
  width: ${`${width}px`};
  height: ${`${height}px`};
`;

export const Box = styled.View`
  height: 500px;
  justify-content: center;
  align-items: center;
`;

export const BoxRow = styled.View`
  gap: 12px;
  padding: 10px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.Pressable<{
  m?: string;
  r?: string;
  w?: string;
  h?: string;
  bg?: string;
  p?: string;
  fd?: string;
  jc?: string;
  ai?: string;
}>`
  margin: ${({ m }) => m ?? '0px 0px'};
  width: ${({ w }) => w ?? '100%'};
  height: ${({ h }) => h ?? 'auto'};
  background-color: ${({ bg }) => bg};
  padding: ${({ p }) => p ?? '0px 0px'};
  flex-direction: row;
  border-radius: ${({ r }) => r ?? '0px'};
  justify-content: ${({ jc }) => jc ?? 'space-between'};
  align-items: ${({ ai }) => ai ?? 'center'};
`;

export const Text = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
`;

export const TextItem = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
`;

export const ErrorMessage = styled.Text`
  position: absolute;
  right: 35px;
  color: #ff6464;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 21px;
`;
