import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConnectedAppWhereInput = {
  authorizationUri?: StringNullableFilter;
  clientId?: StringNullableFilter;
  clientSecret?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  introspectionUri?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  openidConfiguration?: StringNullableFilter;
  owner?: StringNullableFilter;
  providerName?: StringNullableFilter;
  redirectUri?: StringNullableFilter;
  revocationUri?: StringNullableFilter;
  tokenUri?: StringNullableFilter;
  userinfoUri?: StringNullableFilter;
};
