import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type SubcontractingBomWhereInput = {
  conversionFactor?: FloatNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  finishedGood?: StringNullableFilter;
  finishedGoodBom?: StringNullableFilter;
  finishedGoodQty?: FloatNullableFilter;
  finishedGoodUom?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isActive?: BooleanNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  serviceItem?: StringNullableFilter;
  serviceItemQty?: FloatNullableFilter;
  serviceItemUom?: StringNullableFilter;
};
