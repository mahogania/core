import * as graphql from "@nestjs/graphql";
import { WorkOrderResolverBase } from "./base/workOrder.resolver.base";
import { WorkOrder } from "./base/WorkOrder";
import { WorkOrderService } from "./workOrder.service";

@graphql.Resolver(() => WorkOrder)
export class WorkOrderResolver extends WorkOrderResolverBase {
  constructor(protected readonly service: WorkOrderService) {
    super(service);
  }
}
