import styled from 'styled-components/native';
import { color } from '../../utils';

export const Container = styled.View`
  flex: 1;
  padding: 18px 10px;
  gap: 8px;
`;

export const ContainerUser = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

export const ContainerProfile = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${color['background-second']};
  border-radius: 10px;
  padding: 13px 20px;
  gap: 10px;
`;

export const ContainerInfoProfile = styled.View<{ gap?: number }>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ gap }) => gap?.toString() + 'px' || '0px'};
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

export const BoxLocation = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const ContainerLevel = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 8px;
  justify-content: space-around;
  padding: 14px 20px;
  border-radius: 6px;
  background-color: ${color['background-primary']};
`;

export const ContainerRepositories = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  gap: 10px;
  align-items: center;
`;

export const BoxRow = styled.View<{
  gap?: number;
  justify?: string;
  align?: string;
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  flex-direction: row;
  justify-content: ${({ justify }) => (justify ? justify.toString() : 'start')};
  align-items: ${({ align }) => (align ? align.toString() : 'center')};
  gap: ${({ gap }) => (gap ? gap.toString() + 'px' : '0px')};
`;

export const Button = styled.Pressable<{ width?: string }>`
  width: ${({ width }) => width ?? 'auto'};
`;

export const TitleRepositories = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

export const TextUser = styled.Text`
  font-size: 16px;
  color: white;
`;

export const TextLogin = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${color.primary};
`;

export const TextLocation = styled.Text`
  width: 80px;
  font-size: 12px;
  color: white;
`;

export const LevelTitle = styled.Text`
  font-size: 10px;
  font-weight: 700;
  color: white;
`;

export const LevelText = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: white;
`;

export const Name = styled.Text`
  max-width: 100px;
  font-size: 15px;
  font-weight: 600;
  color: white;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 100px;
`;
