import { DeliveryNoteItemWhereInput } from "./DeliveryNoteItemWhereInput";
import { DeliveryNoteItemOrderByInput } from "./DeliveryNoteItemOrderByInput";

export type DeliveryNoteItemFindManyArgs = {
  where?: DeliveryNoteItemWhereInput;
  orderBy?: Array<DeliveryNoteItemOrderByInput>;
  skip?: number;
  take?: number;
};
