import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "referenceName";

export const CommentTitle = (record: TComment): string => {
  return record.referenceName?.toString() || String(record.id);
};
