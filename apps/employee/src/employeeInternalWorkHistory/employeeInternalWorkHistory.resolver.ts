import * as graphql from "@nestjs/graphql";
import { EmployeeInternalWorkHistoryResolverBase } from "./base/employeeInternalWorkHistory.resolver.base";
import { EmployeeInternalWorkHistory } from "./base/EmployeeInternalWorkHistory";
import { EmployeeInternalWorkHistoryService } from "./employeeInternalWorkHistory.service";

@graphql.Resolver(() => EmployeeInternalWorkHistory)
export class EmployeeInternalWorkHistoryResolver extends EmployeeInternalWorkHistoryResolverBase {
  constructor(protected readonly service: EmployeeInternalWorkHistoryService) {
    super(service);
  }
}
