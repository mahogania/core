import * as graphql from "@nestjs/graphql";
import { EmployeeExternalWorkHistoryResolverBase } from "./base/employeeExternalWorkHistory.resolver.base";
import { EmployeeExternalWorkHistory } from "./base/EmployeeExternalWorkHistory";
import { EmployeeExternalWorkHistoryService } from "./employeeExternalWorkHistory.service";

@graphql.Resolver(() => EmployeeExternalWorkHistory)
export class EmployeeExternalWorkHistoryResolver extends EmployeeExternalWorkHistoryResolverBase {
  constructor(protected readonly service: EmployeeExternalWorkHistoryService) {
    super(service);
  }
}
