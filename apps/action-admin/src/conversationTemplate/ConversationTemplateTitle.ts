import { ConversationTemplate as TConversationTemplate } from "../api/conversationTemplate/ConversationTemplate";

export const CONVERSATIONTEMPLATE_TITLE_FIELD = "scriptName";

export const ConversationTemplateTitle = (
  record: TConversationTemplate
): string => {
  return record.scriptName?.toString() || String(record.id);
};
