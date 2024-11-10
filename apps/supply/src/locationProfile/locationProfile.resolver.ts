import * as graphql from "@nestjs/graphql";
import { LocationProfileResolverBase } from "./base/locationProfile.resolver.base";
import { LocationProfile } from "./base/LocationProfile";
import { LocationProfileService } from "./locationProfile.service";

@graphql.Resolver(() => LocationProfile)
export class LocationProfileResolver extends LocationProfileResolverBase {
  constructor(protected readonly service: LocationProfileService) {
    super(service);
  }
}
