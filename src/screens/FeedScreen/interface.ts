interface IProfile {
  avatar: string;
  name: string;
}

interface Comment {
  profile: IProfile;
  description: string;
}

export interface IFeed {
  id: number;
  profile: IProfile;
  created_at: string;
  images: string[];
  description: string;
  comments: Comment[];
  total_down_vote?: number;
  total_up_vote?: number;
}

export type ItemProps = {
  feed: IFeed;
  onPress: () => void;
  onUpVote: (id: number) => void;
  onDownVote: (id: number) => void;
};
