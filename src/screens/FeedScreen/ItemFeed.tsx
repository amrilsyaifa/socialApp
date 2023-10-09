import React, {useState} from 'react';
import {Image, Pressable, Text, View, StyleSheet} from 'react-native';

import IconBlock from '../../../assets/block.png';
import IconComment from '../../../assets/comment.png';
import IconDownvoteInactive from '../../../assets/downvote_inactive.png';
import IconShare from '../../../assets/share.png';
import IconUpvoteInactive from '../../../assets/upvote_inactive.png';
import {ItemProps} from './interface';

const NUM_OF_LINES = 3;

const ItemFeed = ({feed, onPress, onUpVote, onDownVote}: ItemProps) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  return (
    <Pressable key={feed.id} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: feed.profile.avatar,
            }}
            style={styles.avatar}
          />
          <View style={styles.marginTextProfileName}>
            <Text style={styles.textFullName}>{feed.profile.name}</Text>
            <Text style={styles.textCreated}>{feed.created_at}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View>
          <Text
            numberOfLines={NUM_OF_LINES}
            ellipsizeMode="tail"
            style={[
              styles.description,
              !isShowMore ? styles.marginBottomDesc : null,
            ]}
            onTextLayout={({nativeEvent: {lines}}) => {
              setIsShowMore(lines.length > NUM_OF_LINES);
            }}>
            {feed.description}
          </Text>
          {isShowMore && <Text style={styles.more}>More</Text>}
          {/* Should use image slider, but now i create static image only 1 */}
          <Image
            source={{
              uri: feed.images[0],
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
            <Text style={styles.textTotal}>{feed?.comments?.length}</Text>
          </View>
          <View style={styles.containerRightIcon}>
            <Image
              source={IconBlock}
              height={18}
              width={18}
              style={styles.iconSpaceLeft22}
            />
            <Pressable onPress={() => onDownVote(feed.id)}>
              <Image
                source={IconDownvoteInactive}
                height={18}
                width={18}
                style={styles.iconSpaceLeft24}
              />
            </Pressable>
            <Text style={styles.textTotalRight}>{feed?.total_down_vote}</Text>
            <Pressable onPress={() => onUpVote(feed.id)}>
              <Image
                source={IconUpvoteInactive}
                height={18}
                width={18}
                style={styles.iconSpaceLeft22}
              />
            </Pressable>
            <Text style={styles.textTotal}>{feed?.total_up_vote}</Text>
          </View>
        </View>
      </View>
      <View style={styles.spacerBottom} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 547,
  },
  header: {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
  },
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
  description: {marginLeft: 24, marginTop: 24, marginRight: 24},
  marginBottomDesc: {marginBottom: 24},
  more: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    color: 'blue',
  },
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
  iconSpaceLeft22: {marginLeft: 22},
  iconSpaceLeft24: {marginLeft: 24},
  textTotal: {
    width: 24,
    marginHorizontal: 4,
    textAlign: 'center',
  },
  containerRightIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacerBottom: {
    height: 4,
    backgroundColor: '#C4C4C4',
  },
  textTotalRight: {
    width: 24,
    marginHorizontal: 11,
    textAlign: 'center',
  },
});

export default ItemFeed;
