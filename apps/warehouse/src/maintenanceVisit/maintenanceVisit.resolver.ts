import * as graphql from "@nestjs/graphql";
import { MaintenanceVisitResolverBase } from "./base/maintenanceVisit.resolver.base";
import { MaintenanceVisit } from "./base/MaintenanceVisit";
import { MaintenanceVisitService } from "./maintenanceVisit.service";

@graphql.Resolver(() => MaintenanceVisit)
export class MaintenanceVisitResolver extends MaintenanceVisitResolverBase {
  constructor(protected readonly service: MaintenanceVisitService) {
    super(service);
  }
}
