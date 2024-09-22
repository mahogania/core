import { ConversationActors as TConversationActors } from "../api/conversationActors/ConversationActors";

export const CONVERSATIONACTORS_TITLE_FIELD = "id";

export const ConversationActorsTitle = (
  record: TConversationActors
): string => {
  return record.id?.toString() || String(record.id);
};
