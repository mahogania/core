import * as graphql from "@nestjs/graphql";
import { MaintenanceScheduleItemResolverBase } from "./base/maintenanceScheduleItem.resolver.base";
import { MaintenanceScheduleItem } from "./base/MaintenanceScheduleItem";
import { MaintenanceScheduleItemService } from "./maintenanceScheduleItem.service";

@graphql.Resolver(() => MaintenanceScheduleItem)
export class MaintenanceScheduleItemResolver extends MaintenanceScheduleItemResolverBase {
  constructor(protected readonly service: MaintenanceScheduleItemService) {
    super(service);
  }
}
