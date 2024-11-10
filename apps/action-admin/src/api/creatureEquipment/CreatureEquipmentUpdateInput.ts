import { InputJsonValue } from "../../types";
import { CreatureUpdateManyWithoutCreatureEquipmentsInput } from "./CreatureUpdateManyWithoutCreatureEquipmentsInput";

export type CreatureEquipmentUpdateInput = {
  appereance?: InputJsonValue;
  creatures?: CreatureUpdateManyWithoutCreatureEquipmentsInput;
  visual?: InputJsonValue;
};
