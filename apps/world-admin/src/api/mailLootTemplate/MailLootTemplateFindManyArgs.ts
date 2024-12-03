import { MailLootTemplateWhereInput } from "./MailLootTemplateWhereInput";
import { MailLootTemplateOrderByInput } from "./MailLootTemplateOrderByInput";

export type MailLootTemplateFindManyArgs = {
  where?: MailLootTemplateWhereInput;
  orderBy?: Array<MailLootTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
