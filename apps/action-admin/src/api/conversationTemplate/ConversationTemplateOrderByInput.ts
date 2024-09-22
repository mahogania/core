import { SortOrder } from "../../util/SortOrder";

export type ConversationTemplateOrderByInput = {
  createdAt?: SortOrder;
  firstLineId?: SortOrder;
  flags?: SortOrder;
  id?: SortOrder;
  scriptName?: SortOrder;
  textureKitId?: SortOrder;
  updatedAt?: SortOrder;
  verifiedBuild?: SortOrder;
};
