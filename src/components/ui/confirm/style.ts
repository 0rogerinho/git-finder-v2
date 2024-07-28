import styled from 'styled-components/native';
import { color } from '../../../utils';

export const container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 14px;
  border-radius: 6px;
  background-color: rgba(20, 29, 47, 0.5);
`;

export const Box = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  padding: 17px;
  border-radius: 10px;
  background-color: ${color['background-second']};
`;

export const BoxRow = styled.View`
  width: 50%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.Pressable<{ bg?: string }>`
  width: 54px;
  height: 35px;
  border-radius: 4px;
  background-color: ${({ bg }) => bg ?? 'red'};
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const TextButton = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: white;
`;

export const Title = styled.Text`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 700;
  color: white;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
`;
