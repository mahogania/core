import { WeaknessWhereInput } from "./WeaknessWhereInput";
import { WeaknessOrderByInput } from "./WeaknessOrderByInput";

export type WeaknessFindManyArgs = {
  where?: WeaknessWhereInput;
  orderBy?: Array<WeaknessOrderByInput>;
  skip?: number;
  take?: number;
};
