import * as graphql from "@nestjs/graphql";
import { AllowedToTransactWithResolverBase } from "./base/allowedToTransactWith.resolver.base";
import { AllowedToTransactWith } from "./base/AllowedToTransactWith";
import { AllowedToTransactWithService } from "./allowedToTransactWith.service";

@graphql.Resolver(() => AllowedToTransactWith)
export class AllowedToTransactWithResolver extends AllowedToTransactWithResolverBase {
  constructor(protected readonly service: AllowedToTransactWithService) {
    super(service);
  }
}
