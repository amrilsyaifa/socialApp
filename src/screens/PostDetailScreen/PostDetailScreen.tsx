import React, {useState, useEffect} from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import IconBack from '../../../assets/back.png';
import IconBlock from '../../../assets/block.png';
import IconComment from '../../../assets/comment.png';
import IconDownvoteInactive from '../../../assets/downvote_inactive.png';
import IconShare from '../../../assets/share.png';
import IconUpvoteInactive from '../../../assets/upvote_inactive.png';
import {PostDetailsScreenRouteProp} from '../../navigations/types';
import {IFeed} from '../FeedScreen/interface';

function PostDetailScreen() {
  const navigation = useNavigation();

  const route = useRoute<PostDetailsScreenRouteProp>();
  const dataParams = route.params;

  const [feeds, setFeeds] = useState<IFeed | null>(null);
  const [comment, setComment] = useState<string>('');

  useEffect(() => {
    setFeeds(dataParams.feed);
  }, [dataParams]);

  const onUpVote = () => {
    if (feeds) {
      const upVoteLast = feeds?.total_up_vote ?? 0;
      setFeeds({...feeds, total_up_vote: upVoteLast + 1});
    }
  };

  const onDownVote = () => {
    if (feeds) {
      const downVoteLast = feeds?.total_down_vote ?? 0;
      if (downVoteLast > 0) {
        setFeeds({...feeds, total_down_vote: downVoteLast - 1});
      }
    }
  };

  const onSetComment = () => {
    if (feeds && comment) {
      const profile = feeds.profile;
      const comments = [...feeds.comments, {profile, description: comment}];
      setFeeds({...feeds, comments});
      setComment('');
    }
  };

  const onBack = () => {
    if (feeds) {
      route.params.onReturn(feeds);
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {feeds && (
        <ScrollView style={styles.container}>
          <View>
            <View style={styles.header}>
              <Pressable onPress={onBack}>
                <Image
                  source={IconBack}
                  height={18}
                  width={18}
                  style={styles.iconSpaceLeft22}
                />
              </Pressable>
              <Image
                source={{
                  uri: feeds?.profile.avatar,
                }}
                width={48}
                height={48}
                style={styles.avatar}
              />
              <View style={styles.marginTextProfileName}>
                <Text style={styles.textFullName}>{feeds?.profile.name}</Text>
                <Text style={styles.textCreated}>{feeds?.created_at}</Text>
              </View>
            </View>
            <View style={styles.separator} />
            <View>
              <Text style={styles.description}>{feeds?.description}</Text>
              {/* Should use image slider, but now i create static image only 1 */}
              <Image
                source={{
                  uri: feeds?.images[0],
                }}
                height={200}
              />
            </View>
            <View style={styles.footer}>
              <View style={styles.containerLeftIcon}>
                <Image
                  source={IconShare}
                  height={18}
                  width={18}
                  style={styles.iconSpaceLeft22}
                />
                <Image
                  source={IconComment}
                  height={18}
                  width={18}
                  style={styles.iconSpaceLeft24}
                />
                <Text style={styles.textTotal}>{feeds?.comments?.length}</Text>
              </View>
              <View style={styles.containerRightIcon}>
                <Image
                  source={IconBlock}
                  height={18}
                  width={18}
                  style={styles.iconSpaceLeft22}
                />
                <Pressable onPress={onDownVote}>
                  <Image
                    source={IconDownvoteInactive}
                    height={18}
                    width={18}
                    style={styles.iconSpaceLeft24}
                  />
                </Pressable>
                <Text style={styles.textTotalRight}>
                  {feeds?.total_down_vote}
                </Text>
                <Pressable onPress={onUpVote}>
                  <Image
                    source={IconUpvoteInactive}
                    height={18}
                    width={18}
                    style={styles.iconSpaceLeft22}
                  />
                </Pressable>
                <Text style={styles.textTotalRight}>
                  {feeds?.total_up_vote}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.spacerBottom} />
          {feeds?.comments?.map(cmt => (
            <>
              <View style={styles.containerListDesc}>
                <Image
                  source={{
                    uri: cmt.profile.avatar,
                  }}
                  style={styles.smallAvatar}
                />
                <View style={styles.wrapperProfile}>
                  <Text style={styles.profileName}>{cmt.profile.name}</Text>
                  <Text style={styles.desc}>{cmt.description}</Text>
                </View>
              </View>
              <View style={styles.separator} />
            </>
          ))}
        </ScrollView>
      )}
      <View style={styles.containerInput}>
        <View style={styles.separator} />
        <TextInput
          placeholder="Enter Comment"
          value={comment}
          style={styles.textInput}
          onChangeText={setComment}
        />
        <Button title="Comment" onPress={onSetComment} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {flex: 1},
  container: {marginBottom: 78},
  header: {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconSpaceLeft22: {marginLeft: 22},
  iconSpaceLeft24: {marginLeft: 24},
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft: 24,
  },
  marginTextProfileName: {
    marginLeft: 16,
  },
  textFullName: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16.94,
  },
  textCreated: {fontWeight: '400', fontSize: 12, lineHeight: 18},
  separator: {height: 0.5, backgroundColor: '#C4C4C4'},
  description: {margin: 24},
  footer: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerLeftIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textTotal: {
    width: 24,
    marginHorizontal: 4,
    textAlign: 'center',
  },
  containerRightIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTotalRight: {
    width: 24,
    marginHorizontal: 11,
    textAlign: 'center',
  },
  spacerBottom: {
    height: 4,
    backgroundColor: '#C4C4C4',
  },
  containerInput: {
    position: 'absolute',
    bottom: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    zIndex: 10,
  },
  textInput: {flex: 1},
  containerListDesc: {
    flexDirection: 'row',
    minHeight: 72,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  smallAvatar: {
    borderRadius: 24,
    marginRight: 16,
    height: 36,
    width: 36,
  },
  wrapperProfile: {width: '90%'},
  profileName: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 14.52,
    color: '#828282',
  },
  desc: {fontWeight: '400', fontSize: 16, lineHeight: 19.36},
});

export default PostDetailScreen;
