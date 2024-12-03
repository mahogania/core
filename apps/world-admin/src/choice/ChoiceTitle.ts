import { Choice as TChoice } from "../api/choice/Choice";

export const CHOICE_TITLE_FIELD = "name";

export const ChoiceTitle = (record: TChoice): string => {
  return record.name?.toString() || String(record.id);
};
