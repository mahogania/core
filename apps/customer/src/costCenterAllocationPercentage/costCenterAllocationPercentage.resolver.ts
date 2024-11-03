import * as graphql from "@nestjs/graphql";
import { CostCenterAllocationPercentageResolverBase } from "./base/costCenterAllocationPercentage.resolver.base";
import { CostCenterAllocationPercentage } from "./base/CostCenterAllocationPercentage";
import { CostCenterAllocationPercentageService } from "./costCenterAllocationPercentage.service";

@graphql.Resolver(() => CostCenterAllocationPercentage)
export class CostCenterAllocationPercentageResolver extends CostCenterAllocationPercentageResolverBase {
  constructor(
    protected readonly service: CostCenterAllocationPercentageService
  ) {
    super(service);
  }
}
