import * as graphql from "@nestjs/graphql";
import { ShipmentParcelResolverBase } from "./base/shipmentParcel.resolver.base";
import { ShipmentParcel } from "./base/ShipmentParcel";
import { ShipmentParcelService } from "./shipmentParcel.service";

@graphql.Resolver(() => ShipmentParcel)
export class ShipmentParcelResolver extends ShipmentParcelResolverBase {
  constructor(protected readonly service: ShipmentParcelService) {
    super(service);
  }
}
