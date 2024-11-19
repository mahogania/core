import * as graphql from "@nestjs/graphql";
import { WorkOrderItemResolverBase } from "./base/workOrderItem.resolver.base";
import { WorkOrderItem } from "./base/WorkOrderItem";
import { WorkOrderItemService } from "./workOrderItem.service";

@graphql.Resolver(() => WorkOrderItem)
export class WorkOrderItemResolver extends WorkOrderItemResolverBase {
  constructor(protected readonly service: WorkOrderItemService) {
    super(service);
  }
}
