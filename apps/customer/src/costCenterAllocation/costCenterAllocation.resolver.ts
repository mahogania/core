import * as graphql from "@nestjs/graphql";
import { CostCenterAllocationResolverBase } from "./base/costCenterAllocation.resolver.base";
import { CostCenterAllocation } from "./base/CostCenterAllocation";
import { CostCenterAllocationService } from "./costCenterAllocation.service";

@graphql.Resolver(() => CostCenterAllocation)
export class CostCenterAllocationResolver extends CostCenterAllocationResolverBase {
  constructor(protected readonly service: CostCenterAllocationService) {
    super(service);
  }
}
