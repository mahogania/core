import { QuestTemplateWhereInput } from "./QuestTemplateWhereInput";
import { QuestTemplateOrderByInput } from "./QuestTemplateOrderByInput";

export type QuestTemplateFindManyArgs = {
  where?: QuestTemplateWhereInput;
  orderBy?: Array<QuestTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
