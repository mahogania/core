import { PetNameGenerationWhereInput } from "./PetNameGenerationWhereInput";
import { PetNameGenerationOrderByInput } from "./PetNameGenerationOrderByInput";

export type PetNameGenerationFindManyArgs = {
  where?: PetNameGenerationWhereInput;
  orderBy?: Array<PetNameGenerationOrderByInput>;
  skip?: number;
  take?: number;
};
