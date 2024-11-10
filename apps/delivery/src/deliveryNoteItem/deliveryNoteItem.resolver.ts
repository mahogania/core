import * as graphql from "@nestjs/graphql";
import { DeliveryNoteItemResolverBase } from "./base/deliveryNoteItem.resolver.base";
import { DeliveryNoteItem } from "./base/DeliveryNoteItem";
import { DeliveryNoteItemService } from "./deliveryNoteItem.service";

@graphql.Resolver(() => DeliveryNoteItem)
export class DeliveryNoteItemResolver extends DeliveryNoteItemResolverBase {
  constructor(protected readonly service: DeliveryNoteItemService) {
    super(service);
  }
}
