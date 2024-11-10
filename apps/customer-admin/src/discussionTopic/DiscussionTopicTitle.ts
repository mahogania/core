import { DiscussionTopic as TDiscussionTopic } from "../api/discussionTopic/DiscussionTopic";

export const DISCUSSIONTOPIC_TITLE_FIELD = "referenceDocname";

export const DiscussionTopicTitle = (record: TDiscussionTopic): string => {
  return record.referenceDocname?.toString() || String(record.id);
};
