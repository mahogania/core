import * as graphql from "@nestjs/graphql";
import { CostCenterResolverBase } from "./base/costCenter.resolver.base";
import { CostCenter } from "./base/CostCenter";
import { CostCenterService } from "./costCenter.service";

@graphql.Resolver(() => CostCenter)
export class CostCenterResolver extends CostCenterResolverBase {
  constructor(protected readonly service: CostCenterService) {
    super(service);
  }
}
