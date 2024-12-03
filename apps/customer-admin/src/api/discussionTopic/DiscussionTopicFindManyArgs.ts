import { DiscussionTopicWhereInput } from "./DiscussionTopicWhereInput";
import { DiscussionTopicOrderByInput } from "./DiscussionTopicOrderByInput";

export type DiscussionTopicFindManyArgs = {
  where?: DiscussionTopicWhereInput;
  orderBy?: Array<DiscussionTopicOrderByInput>;
  skip?: number;
  take?: number;
};
