import { ConversationActorsWhereInput } from "./ConversationActorsWhereInput";
import { ConversationActorsOrderByInput } from "./ConversationActorsOrderByInput";

export type ConversationActorsFindManyArgs = {
  where?: ConversationActorsWhereInput;
  orderBy?: Array<ConversationActorsOrderByInput>;
  skip?: number;
  take?: number;
};
