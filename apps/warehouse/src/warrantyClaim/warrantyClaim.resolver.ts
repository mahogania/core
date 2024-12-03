import * as graphql from "@nestjs/graphql";
import { WarrantyClaimResolverBase } from "./base/warrantyClaim.resolver.base";
import { WarrantyClaim } from "./base/WarrantyClaim";
import { WarrantyClaimService } from "./warrantyClaim.service";

@graphql.Resolver(() => WarrantyClaim)
export class WarrantyClaimResolver extends WarrantyClaimResolverBase {
  constructor(protected readonly service: WarrantyClaimService) {
    super(service);
  }
}
