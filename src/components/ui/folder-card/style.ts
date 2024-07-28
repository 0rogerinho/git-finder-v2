import styled from 'styled-components/native';

export const BoxRow = styled.View<{
  gap?: number;
  justify?: string;
  align?: string;
}>`
  padding: 6px 0px;
  flex-direction: row;
  justify-content: ${({ justify }) => (justify ? justify.toString() : 'start')};
  align-items: ${({ align }) => (align ? align.toString() : 'center')};
  gap: ${({ gap }) => (gap ? gap.toString() + 'px' : '0px')};
`;
export const ButtonBox = styled.Pressable`
  flex: 1;
`;

export const Button = styled.Pressable``;

export const Title = styled.Text`
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: white;
`;
