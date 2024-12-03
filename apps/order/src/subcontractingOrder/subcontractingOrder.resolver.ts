import * as graphql from "@nestjs/graphql";
import { SubcontractingOrderResolverBase } from "./base/subcontractingOrder.resolver.base";
import { SubcontractingOrder } from "./base/SubcontractingOrder";
import { SubcontractingOrderService } from "./subcontractingOrder.service";

@graphql.Resolver(() => SubcontractingOrder)
export class SubcontractingOrderResolver extends SubcontractingOrderResolverBase {
  constructor(protected readonly service: SubcontractingOrderService) {
    super(service);
  }
}
