import { QuestPoolTemplateWhereInput } from "./QuestPoolTemplateWhereInput";
import { QuestPoolTemplateOrderByInput } from "./QuestPoolTemplateOrderByInput";

export type QuestPoolTemplateFindManyArgs = {
  where?: QuestPoolTemplateWhereInput;
  orderBy?: Array<QuestPoolTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
