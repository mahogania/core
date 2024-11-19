import { CreatureTemplateWhereInput } from "./CreatureTemplateWhereInput";
import { CreatureTemplateOrderByInput } from "./CreatureTemplateOrderByInput";

export type CreatureTemplateFindManyArgs = {
  where?: CreatureTemplateWhereInput;
  orderBy?: Array<CreatureTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
