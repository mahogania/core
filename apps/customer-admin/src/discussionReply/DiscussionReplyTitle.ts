import { DiscussionReply as TDiscussionReply } from "../api/discussionReply/DiscussionReply";

export const DISCUSSIONREPLY_TITLE_FIELD = "modifiedBy";

export const DiscussionReplyTitle = (record: TDiscussionReply): string => {
  return record.modifiedBy?.toString() || String(record.id);
};
