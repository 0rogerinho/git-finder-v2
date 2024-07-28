import styled from 'styled-components/native';
import { color } from '../../utils';

export const Container = styled.View`
  flex: 1;
  padding: 4px 4px 10px 4px;
  background-color: ${color['background-primary']};
`;

export const Button = styled.Pressable`
  margin: auto;
  width: 80%;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 6px 6px;
  background-color: ${color['primary']};
`;

export const TitleBUtton = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 700;
  color: white;
`;
