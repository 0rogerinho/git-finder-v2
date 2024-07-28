import styled from 'styled-components/native';
import { color } from '../../../utils';

export const container = styled.View`
  width: 100%;
  gap: 10px;
  padding: 11px;
  border-radius: 6px;
  background-color: ${color['background-primary']};
`;

export const BoxRow = styled.View<{
  gap?: number;
  justify?: string;
  align?: string;
}>`
  flex-direction: row;
  align-items: ${({ align }) => align ?? 'start'};
  justify-content: ${({ justify }) => justify ?? 'start'};
`;

export const BoxColumn = styled.View<{
  gap?: number;
  justify?: string;
  align?: string;
}>`
  flex: 1;
  align-items: ${({ align }) => align ?? 'start'};
  justify-content: ${({ justify }) => justify ?? 'start'};
  background-color: ${color['background-primary']};
`;

export const Circle = styled.View<{ bg?: string }>`
  width: 8px;
  height: 8px;
  border-radius: 500px;
  background-color: ${({ bg }) => bg ?? color.primary};
`;

export const Title = styled.Text<{ width?: number }>`
  width: ${({ width }) => width?.toString() + 'px' || 'auto'};
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

export const Content = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: #dee7ff;
`;

export const Text = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
`;
