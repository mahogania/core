import { SortOrder } from "../../util/SortOrder";

export type ConversationActorsOrderByInput = {
  activePlayerObject?: SortOrder;
  conversationActorGuid?: SortOrder;
  conversationActorId?: SortOrder;
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  creatureDisplayInfoId?: SortOrder;
  creatureId?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  noActorObject?: SortOrder;
  updatedAt?: SortOrder;
  verifiedBuild?: SortOrder;
};
