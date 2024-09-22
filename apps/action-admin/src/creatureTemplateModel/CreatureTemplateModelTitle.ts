import { CreatureTemplateModel as TCreatureTemplateModel } from "../api/creatureTemplateModel/CreatureTemplateModel";

export const CREATURETEMPLATEMODEL_TITLE_FIELD = "id";

export const CreatureTemplateModelTitle = (
  record: TCreatureTemplateModel
): string => {
  return record.id?.toString() || String(record.id);
};
