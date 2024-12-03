import { ConversationLineTemplate as TConversationLineTemplate } from "../api/conversationLineTemplate/ConversationLineTemplate";

export const CONVERSATIONLINETEMPLATE_TITLE_FIELD = "id";

export const ConversationLineTemplateTitle = (
  record: TConversationLineTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
