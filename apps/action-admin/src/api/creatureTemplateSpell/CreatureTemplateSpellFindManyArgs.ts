import { CreatureTemplateSpellWhereInput } from "./CreatureTemplateSpellWhereInput";
import { CreatureTemplateSpellOrderByInput } from "./CreatureTemplateSpellOrderByInput";

export type CreatureTemplateSpellFindManyArgs = {
  where?: CreatureTemplateSpellWhereInput;
  orderBy?: Array<CreatureTemplateSpellOrderByInput>;
  skip?: number;
  take?: number;
};
