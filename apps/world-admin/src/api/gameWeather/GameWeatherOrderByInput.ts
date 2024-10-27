import { SortOrder } from "../../util/SortOrder";

export type GameWeatherOrderByInput = {
  chance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  kind?: SortOrder;
  script?: SortOrder;
  season?: SortOrder;
  updatedAt?: SortOrder;
  zone?: SortOrder;
};
