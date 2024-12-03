import { SortOrder } from "../../util/SortOrder";

export type ConversationLineTemplateOrderByInput = {
  actorIdx?: SortOrder;
  chatType?: SortOrder;
  createdAt?: SortOrder;
  flags?: SortOrder;
  id?: SortOrder;
  uiCameraId?: SortOrder;
  updatedAt?: SortOrder;
  verifiedBuild?: SortOrder;
};
