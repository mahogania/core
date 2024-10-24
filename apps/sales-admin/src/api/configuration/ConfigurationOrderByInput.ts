import { SortOrder } from "../../util/SortOrder";

export type ConfigurationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  processConfigurationId?: SortOrder;
  productConfigurationId?: SortOrder;
  updatedAt?: SortOrder;
};
