import * as graphql from "@nestjs/graphql";
import { MaintenanceVisitPurposeResolverBase } from "./base/maintenanceVisitPurpose.resolver.base";
import { MaintenanceVisitPurpose } from "./base/MaintenanceVisitPurpose";
import { MaintenanceVisitPurposeService } from "./maintenanceVisitPurpose.service";

@graphql.Resolver(() => MaintenanceVisitPurpose)
export class MaintenanceVisitPurposeResolver extends MaintenanceVisitPurposeResolverBase {
  constructor(protected readonly service: MaintenanceVisitPurposeService) {
    super(service);
  }
}
