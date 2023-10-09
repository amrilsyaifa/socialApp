import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IFeed} from '../screens/FeedScreen/interface';
import {RouteProp} from '@react-navigation/native';

export type FeedStackNavigatorParamList = {
  Feed: IFeed;
  PostDetail: {
    feed: IFeed;
    onReturn: (item: IFeed) => void;
  };
};

export type FeedScreenNavigationProp = NativeStackNavigationProp<
  FeedStackNavigatorParamList,
  'PostDetail'
>;

export type PostDetailsScreenRouteProp = RouteProp<
  FeedStackNavigatorParamList,
  'PostDetail'
>;
