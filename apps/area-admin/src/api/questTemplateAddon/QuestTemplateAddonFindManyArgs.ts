import { QuestTemplateAddonWhereInput } from "./QuestTemplateAddonWhereInput";
import { QuestTemplateAddonOrderByInput } from "./QuestTemplateAddonOrderByInput";

export type QuestTemplateAddonFindManyArgs = {
  where?: QuestTemplateAddonWhereInput;
  orderBy?: Array<QuestTemplateAddonOrderByInput>;
  skip?: number;
  take?: number;
};
