import { StackNavigationProp } from '@react-navigation/stack';

export type IRootStackParamNav = {
  Home: undefined;
  Profile: undefined;
  Files: undefined;
};

export type INavigationProps = StackNavigationProp<IRootStackParamNav>;
