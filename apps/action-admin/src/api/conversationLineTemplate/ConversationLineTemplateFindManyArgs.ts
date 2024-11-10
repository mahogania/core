import { ConversationLineTemplateWhereInput } from "./ConversationLineTemplateWhereInput";
import { ConversationLineTemplateOrderByInput } from "./ConversationLineTemplateOrderByInput";

export type ConversationLineTemplateFindManyArgs = {
  where?: ConversationLineTemplateWhereInput;
  orderBy?: Array<ConversationLineTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
