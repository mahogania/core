import { SortOrder } from "../../util/SortOrder";

export type ConnectedAppOrderByInput = {
  authorizationUri?: SortOrder;
  clientId?: SortOrder;
  clientSecret?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  introspectionUri?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  openidConfiguration?: SortOrder;
  owner?: SortOrder;
  providerName?: SortOrder;
  redirectUri?: SortOrder;
  revocationUri?: SortOrder;
  tokenUri?: SortOrder;
  updatedAt?: SortOrder;
  userinfoUri?: SortOrder;
};
