import { DiscussionReplyWhereInput } from "./DiscussionReplyWhereInput";
import { DiscussionReplyOrderByInput } from "./DiscussionReplyOrderByInput";

export type DiscussionReplyFindManyArgs = {
  where?: DiscussionReplyWhereInput;
  orderBy?: Array<DiscussionReplyOrderByInput>;
  skip?: number;
  take?: number;
};
