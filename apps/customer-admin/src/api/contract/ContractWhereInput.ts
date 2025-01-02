import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ContractWhereInput = {
  amendedFrom?: StringNullableFilter;
  contractTemplate?: StringNullableFilter;
  contractTerms?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  documentName?: StringNullableFilter;
  documentType?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  fulfilmentDeadline?: DateTimeNullableFilter;
  fulfilmentStatus?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  ipAddress?: StringNullableFilter;
  isSigned?: BooleanNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  partyName?: StringNullableFilter;
  partyType?: StringNullableFilter;
  partyUser?: StringNullableFilter;
  requiresFulfilment?: BooleanNullableFilter;
  signedByCompany?: StringNullableFilter;
  signedOn?: DateTimeNullableFilter;
  signee?: StringNullableFilter;
  signeeCompany?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
};