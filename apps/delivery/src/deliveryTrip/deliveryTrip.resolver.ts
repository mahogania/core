import * as graphql from "@nestjs/graphql";
import { DeliveryTripResolverBase } from "./base/deliveryTrip.resolver.base";
import { DeliveryTrip } from "./base/DeliveryTrip";
import { DeliveryTripService } from "./deliveryTrip.service";

@graphql.Resolver(() => DeliveryTrip)
export class DeliveryTripResolver extends DeliveryTripResolverBase {
  constructor(protected readonly service: DeliveryTripService) {
    super(service);
  }
}
