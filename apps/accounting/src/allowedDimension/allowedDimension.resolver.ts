import * as graphql from "@nestjs/graphql";
import { AllowedDimensionResolverBase } from "./base/allowedDimension.resolver.base";
import { AllowedDimension } from "./base/AllowedDimension";
import { AllowedDimensionService } from "./allowedDimension.service";

@graphql.Resolver(() => AllowedDimension)
export class AllowedDimensionResolver extends AllowedDimensionResolverBase {
  constructor(protected readonly service: AllowedDimensionService) {
    super(service);
  }
}
