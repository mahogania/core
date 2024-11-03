import * as graphql from "@nestjs/graphql";
import { DeliveryStopResolverBase } from "./base/deliveryStop.resolver.base";
import { DeliveryStop } from "./base/DeliveryStop";
import { DeliveryStopService } from "./deliveryStop.service";

@graphql.Resolver(() => DeliveryStop)
export class DeliveryStopResolver extends DeliveryStopResolverBase {
  constructor(protected readonly service: DeliveryStopService) {
    super(service);
  }
}
