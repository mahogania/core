import { Trait as TTrait } from "../api/trait/Trait";

export const TRAIT_TITLE_FIELD = "id";

export const TraitTitle = (record: TTrait): string => {
  return record.id?.toString() || String(record.id);
};
