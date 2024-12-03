import { CreatureEquipmentWhereInput } from "./CreatureEquipmentWhereInput";
import { CreatureEquipmentOrderByInput } from "./CreatureEquipmentOrderByInput";

export type CreatureEquipmentFindManyArgs = {
  where?: CreatureEquipmentWhereInput;
  orderBy?: Array<CreatureEquipmentOrderByInput>;
  skip?: number;
  take?: number;
};
