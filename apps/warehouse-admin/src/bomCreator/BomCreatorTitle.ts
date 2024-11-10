import { BomCreator as TBomCreator } from "../api/bomCreator/BomCreator";

export const BOMCREATOR_TITLE_FIELD = "itemName";

export const BomCreatorTitle = (record: TBomCreator): string => {
  return record.itemName?.toString() || String(record.id);
};
