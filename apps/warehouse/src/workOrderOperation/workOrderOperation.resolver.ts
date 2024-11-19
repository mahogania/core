import * as graphql from "@nestjs/graphql";
import { WorkOrderOperationResolverBase } from "./base/workOrderOperation.resolver.base";
import { WorkOrderOperation } from "./base/WorkOrderOperation";
import { WorkOrderOperationService } from "./workOrderOperation.service";

@graphql.Resolver(() => WorkOrderOperation)
export class WorkOrderOperationResolver extends WorkOrderOperationResolverBase {
  constructor(protected readonly service: WorkOrderOperationService) {
    super(service);
  }
}
