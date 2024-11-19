import { PetNameGeneration as TPetNameGeneration } from "../api/petNameGeneration/PetNameGeneration";

export const PETNAMEGENERATION_TITLE_FIELD = "id";

export const PetNameGenerationTitle = (record: TPetNameGeneration): string => {
  return record.id?.toString() || String(record.id);
};
