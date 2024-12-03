import { BattlePetQuality as TBattlePetQuality } from "../api/battlePetQuality/BattlePetQuality";

export const BATTLEPETQUALITY_TITLE_FIELD = "id";

export const BattlePetQualityTitle = (record: TBattlePetQuality): string => {
  return record.id?.toString() || String(record.id);
};
