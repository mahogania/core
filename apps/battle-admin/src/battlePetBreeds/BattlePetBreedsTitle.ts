import { BattlePetBreeds as TBattlePetBreeds } from "../api/battlePetBreeds/BattlePetBreeds";

export const BATTLEPETBREEDS_TITLE_FIELD = "id";

export const BattlePetBreedsTitle = (record: TBattlePetBreeds): string => {
  return record.id?.toString() || String(record.id);
};
