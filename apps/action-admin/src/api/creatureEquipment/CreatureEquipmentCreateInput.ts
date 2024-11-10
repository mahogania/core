import { InputJsonValue } from "../../types";
import { CreatureCreateNestedManyWithoutCreatureEquipmentsInput } from "./CreatureCreateNestedManyWithoutCreatureEquipmentsInput";

export type CreatureEquipmentCreateInput = {
  appereance: InputJsonValue;
  creatures?: CreatureCreateNestedManyWithoutCreatureEquipmentsInput;
  visual: InputJsonValue;
};
