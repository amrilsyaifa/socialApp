import React, {useEffect, useState} from 'react';
import {SafeAreaView, ActivityIndicator, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {IFeed} from './interface';
import dummyFeedData from '../../../data/feed-temporaries.json';
import {FeedScreenNavigationProp} from '../../navigations/types';
import ItemFeed from './ItemFeed';

const FeedScreen = () => {
  const navigation = useNavigation<FeedScreenNavigationProp>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [feeds, setFeeds] = useState<IFeed[]>([]);

  useEffect(() => {
    setIsLoading(true);
    // create loading indicator
    let timer = setTimeout(() => {
      setFeeds(dummyFeedData.feeds);
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onUpVote = (id: number) => {
    const newFeed = [...feeds];
    const idx = newFeed.findIndex(x => x.id === id);
    const upVoteLast = newFeed[idx].total_up_vote ?? 0;
    newFeed[idx].total_up_vote = upVoteLast + 1;
    setFeeds(newFeed);
  };

  const onDownVote = (id: number) => {
    const newFeed = [...feeds];
    const idx = newFeed.findIndex(x => x.id === id);
    const downVoteLast = newFeed[idx].total_down_vote ?? 0;
    if (downVoteLast > 0) {
      newFeed[idx].total_down_vote = downVoteLast - 1;
      setFeeds(newFeed);
    }
  };

  const onReturn = (data: IFeed) => {
    const newFeed = [...feeds];
    const idx = newFeed.findIndex(x => x.id === data.id);
    newFeed[idx] = data;
    setFeeds(newFeed);
  };

  return (
    <SafeAreaView>
      {isLoading && <ActivityIndicator size="large" />}
      <FlatList
        data={feeds}
        renderItem={({item}) => (
          <ItemFeed
            feed={item}
            onPress={() =>
              navigation.navigate('PostDetail', {
                feed: item,
                onReturn: (feed: IFeed) => onReturn(feed),
              })
            }
            onDownVote={onDownVote}
            onUpVote={onUpVote}
          />
        )}
        keyExtractor={feed => feed.id.toString()}
      />
    </SafeAreaView>
  );
};

export default FeedScreen;
