import { BattlePetBreedsWhereInput } from "./BattlePetBreedsWhereInput";
import { BattlePetBreedsOrderByInput } from "./BattlePetBreedsOrderByInput";

export type BattlePetBreedsFindManyArgs = {
  where?: BattlePetBreedsWhereInput;
  orderBy?: Array<BattlePetBreedsOrderByInput>;
  skip?: number;
  take?: number;
};
