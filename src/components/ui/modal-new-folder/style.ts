import styled from 'styled-components/native';
import { color } from '../../../utils';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 15px;
  gap: 20px;
`;

export const BoxColumn = styled.View<{
  gap?: number;
  justify?: string;
  align?: string;
}>`
  justify-content: ${({ justify }) => (justify ? justify.toString() : 'start')};
  align-items: ${({ align }) => (align ? align.toString() : 'center')};
  gap: ${({ gap }) => (gap ? gap.toString() + 'px' : '0px')};
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

export const ContainerModal = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 14px;
  border-radius: 6px;
  background-color: rgba(20, 29, 47, 0.5);
`;

export const box = styled.View``;

export const boxModal = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 17px;
  border-radius: 10px;
  background-color: ${color['background-second']};
`;

export const Button = styled.Pressable``;

export const ButtonConf = styled.Pressable<{ bg?: string }>`
  width: 54px;
  height: 35px;
  border-radius: 4px;
  background-color: ${({ bg }) => bg ?? 'red'};
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 35px;
  padding: 0px 10px;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

export const TitleModal = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

export const FolderTitle = styled.Text`
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: white;
`;

export const TextButton = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: white;
`;
