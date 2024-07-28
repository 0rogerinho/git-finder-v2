import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  justify-content: flex-end;
`;

export const Overlay = styled.Pressable<{
  overlayBg?: string;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  background-color: ${({ overlayBg }) => overlayBg ?? 'transparent'};
`;

export const Box = styled.View<{
  fd?: string;
  w?: string;
  h?: string;
  jc?: string;
  ai?: string;
}>`
  flex-direction: ${({ fd }) => fd ?? 'column'};
  width: ${({ w }) => w ?? 'auto'};
  height: ${({ h }) => h ?? 'auto'};
  justify-content: ${({ jc }) => jc ?? 'start'};
  align-items: ${({ ai }) => ai ?? 'start'};
`;

export const Frame = styled.View<{ h?: string; frameBg?: string }>`
  width: 100%;
  height: ${({ h }) => h ?? '80%'};
  border-radius: 20px 20px 0px 0px;
  padding: 24px;
  background-color: ${({ frameBg }) => frameBg ?? '#333333'};
`;

export const ButtonIcon = styled.Button<{ h?: string }>``;

export const Text = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
