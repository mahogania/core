import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  commentBy?: StringNullableFilter;
  commentEmail?: StringNullableFilter;
  commentType?: StringNullableFilter;
  content?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  ipAddress?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  owner?: StringNullableFilter;
  published?: IntNullableFilter;
  referenceDoctype?: StringNullableFilter;
  referenceName?: StringNullableFilter;
  referenceOwner?: StringNullableFilter;
  seen?: IntNullableFilter;
  subject?: StringNullableFilter;
};
