import * as graphql from "@nestjs/graphql";
import { ShipmentDeliveryNoteResolverBase } from "./base/shipmentDeliveryNote.resolver.base";
import { ShipmentDeliveryNote } from "./base/ShipmentDeliveryNote";
import { ShipmentDeliveryNoteService } from "./shipmentDeliveryNote.service";

@graphql.Resolver(() => ShipmentDeliveryNote)
export class ShipmentDeliveryNoteResolver extends ShipmentDeliveryNoteResolverBase {
  constructor(protected readonly service: ShipmentDeliveryNoteService) {
    super(service);
  }
}
