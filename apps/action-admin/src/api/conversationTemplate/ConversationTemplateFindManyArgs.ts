import { ConversationTemplateWhereInput } from "./ConversationTemplateWhereInput";
import { ConversationTemplateOrderByInput } from "./ConversationTemplateOrderByInput";

export type ConversationTemplateFindManyArgs = {
  where?: ConversationTemplateWhereInput;
  orderBy?: Array<ConversationTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
