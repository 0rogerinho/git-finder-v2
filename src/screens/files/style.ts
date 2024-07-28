import styled from 'styled-components/native';
import { color } from '../../utils';

export const Container = styled.View`
  flex: 1;
  padding: 20px 10px;
  gap: 10px;
  background-color: ${color['background-primary']};
`;

export const BoxRow = styled.View<{
  gap?: number;
  justify?: string;
  align?: string;
}>`
  flex-direction: row;
  justify-content: ${({ justify }) => (justify ? justify.toString() : 'start')};
  align-items: ${({ align }) => (align ? align.toString() : 'center')};
  gap: ${({ gap }) => (gap ? gap.toString() + 'px' : '0px')};
`;

export const button = styled.Pressable``;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.5px;
`;
